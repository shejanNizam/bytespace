import { cn } from "@/utils/cn";

/** Heading + optional intro paragraph used throughout the course tabs. */
export default function TabSection({
  title,
  intro,
  className,
  children,
}: {
  title: string;
  intro?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("mt-10 first:mt-0", className)}>
      <h2 className="font-heading text-xl font-semibold text-ink">{title}</h2>
      {intro && (
        <p className="mt-3 text-[15px] leading-[26px] text-ink-soft">
          {intro}
        </p>
      )}
      {children}
    </section>
  );
}
