
-- Advanced notes metadata
alter table public.notes add column if not exists tags text[] not null default '{}';
alter table public.notes add column if not exists is_favorite boolean not null default false;

-- New AIML Learning Hub feature tables (safe to run on an existing project)
create table if not exists public.flashcards (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 front text not null, back text default '', topic text, created_at timestamptz not null default now()
);
create table if not exists public.formulas (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 name text not null, expression text, meaning text, topic text, created_at timestamptz not null default now()
);
create table if not exists public.daily_goals (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 title text not null, minutes integer default 25, done boolean not null default false, created_at timestamptz not null default now()
);
create table if not exists public.revision_tasks (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 topic text not null, due_date date, priority text default 'Medium', status text default 'Pending', created_at timestamptz not null default now()
);
create table if not exists public.projects (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 name text not null, technology text, description text, github_url text, status text default 'Idea', created_at timestamptz not null default now()
);
create table if not exists public.career_items (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 name text not null, type text, date date, link text, status text, created_at timestamptz not null default now()
);
create table if not exists public.datasets (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 name text not null, source_url text, domain text, format text, description text, created_at timestamptz not null default now()
);

do $$ declare t text; begin
 foreach t in array array['flashcards','formulas','daily_goals','revision_tasks','projects','career_items','datasets'] loop
  execute format('alter table public.%I enable row level security', t);
  begin
   execute format('create policy "Users manage own %s" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id)', t, t);
  exception when duplicate_object then null;
  end;
 end loop;
end $$;
