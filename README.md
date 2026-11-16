# AIML Learning Hub

A personal AIML learning dashboard built with React, Vite and Supabase. Includes a topic roadmap, completion tracking, notes, private PDF storage, YouTube embeds, quizzes, progress analytics and a daily study streak.

## 1. Requirements
- Node.js 20 or newer (Node 22 is fine)
- VS Code
- A free Supabase account for cloud sync and PDF uploads

## 2. Run locally
Open this folder in VS Code. In the VS Code terminal:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Without Supabase credentials the app runs in local demo mode. Text notes, videos, topics and quiz history are stored in this browser only. PDF uploads and cross-device sync require Supabase.

## 3. Enable cloud database and private PDF storage
1. Create a project at https://supabase.com.
2. Open **SQL Editor** in your Supabase project.
3. Open `supabase-schema.sql` from this folder, copy all its contents and run it.
4. Open **Project Settings → API**. Copy the Project URL and the `anon` / publishable public key. Never use the `service_role` secret key in this website.
5. In this project folder, copy `.env.example` to a new file named `.env`.
6. Fill in the values:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

7. Stop and restart Vite (`Ctrl+C`, then `npm run dev`).
8. Create your account using your email and password. If email confirmation is enabled, confirm the email before signing in.

The SQL enables Row Level Security. Each signed-in account can only read and change rows and PDFs belonging to that account. The storage bucket is private; the app creates a short-lived signed URL when you open a PDF.

## 4. Build for deployment

```bash
npm run build
```

The production website is generated in `dist/`. You can deploy this folder to Netlify or Vercel. Add the same two environment variables in the hosting provider's environment-variable settings, then redeploy.

For Supabase Auth on a deployed site, open **Authentication → URL Configuration** and add your deployed website URL to the Site URL and Redirect URLs.

## 5. Features
- Dashboard: completion percentage, module progress, streak, notes and quiz counts.
- Roadmap: seeded AIML curriculum, searchable topics, custom topics and completion checkboxes.
- Notes: text notes and private PDF attachments (10 MB maximum).
- YouTube library: curated topic-based starter videos/playlists plus your own saved and embedded videos.
- Flashcards and formula library: create cards, reveal answers, save equations and search your collection.
- Learning analytics: roadmap completion, module progress, quiz history and study-day summaries.
- Pomodoro and daily goals: focus timer, create goals, mark them complete and record study days.
- Revision scheduler: schedule review dates with priority and status.
- Project laboratory: track project ideas, technologies, GitHub links and status.
- Career and certificate tracker: record courses, internships, certificates and applications.
- Dataset library: catalogue dataset sources and project notes.
- Expanded curriculum: SQL/data engineering, computer vision, advanced NLP/LLMs, time series, recommender systems, MLOps and career preparation.
- Practice tests: starter Python, data analysis and machine learning quizzes with answer explanations.
- Streak: a study day is recorded when you complete a topic or submit a quiz.
- Theme: dark and light appearance toggle.

## 6. Upgrade an existing Supabase project
If you already ran the original database script, run `supabase-feature-migration.sql` once in Supabase SQL Editor. This adds the new feature tables and note tags/favourites without deleting your existing records. The app adds newly introduced roadmap topics on the next sign-in without resetting completed topics.

## Notes
- This is a single-user personal workspace design, with secure per-account data isolation. Do not share your login.
- The starter quizzes are fundamentals checks, not a complete examination bank. You can extend `src/data.js` with more questions.
- Daily streaks are based on the browser's local calendar date.

## Advanced Studio additions

The latest Advanced Studio update adds two workspace pages:

- **Study Planner & Achievements** — weekly date-based study sessions, completion tracking, priorities, estimated focus minutes, a 28-day activity heatmap, module skill map, and milestone badges.
- **Interview Prep Lab** — topic-filtered AIML multiple-choice practice with explanations, correct-answer feedback, and a locally saved practice accuracy summary.

Planner tasks and interview practice statistics are stored in this browser using localStorage. They are not currently synchronized to Supabase or other devices. Existing roadmap, notes, videos, quiz history, and Supabase-backed feature records continue using the existing project storage setup.

To run after extracting:

```bash
npm install
npm run dev
```
