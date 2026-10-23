-- Allow administrators to change a member's birth date from the admin panel.
-- Keep direct table update permissions unchanged.

create or replace function public.admin_update_member_birth_date(
  p_target_member_id uuid,
  p_birth_date date
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;

  if not exists (
    select 1
    from public.members as admin_member
    where admin_member.user_id = auth.uid()
      and admin_member.role = 'admin'
  ) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;

  if p_birth_date is not null and p_birth_date > current_date then
    raise exception 'Birth date cannot be in the future' using errcode = '22007';
  end if;

  update public.members
  set birth_date = p_birth_date
  where id = p_target_member_id;

  if not found then
    raise exception 'Member not found' using errcode = 'P0002';
  end if;
end;
$$;

revoke all on function public.admin_update_member_birth_date(uuid, date) from public;
grant execute on function public.admin_update_member_birth_date(uuid, date) to authenticated;
