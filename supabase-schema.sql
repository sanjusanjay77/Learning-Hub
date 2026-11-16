-- AIML Learning Hub: run this entire script in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.topics (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 module text not null, title text not null, sort_order integer default 0,
 completed boolean not null default false, completed_at timestamptz,
 created_at timestamptz not null default now()
);
create table if not exists public.notes (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 title text not null, body text default '', topic text, file_path text, file_name text,
 created_at timestamptz not null default now()
);
create table if not exists public.videos (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 title text not null, url text not null, video_id text not null, topic text,
 created_at timestamptz not null default now()
);
create table if not exists public.learning_days (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 day date not null, created_at timestamptz not null default now(), unique(user_id, day)
);
create table if not exists public.quiz_attempts (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 subject text not null, score integer not null, total integer not null, created_at timestamptz not null default now()
);

alter table public.topics enable row level security;
alter table public.notes enable row level security;
alter table public.videos enable row level security;
alter table public.learning_days enable row level security;
alter table public.quiz_attempts enable row level security;

do $$ begin
 create policy "Users manage their own topics" on public.topics for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users manage their own notes" on public.notes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users manage their own videos" on public.videos for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users manage their own learning days" on public.learning_days for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users manage their own quiz attempts" on public.quiz_attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('study-files', 'study-files', false, 10485760, array['application/pdf'])
on conflict (id) do update set public = false, file_size_limit = 10485760, allowed_mime_types = array['application/pdf'];

do $$ begin
 create policy "Users upload their own study PDFs" on storage.objects for insert to authenticated with check (bucket_id = 'study-files' and (storage.foldername(name))[1] = auth.uid()::text);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users read their own study PDFs" on storage.objects for select to authenticated using (bucket_id = 'study-files' and (storage.foldername(name))[1] = auth.uid()::text);
exception when duplicate_object then null; end $$;
do $$ begin
 create policy "Users delete their own study PDFs" on storage.objects for delete to authenticated using (bucket_id = 'study-files' and (storage.foldername(name))[1] = auth.uid()::text);
exception when duplicate_object then null; end $$;
