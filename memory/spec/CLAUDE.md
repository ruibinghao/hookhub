# HookHub — MVP Spec

## 1. Overview
HookHub is a directory of open-source Claude Code hooks. Visitors can see, at a glance,
which hooks exist, what each one does, and where its source lives on GitHub.

**What a Claude Code hook is:** a user-defined command that Claude Code runs automatically
at a lifecycle event, such as before or after a tool call (`PreToolUse` / `PostToolUse`),
when a prompt is submitted, when Claude sends a notification, or when a session starts or stops.
Hooks are configured in `settings.json` (user or project) or shipped inside plugins. People use them
to block dangerous commands, auto-format edited files, send desktop/Slack notifications, log activity, and more.

## 2. MVP Goal
Display a curated list of hooks in a responsive grid on the home page. Nothing else.

### In scope
- Home page (`/`) showing every hook as a card in a grid.
- Static, curated hook data checked into the repo.
- Each card links out to the hook's GitHub repository.

### Out of scope (later phases)
- Search, filtering, sorting by category
- Individual hook detail pages
- User accounts, submissions, voting/stars
- Live GitHub API data (stars, last updated)
- Database / CMS

## 3. Data Model
Each hook has exactly these fields:

| Field         | Type     | Required | Notes                                                         |
|---------------|----------|----------|---------------------------------------------------------------|
| `id`          | string   | yes      | Unique slug (e.g. `branch-guard`), used as React key          |
| `name`        | string   | yes      | Display name                                                  |
| `category`    | Category | yes      | One of the fixed categories below                             |
| `description` | string   | yes      | 1–2 sentences, about 160 chars max, plain text                |
| `repoUrl`     | string   | yes      | Full `https://github.com/...` URL (repo or path to the hook)  |

### Categories (fixed enum for the MVP)
- `Security`: block dangerous commands, protect secrets/files, branch guards
- `Code Quality`: auto-format, lint, type-check, run tests after edits
- `Notifications`: desktop, sound, Slack/Discord/ntfy alerts
- `Git & Workflow`: commit helpers, branch rules, task automation
- `Logging & Observability`: transcripts, audit logs, cost/usage tracking
- `Context`: inject context at session start or on prompt submit

### Storage
- `lib/hooks.ts` exports a typed `Hook` interface, a `Category` union type, and a `hooks: Hook[]` array.
- Seed with about 12–20 real hooks taken from public collections, such as
  `karanb192/claude-code-hooks`, `ithiria894/awesome-claude-code-hooks`, and
  `CodyLunders/claude-code-hooks-library`. Every entry must point to a real, public repo URL,
  and each one is checked by hand before it is merged.

## 4. UI / UX

### Layout
- **Header:** "HookHub" wordmark and a one-line tagline, e.g. "Discover open-source hooks for Claude Code."
- **Main:** a hook grid.
- **Footer:** a short note with a link to the official Claude Code hooks docs.

### Hook grid
- Responsive CSS grid: 1 column on mobile, 2 at `md`, 3 at `lg` (optionally 4 at `xl`).
- Consistent gap; cards in a row share the same height.
- Hooks are displayed in data-file order.

### Hook card
- Category badge, top
- Name (heading)
- Description (clamped to 3 lines)
- "View on GitHub →" link, `target="_blank" rel="noopener noreferrer"`
- The whole card shows hover and focus states; the link is reachable by keyboard.

### Styling
- Tailwind v4 utilities only; reuse the existing `bg-background` / `text-foreground` tokens
  and Geist fonts from `app/layout.tsx` / `app/globals.css`.
- Supports light and dark mode through the existing `prefers-color-scheme` variables.
- Each category gets its own badge color (a small map in the card component).

### Empty state
- If `hooks` is empty, show "No hooks yet."

## 5. Technical Approach
- Next.js App Router; `app/page.tsx` is a **Server Component** that imports the static data.
  No client JS is needed.
- Components:
  - `app/components/HookGrid.tsx`: renders the grid
  - `app/components/HookCard.tsx`: renders a single card
- Update `app/layout.tsx` metadata (title "HookHub", description).
- Fully static: `npm run build` prerenders `/`.

## 6. Acceptance Criteria
1. Visiting `/` shows every hook from `lib/hooks.ts` as a card in a grid.
2. Each card shows its name, category, description and a working GitHub link that opens in a new tab.
3. The grid is 1, 2 or 3 columns depending on viewport width, with no horizontal scroll at 375px.
4. Pages are readable in both light and dark mode.
5. `npm run build` and `npx tsc --noEmit` pass with no errors.

## 7. Future Ideas
- Category filter chips and text search
- Hook detail pages with an install snippet (`settings.json` JSON), the hook event, and the matcher
- Extra fields: `event` (PreToolUse…), `author`, `language`, `stars`
- Community submissions through a GitHub PR to the data file
- Nightly GitHub API sync for stars and last-updated

## References
- Claude Code hooks docs: https://docs.claude.com/en/docs/claude-code/hooks
- https://github.com/ithiria894/awesome-claude-code-hooks
- https://github.com/karanb192/claude-code-hooks
- https://github.com/CodyLunders/claude-code-hooks-library
