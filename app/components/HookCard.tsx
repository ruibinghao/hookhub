import type { Category, Hook } from "@/lib/hooks";

const categoryBadgeStyles: Record<Category, string> = {
  Security: "bg-red-500/10 text-red-600 dark:text-red-400",
  "Code Quality": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Notifications: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Git & Workflow": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Logging & Observability": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  Context: "bg-green-500/10 text-green-600 dark:text-green-400",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="group relative flex h-full flex-col gap-3 rounded-xl border border-black/[.08] dark:border-white/[.145] p-5 transition-colors hover:border-black/[.2] dark:hover:border-white/[.3] focus-within:border-black/[.3] dark:focus-within:border-white/[.4]">
      <span
        className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${categoryBadgeStyles[hook.category]}`}
      >
        {hook.category}
      </span>
      <h3 className="text-lg font-semibold">{hook.name}</h3>
      <p className="line-clamp-3 flex-1 text-sm text-foreground/70">{hook.description}</p>
      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium underline-offset-4 hover:underline focus-visible:underline after:absolute after:inset-0 after:content-['']"
      >
        View on GitHub →
      </a>
    </div>
  );
}
