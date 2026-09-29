import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  /** Use on brand-blue backgrounds. */
  inverted?: boolean;
  className?: string;
}

/** Section title + supporting copy, shared by every landing section. */
export default function SectionHeading({
  title,
  description,
  align = "center",
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <h2
        className={cn(
          "font-heading text-[28px] font-semibold leading-[1.3] sm:text-4xl sm:leading-[1.3]",
          inverted ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-[26px] sm:mt-6",
            align === "center" && "mx-auto",
            inverted ? "text-white/85" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
