import { cn } from "@/utils/cn";
import { FaStar } from "react-icons/fa6";

interface StarRatingProps {
  /** Whole stars to fill, 0–5. */
  value: number;
  className?: string;
  /** Tailwind colour classes for filled / empty stars. */
  filledClass?: string;
  emptyClass?: string;
}

export default function StarRating({
  value,
  className,
  filledClass = "text-ink",
  emptyClass = "text-[#d9dadd]",
}: StarRatingProps) {
  return (
    <span
      role="img"
      aria-label={`${value} out of 5 stars`}
      className={cn("inline-flex items-center gap-1", className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          aria-hidden
          className={i < value ? filledClass : emptyClass}
        />
      ))}
    </span>
  );
}
