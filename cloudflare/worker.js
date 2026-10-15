const BUCKETS = new Set([
  "training-library",
  "member-contracts",
  "shop-images",
  "news-images",
  "club-documents",
  "member-photos",
]);
const PUBLIC_BUCKETS = new Set(["news-images", "shop-images"]);
const UPLOAD_POLICIES = {
  "training-library": { maxBytes: 20 * 1024 * 1024, types: new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]) },
  "member-contracts": { maxBytes: 15 * 1024 * 1024, types: new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]) },
  "shop-images": { maxBytes: 8 * 1024 * 1024, types: new Set(["image/jpeg", "image/png", "image/webp"]) },
  "news-images": { maxBytes: 8 * 1024 * 1024, types: new Set(["image/jpeg", "image/png", "image/webp"]) },
  "club-documents": { maxBytes: 20 * 1024 * 1024, types: new Set(["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/plain", "image/jpeg", "image/png", "image/webp", "image/gif"]) },
  "member-photos": { maxBytes: 5 * 1024 * 1024, types: new Set(["image/jpeg", "image/png", "image/webp"]) },
};

function response(body, status, origin, extra = {}) {
  const headers = new Headers(extra);
  headers.set("Access-Control-Allow-Origin", origin || "null");
  headers.set("Vary", "Origin");
  headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type, X-Upsert");
  headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  headers.set("X-Content-Type-Options", "nosniff");
  return new Response(body, { status, headers });
}

function objectPath(bucket, key) {
  if (!BUCKETS.has(bucket) || !key || key.length > 1024 || key.split("/").some(p => !p || p === "." || p === "..")) {
    throw new Error("Invalid bucket or object path");
  }
  return `${bucket}/${key}`;
}

async function hmac(secret, message) {
  const cryptoKey = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(message)));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function verifyUser(request, env) {
  const authorization = request.headers.get("Authorization") || "";
  if (!authorization.startsWith("Bearer ")) throw new Error("Sign in is required");
  const result = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: authorization } });
  if (!result.ok) throw new Error("Invalid or expired session");
  return authorization;
}

async function authorizeStorage(env, bearer, bucket, key, action, upsert = false) {
  const encodedKey = key.split("/").map(encodeURIComponent).join("/");
  const endpoint = action === "read"
    ? `/storage/v1/object/sign/${bucket}/${encodedKey}`
    : `/storage/v1/object/upload/sign/${bucket}/${encodedKey}`;
  const result = await fetch(`${env.SUPABASE_URL}${endpoint}`, {
    method: "POST",
    headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: bearer, "Content-Type": "application/json" },
    body: JSON.stringify(action === "read" ? { expiresIn: 300 } : { upsert }),
  });
  if (!result.ok) throw new Error("Supabase denied access to this file");
  return action === "read" ? await result.json() : null;
}

async function cacheLegacyObject(env, signedUrl, key) {
  const source = legacySignedUrl(env, signedUrl);
  const result = await fetch(source);
  if (!result.ok) return;
  const headers = new Headers(result.headers);
  const contentType = headers.get("Content-Type") || "application/octet-stream";
  await env.ASSETS.put(key, await result.arrayBuffer(), {
    httpMetadata: {
      contentType,
      cacheControl: "public, max-age=31536000, immutable",
    },
  });
}

function legacySignedUrl(env, signedUrl) {
  if (/^https?:\/\//i.test(signedUrl)) return new URL(signedUrl).toString();
  const path = signedUrl.startsWith("/storage/v1/")
    ? signedUrl
    : `/storage/v1/${signedUrl.replace(/^\//, "")}`;
  return new URL(path, env.SUPABASE_URL).toString();
}

async function handle(request, env, ctx) {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigins = new Set((env.APP_ORIGINS || "").split(",").map(value => value.trim()).filter(Boolean));
  const url = new URL(request.url);
  const publicAssetRequest = url.pathname === "/v1/public" && request.method === "GET";
  const signedAssetRequest = url.pathname.startsWith("/v1/object/") && request.method === "GET";
  // <img> and other simple public asset requests usually omit the Origin header.
  // Keep the API origin-restricted, while allowing anonymous requests only for public buckets.
  if (!publicAssetRequest && !signedAssetRequest && !allowedOrigins.has(origin)) return response("Origin not allowed", 403, origin);
  if (request.method === "OPTIONS") return response(null, 204, origin);

  if (url.pathname === "/v1/sign" && request.method === "POST") {
    const bearer = await verifyUser(request, env);
    const { bucket, path, expiresIn = 300 } = await request.json();
    const key = objectPath(bucket, path);
    const authorization = await authorizeStorage(env, bearer, bucket, path, "read");
    if (!await env.ASSETS.head(key)) {
      // Keep legacy files available during cutover, and copy them into R2 on first access.
      const signedUrl = authorization.signedURL || authorization.signedUrl;
      if (!signedUrl) throw new Error("Supabase did not return a signed file URL");
      const legacyUrl = legacySignedUrl(env, signedUrl);
      ctx.waitUntil(cacheLegacyObject(env, legacyUrl, key).catch(() => {}));
      return response(JSON.stringify({ signedUrl: legacyUrl }), 200, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    }
    const exp = Math.floor(Date.now() / 1000) + Math.min(3600, Math.max(60, Number(expiresIn) || 300));
    const sig = await hmac(env.R2_SIGNING_SECRET, `${key}\n${exp}`);
    const signedUrl = `${url.origin}/v1/object/${encodeURIComponent(bucket)}/${path.split("/").map(encodeURIComponent).join("/")}?exp=${exp}&sig=${sig}`;
    return response(JSON.stringify({ signedUrl }), 200, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  }

  if (url.pathname === "/v1/upload" && request.method === "POST") {
    const bearer = await verifyUser(request, env);
    const bucket = url.searchParams.get("bucket") || "";
    const path = url.searchParams.get("path") || "";
    const upsert = url.searchParams.get("upsert") === "true";
    const key = objectPath(bucket, path);
    const policy = UPLOAD_POLICIES[bucket];
    const contentType = (request.headers.get("Content-Type") || "application/octet-stream").split(";")[0].trim().toLowerCase();
    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (!policy || !policy.types.has(contentType)) throw new Error("This file type is not allowed in this bucket");
    if (contentLength > policy.maxBytes) throw new Error("This file exceeds the size limit for this bucket");
    await authorizeStorage(env, bearer, bucket, path, "write", upsert);
    if (!upsert && await env.ASSETS.head(key)) return response(JSON.stringify({ error: "Object already exists" }), 409, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    let byteCount = 0;
    const uploadBody = request.body
      ? request.body.pipeThrough(new TransformStream({
        transform(chunk, controller) {
          byteCount += chunk.byteLength;
          if (byteCount > policy.maxBytes) throw new Error("This file exceeds the size limit for this bucket");
          controller.enqueue(chunk);
        },
      }))
      : new Uint8Array(0);
    await env.ASSETS.put(key, uploadBody, { httpMetadata: { contentType, cacheControl: "public, max-age=31536000, immutable" } });
    const stored = await env.ASSETS.head(key);
    if (!stored || stored.size !== byteCount || (contentLength && contentLength !== byteCount)) throw new Error("R2 upload verification failed");
    const marker = await fetch(`${env.SUPABASE_URL}/storage/v1/object/${bucket}/${path.split("/").map(encodeURIComponent).join("/")}`, {
      method: "POST",
      headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: bearer, "Content-Type": "application/octet-stream", "x-upsert": String(upsert) },
      body: new Uint8Array(0),
    });
    // Keep the R2 copy if metadata creation fails: an upsert may have replaced a previous object.
    if (!marker.ok) throw new Error("Could not preserve Supabase access policy for this file");
    return response(JSON.stringify({ path }), 200, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  }

  if (url.pathname === "/v1/migrate" && request.method === "POST") {
    const bearer = await verifyUser(request, env);
    const { bucket, paths } = await request.json();
    if (!BUCKETS.has(bucket) || !Array.isArray(paths) || paths.length > 20) throw new Error("Invalid migration request");
    const results = [];
    for (const path of paths) {
      const key = objectPath(bucket, path);
      if (await env.ASSETS.head(key)) {
        results.push({ path, status: "already-present" });
        continue;
      }
      const authorization = await authorizeStorage(env, bearer, bucket, path, "read");
      const signedUrl = authorization.signedURL || authorization.signedUrl;
      if (!signedUrl) throw new Error("Supabase did not return a signed file URL");
      const source = await fetch(legacySignedUrl(env, signedUrl));
      if (!source.ok) throw new Error(`Could not read ${path} from Supabase (${source.status})`);
      const contentLength = Number(source.headers.get("Content-Length") || 0);
      if (contentLength > 100 * 1024 * 1024) throw new Error(`File is too large to migrate in one request: ${path}`);
      let byteCount = 0;
      const countedBody = source.body.pipeThrough(new TransformStream({
        transform(chunk, controller) {
          byteCount += chunk.byteLength;
          if (byteCount > 100 * 1024 * 1024) throw new Error(`File is too large to migrate in one request: ${path}`);
          controller.enqueue(chunk);
        },
      }));
      await env.ASSETS.put(key, countedBody, {
        httpMetadata: {
          contentType: source.headers.get("Content-Type") || "application/octet-stream",
          cacheControl: "public, max-age=31536000, immutable",
        },
      });
      const stored = await env.ASSETS.head(key);
      if (!stored || stored.size !== byteCount || (contentLength && contentLength !== byteCount)) {
        await env.ASSETS.delete(key);
        throw new Error(`R2 verification failed for ${path}; no partial copy was kept`);
      }
      results.push({ path, status: "copied", bytes: byteCount });
    }
    return response(JSON.stringify({ bucket, results }), 200, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  }

  if (url.pathname === "/v1/remove" && request.method === "POST") {
    const bearer = await verifyUser(request, env);
    const { bucket, paths } = await request.json();
    if (!BUCKETS.has(bucket) || !Array.isArray(paths) || paths.length > 100) throw new Error("Invalid remove request");
    const keys = paths.map(path => objectPath(bucket, path));
    const removed = await fetch(`${env.SUPABASE_URL}/storage/v1/object/${bucket}`, {
      method: "DELETE",
      headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: bearer, "Content-Type": "application/json" },
      body: JSON.stringify({ prefixes: paths }),
    });
    if (!removed.ok) throw new Error("Supabase denied deleting these files");
    await Promise.all(keys.map(key => env.ASSETS.delete(key)));
    return response(JSON.stringify({ paths }), 200, origin, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  }

  if (url.pathname.startsWith("/v1/object/") && request.method === "GET") {
    const parts = url.pathname.slice("/v1/object/".length).split("/");
    const bucket = decodeURIComponent(parts.shift() || "");
    const path = parts.map(decodeURIComponent).join("/");
    const key = objectPath(bucket, path);
    const exp = Number(url.searchParams.get("exp"));
    if (!Number.isInteger(exp) || exp < Date.now() / 1000 || exp > Date.now() / 1000 + 3601) return response("Link expired", 403, origin);
    const expected = await hmac(env.R2_SIGNING_SECRET, `${key}\n${exp}`);
    if (url.searchParams.get("sig") !== expected) return response("Invalid signature", 403, origin);
    const object = await env.ASSETS.get(key);
    if (!object) return response("Not found", 404, origin);
    const headers = new Headers(); object.writeHttpMetadata(headers); headers.set("ETag", object.httpEtag); headers.set("Cache-Control", "private, max-age=60");
    headers.set("Access-Control-Allow-Origin", origin); headers.set("X-Content-Type-Options", "nosniff");
    return new Response(object.body, { headers });
  }

  if (url.pathname === "/v1/public" && request.method === "GET") {
    const bucket = url.searchParams.get("bucket") || ""; const path = url.searchParams.get("path") || "";
    if (!PUBLIC_BUCKETS.has(bucket)) return response("Not found", 404, origin);
    const object = await env.ASSETS.get(objectPath(bucket, path));
    if (!object) {
      const source = await fetch(`${env.SUPABASE_URL}/storage/v1/object/public/${bucket}/${path.split("/").map(encodeURIComponent).join("/")}`);
      if (!source.ok) return response("Not found", source.status, origin);
      const headers = new Headers(source.headers);
      headers.set("Cache-Control", "public, max-age=300");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("X-Content-Type-Options", "nosniff");
      const copy = source.clone();
      ctx.waitUntil(copy.arrayBuffer().then(bytes => env.ASSETS.put(objectPath(bucket, path), bytes, {
        httpMetadata: { contentType: headers.get("Content-Type") || "application/octet-stream", cacheControl: "public, max-age=31536000, immutable" },
      })).catch(() => {}));
      return new Response(source.body, { status: source.status, headers });
    }
    const headers = new Headers(); object.writeHttpMetadata(headers); headers.set("ETag", object.httpEtag); headers.set("Cache-Control", "public, max-age=300"); headers.set("Access-Control-Allow-Origin", "*"); headers.set("X-Content-Type-Options", "nosniff");
    return new Response(object.body, { headers });
  }
  return response("Not found", 404, origin);
}

export default {
  async fetch(request, env, ctx) {
    try { return await handle(request, env, ctx); }
    catch (error) { return response(JSON.stringify({ error: error.message || "Request failed" }), 400, request.headers.get("Origin"), { "Content-Type": "application/json", "Cache-Control": "no-store" }); }
  },
};
