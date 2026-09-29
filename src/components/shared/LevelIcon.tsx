import { cn } from "@/utils/cn";

/** Three ascending bars — the "level" glyph from the design. */
export default function LevelIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 14 14"
      className={cn("h-3.5 w-3.5 fill-current", className)}
    >
      <rect x="1" y="8" width="3" height="5" rx="1" />
      <rect x="5.5" y="4.5" width="3" height="8.5" rx="1" />
      <rect x="10" y="1" width="3" height="12" rx="1" />
    </svg>
  );
}
