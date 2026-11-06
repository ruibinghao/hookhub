export type Category =
  | "Security"
  | "Code Quality"
  | "Notifications"
  | "Git & Workflow"
  | "Logging & Observability"
  | "Context";

export interface Hook {
  id: string;
  name: string;
  category: Category;
  description: string;
  repoUrl: string;
}

export const hooks: Hook[] = [
  {
    id: "block-dangerous-commands",
    name: "Block Dangerous Commands",
    category: "Security",
    description:
      "Blocks dangerous shell commands like rm -rf ~, fork bombs, curl | sh, and force pushes to main before they run.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/block-dangerous-commands",
  },
  {
    id: "protect-secrets",
    name: "Protect Secrets",
    category: "Security",
    description:
      "Prevents Claude from reading, modifying, or exfiltrating sensitive files such as .env files and SSH keys.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/protect-secrets",
  },
  {
    id: "config-guard",
    name: "Config Guard",
    category: "Security",
    description:
      "Blocks the agent from tampering with its own guardrail config, including settings files and hooks.json.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/config-guard",
  },
  {
    id: "lasso-claude-hooks",
    name: "Lasso Claude-Hooks",
    category: "Security",
    description:
      "Scans tool outputs for prompt-injection patterns and blocks execution when a match is found.",
    repoUrl: "https://github.com/lasso-security/claude-hooks",
  },
  {
    id: "git-safety",
    name: "Git Safety",
    category: "Git & Workflow",
    description:
      "Branch-aware git guardrails that block pushes to main or master and destructive gh CLI actions.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/git-safety",
  },
  {
    id: "auto-stage",
    name: "Auto Stage",
    category: "Git & Workflow",
    description: "Automatically git-stages files right after Claude modifies them.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/auto-stage",
  },
  {
    id: "pr-provenance-stamp",
    name: "PR Provenance Stamp",
    category: "Git & Workflow",
    description:
      "Stamps a provenance receipt — prompts, spend, tests run — into the PR body whenever Claude runs gh pr create.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/pr-provenance-stamp",
  },
  {
    id: "format-code",
    name: "Format Code",
    category: "Code Quality",
    description:
      "Auto-formats Python with ruff and JS/TS/HTML/JSON/MD/YAML with prettier right after edits.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/format-code",
  },
  {
    id: "protect-tests",
    name: "Protect Tests",
    category: "Code Quality",
    description:
      "Blocks deleting, renaming away from, or skip-disabling tests so coverage can't quietly shrink.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/protect-tests",
  },
  {
    id: "bounty-board",
    name: "Bounty Board",
    category: "Code Quality",
    description:
      "Prices a repo's TODO/FIXME/HACK debt as aging bounties and injects the top items as side quests.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/bounty-board",
  },
  {
    id: "session-logger",
    name: "Session Logger",
    category: "Logging & Observability",
    description:
      "Writes a durable markdown log of each session — cwd, git branch, files touched, bash commands — with secret redaction.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/session-logger",
  },
  {
    id: "nerf-receipts",
    name: "Nerf Receipts",
    category: "Logging & Observability",
    description:
      "Tracks your own failure rate and tokens per task by model version, and flags shifts over time.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/nerf-receipts",
  },
  {
    id: "multi-agent-observability",
    name: "Multi-Agent Observability Dashboard",
    category: "Logging & Observability",
    description:
      "Streams hook events from one or more Claude Code sessions to a real-time web dashboard.",
    repoUrl:
      "https://github.com/disler/claude-code-hooks-multi-agent-observability",
  },
  {
    id: "notify-permission",
    name: "Notify Permission",
    category: "Notifications",
    description: "Sends a Slack alert whenever Claude needs permission or input from you.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/notify-permission",
  },
  {
    id: "claude-code-toast",
    name: "Claude Code Toast",
    category: "Notifications",
    description: "Shows a native macOS toast notification when Claude is waiting for a response.",
    repoUrl: "https://github.com/eyalzh/claude-code-toast",
  },
  {
    id: "scv-sounds",
    name: "SCV Sounds",
    category: "Notifications",
    description: "Plays StarCraft SCV sound effects on Claude Code hook events.",
    repoUrl: "https://github.com/htjun/claude-code-hooks-scv-sounds",
  },
  {
    id: "dead-end-registry",
    name: "Dead End Registry",
    category: "Context",
    description:
      "Remembers approaches you tried and reverted, and warns you before you retry one.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/dead-end-registry",
  },
  {
    id: "context-hogs",
    name: "Context Hogs",
    category: "Context",
    description: "Leaderboard of which files are consuming the most context tokens in a session.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/context-hogs",
  },
  {
    id: "dead-rules-audit",
    name: "Dead Rules Audit",
    category: "Context",
    description: "Scores which CLAUDE.md rules Claude actually follows versus silently ignores.",
    repoUrl:
      "https://github.com/karanb192/claude-code-hooks/tree/main/plugins/dead-rules-audit",
  },
  {
    id: "post-compact-reminder",
    name: "Post-Compact Reminder",
    category: "Context",
    description:
      "Re-injects a reminder to re-read AGENTS.md right after a context compaction event.",
    repoUrl: "https://github.com/Dicklesworthstone/post_compact_reminder",
  },
];
