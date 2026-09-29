import { cn } from "@/utils/cn";

const tones = {
  lime: "bg-[#e2ff6a]",
  blue: "bg-[#b9c8fb]",
};

/** Large blurred colour wash used behind the soft-gradient sections. */
export default function GlowBlob({
  tone,
  className,
}: {
  tone: keyof typeof tones;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-[120px]",
        tones[tone],
        className,
      )}
    />
  );
}
