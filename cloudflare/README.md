# Center MMA media Worker

This Worker stores file bytes in the private `centermma-assets` R2 bucket under `{bucket}/{path}`. It checks Supabase Storage RLS before private reads, uploads, and deletes. New uploads put the bytes in R2 and leave only a one-byte metadata marker in Supabase so the existing access policies continue to work without duplicating the media file.

## Existing files during cutover

Existing files stay in Supabase until they are copied and verified. The first app request for an old private file checks its normal Supabase permissions, serves its short-lived Supabase URL, and copies the file into R2 in the background. The first request for an old public news or shop image serves the Supabase object and also copies it into R2. Later reads come from R2. Files that nobody opens remain in Supabase until requested; do not delete the Supabase copies before checking the R2 bucket.

## Configure and deploy

1. Set a unique signing secret: `npx wrangler secret put R2_SIGNING_SECRET`.
2. Deploy from this directory: `npx wrangler deploy`.
3. Set the deployed Worker URL in `R2_MEDIA_WORKER_URL` in `index.html`.
4. Keep the production and preview app origins in the Worker CORS allow-list.

The Worker requires the `ASSETS` R2 binding and variables in `wrangler.toml`. Never add the signing secret to the HTML app or Git.
