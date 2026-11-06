import { hooks } from "@/lib/hooks";
import HookCard from "./HookCard";

export default function HookGrid() {
  if (hooks.length === 0) {
    return <p className="text-center text-foreground/70">No hooks yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
