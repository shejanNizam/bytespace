"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";

const chipClass =
  "inline-flex h-[42px] shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full px-5 text-sm text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

interface CategoryChipsProps {
  /** Chip rows; "rows" layout keeps these line breaks from xl up. */
  rows: string[][];
  active: string;
  onSelect: (category: string) => void;
  /** Optional trailing "+ More" link. */
  moreHref?: string;
  /**
   * "rows": centred wrapping block (home page).
   * "scroll": one horizontally scrollable line (search page toolbar).
   */
  layout?: "rows" | "scroll";
  className?: string;
}

export default function CategoryChips({
  rows,
  active,
  onSelect,
  moreHref,
  layout = "rows",
  className,
}: CategoryChipsProps) {
  const scroll = layout === "scroll";

  return (
    <div
      role="group"
      aria-label="Filter courses by category"
      className={cn(
        "flex gap-x-4 gap-y-5",
        scroll
          ? "-mx-4 flex-nowrap gap-x-2.5 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          : // Phones: one swipeable row, edge to edge, instead of ~10 rows.
            "mx-auto max-w-[1100px] flex-wrap justify-center max-sm:-mx-4 max-sm:flex-nowrap max-sm:justify-start max-sm:gap-x-2.5 max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-1",
        "scrollbar-none [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {rows.map((row, i) => (
        // `contents` lets chips flow freely; in "rows" layout each row
        // becomes its own centred line from xl, matching the design.
        <div
          key={i}
          className={cn(
            "contents",
            !scroll && "xl:flex xl:w-full xl:justify-center xl:gap-4",
          )}
        >
          {row.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => onSelect(category)}
              className={cn(
                chipClass,
                active === category
                  ? "bg-lime font-medium"
                  : "bg-surface hover:bg-[#ebebed]",
              )}
            >
              {category}
            </button>
          ))}
          {moreHref && i === rows.length - 1 && (
            <Link
              href={moreHref}
              className={cn(chipClass, "bg-surface hover:bg-[#ebebed]")}
            >
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
