## VORTEX360 — Copilot / AI agent instructions

Short, actionable guidance to help AI coding agents be immediately productive in this repo.

- Project type: Next.js (app router) + TypeScript + TailwindCSS. See `package.json` scripts for workflows.
- Language / locale: Portuguese (pt-BR) is used throughout UI and messages.

Key places to read first
- app/ (Next.js App Router pages & API routes)
  - `app/layout.tsx` — global layout, includes `globals.css` and background component.
  - `app/page.tsx` — top-level landing composition (imports `GlassHeader`, `HeroGeometric`, sections).
  - `app/api/contact/route.ts` — API endpoint that sends e-mail via Nodemailer. Important: it sets `export const runtime = 'nodejs'`.
  - `app/api/lead/route.ts` — lead endpoint (currently mocked; uses `lib/lead-schema.ts`).

- lib/
  - `lib/lead-schema.ts` — canonical zod schemas for leads, helper `formatBRPhone`, and enums (`faturamentos`, `segmentos`). Always use this file as the source of truth for lead validation/formatting.

- components/
  - `components/forms/LeadForm.tsx` — client-side form using `react-hook-form` + `zodResolver`; posts to `/api/contact` (payload shape below).
  - `components/sections/*` and `components/ui/*` — UI primitives and page sections (composition pattern used throughout pages).

Important architecture & data flows
- UI is assembled from small presentational components in `components/ui` + `components/sections`. The homepage (`app/page.tsx`) composes those sections.
- Lead flow:
  1. `LeadForm.tsx` validates user input with `leadSchema` (imported from `@/lib/lead-schema`).
  2. `LeadForm` sends a POST to `/api/contact` with payload: { name, email, message } (see `LeadForm.onSubmit`).
  3. `app/api/contact/route.ts` expects that payload and uses Nodemailer to deliver mail. That endpoint explicitly requires a Node runtime and SMTP env vars (see Env section).
  4. There is also `app/api/lead/route.ts` which accepts the typed `leadSchema` payload; it currently logs the lead and returns mocked=true unless `ENABLE_EMAIL=true`.

Useful concrete examples (copy/paste awareness)
- LeadForm payload (exact shape):
  - { name: string, email: string, message: string }
  - See `components/forms/LeadForm.tsx` where message is built from company, phone, faturamento and segmento.
- Lead schema (server-side):
  - `leadSchema` fields: `nome`, `email`, `empresa`, `telefone`, `faturamento` (enum), `segmento` (enum). See `lib/lead-schema.ts` for exact enum values.
- Contact endpoint runtime: `export const runtime = 'nodejs'` in `app/api/contact/route.ts` — necessary because Nodemailer depends on Node APIs.

Environment & integration points
- Expected ENV variables (used by `app/api/contact/route.ts` and comments in `app/api/lead/route.ts`):
  - SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_TO
  - ENABLE_EMAIL (used by `app/api/lead/route.ts` to toggle real email sending)
- NOTE / GOTCHA: `app/api/contact/route.ts` imports `nodemailer` but `nodemailer` is not listed in `package.json` dependencies. Before running email sending in dev or production, install it (`npm i nodemailer`) and configure the ENV vars above.

Developer workflows & commands
- Common npm scripts from `package.json`:
  - `npm run dev` — run Next.js development server
  - `npm run build` — production build
  - `npm run start` — start built app
  - `npm run lint` — ESLint (uses `eslint-config-next`)
  - `npm run check:types` — `tsc --noEmit` (type checking)
  - `npm run check:exports` — `ts-prune` to detect unused exports
  - `npm run check:deps` — `depcheck` to find unused deps
  - `npm run check:cycles` — `madge` circular dependency check

Conventions & patterns to follow
- Absolute imports with `@/` are used across the app (e.g. `@/lib/lead-schema`). Keep changes consistent with those aliases.
- Zod schemas are the single source of truth for validation (`lib/lead-schema.ts`). Use them for both client and server validation (client uses zodResolver).
- UI composition: prefer creating small presentational components in `components/ui` and section-level composition in `components/sections`.
- Portuguese strings are hard-coded in components. When editing copy, preserve pt-BR style and accents.

Quick safety checks an agent should run before changing behavior
- If modifying `app/api/contact/route.ts` be sure Nodemailer dependency is installed and env vars validated (see `ensureEnv()` in file).
- When changing lead/validation fields, update both `lib/lead-schema.ts` and any client code that imports its enums (e.g., `LeadForm.tsx` maps `faturamentos` and `segmentos` into selects).
- If adding new server-only Node libs used in API routes, ensure `export const runtime = 'nodejs'` is present if the lib needs Node APIs.

Where to look for follow-ups or tests
- There are no unit tests in the repo. Prioritize small manual smoke tests after changing a form or API route:
  - `npm run dev` and exercise the form in a browser
  - Use `curl` or Postman to POST to `/api/contact` and `/api/lead` with expected JSON payloads

If something is unclear or you need more rules
- Tell me which area you want expanded (e.g., dependency management, adding new API routes, or component-level styling conventions) and I will iterate on this file.
