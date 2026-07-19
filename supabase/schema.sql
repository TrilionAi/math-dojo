-- Math Dojo — cloud progress sync schema.
-- Run this once in the Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run (uses IF NOT EXISTS / OR REPLACE where possible).

create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_results jsonb not null default '{}'::jsonb,
  practice_days jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists "select own progress" on public.progress;
create policy "select own progress"
  on public.progress for select
  using (auth.uid() = user_id);

drop policy if exists "insert own progress" on public.progress;
create policy "insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "update own progress" on public.progress;
create policy "update own progress"
  on public.progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Keep updated_at accurate on every upsert without the client having to set it.
create or replace function public.set_progress_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists progress_set_updated_at on public.progress;
create trigger progress_set_updated_at
  before insert or update on public.progress
  for each row
  execute function public.set_progress_updated_at();
