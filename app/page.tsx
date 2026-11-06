import Link from "next/link";
import HookGrid from "@/app/components/HookGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative border-b border-black/[.08] dark:border-white/[.145] px-6 py-10 text-center sm:px-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">HookHub</h1>
        <p className="mt-2 text-foreground/70">
          Discover open-source hooks for Claude Code.
        </p>
        <Link
          href="/faq"
          className="absolute right-6 top-6 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-1.5 text-sm font-medium transition-colors hover:border-black/[.2] dark:hover:border-white/[.3] sm:right-10 sm:top-10"
        >
          FAQ
        </Link>
      </header>

      <main className="flex-1 px-6 py-10 sm:px-10">
        <HookGrid />
      </main>

      <footer className="border-t border-black/[.08] dark:border-white/[.145] px-6 py-6 text-center text-sm text-foreground/70 sm:px-10">
        <p>
          Learn more about writing your own hooks in the{" "}
          <a
            href="https://docs.claude.com/en/docs/claude-code/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            official Claude Code hooks docs
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
