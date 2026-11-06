# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

HookHub is a fresh `create-next-app` scaffold (single initial commit). There is no application code yet beyond the template page, so expect to create most structure from scratch.

## Commands

Package manager is npm (`package-lock.json` is committed).

- `npm run dev` — dev server with Turbopack at http://localhost:3000
- `npm run build` — production build (also runs TypeScript type checking)
- `npm run start` — serve the production build
- `npm run lint` — `next lint`. Note: no ESLint config or `eslint` dependency is installed yet, so this will prompt to set one up on first run.
- Type check only: `npx tsc --noEmit`

No test framework is configured.

## Stack and architecture

- **Next.js 15 App Router** with **React 19** and strict TypeScript. Routes live under `app/` (there is no `src/` directory). `app/layout.tsx` is the root layout; `app/page.tsx` is the home route.
- **Tailwind CSS v4** via `@tailwindcss/postcss` (`postcss.config.mjs`). There is no `tailwind.config.js` — theme tokens are defined in CSS with `@theme inline` in `app/globals.css`, which maps the `--background`/`--foreground` CSS variables (with a `prefers-color-scheme: dark` override) to Tailwind colors `bg-background`/`text-foreground`.
- **Fonts**: Geist and Geist Mono loaded through `next/font/google` in the root layout and exposed as `--font-geist-sans`/`--font-geist-mono`, mapped to Tailwind's `font-sans`/`font-mono`.
- **Import alias**: `@/*` resolves to the repo root (e.g. `@/app/...`).
- Static assets go in `public/`.
