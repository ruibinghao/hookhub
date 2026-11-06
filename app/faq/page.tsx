import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-black/[.08] dark:border-white/[.145] px-6 py-10 text-center sm:px-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h1>
        <p className="mt-2 text-foreground/70">Coming soon.</p>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          ← Back to HookHub
        </Link>
      </main>
    </div>
  );
}
