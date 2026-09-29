"use client";

import { cn } from "@/utils/cn";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
}

const arrowClass =
  "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink";

export default function Pagination({
  page,
  totalPages,
  onChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2", className)}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={arrowClass}
      >
        <FiChevronLeft />
      </button>
      <ol className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              aria-current={n === page ? "page" : undefined}
              onClick={() => onChange(n)}
              className={cn(
                "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-full px-2 text-sm transition-colors",
                n === page
                  ? "bg-lime font-semibold text-ink"
                  : "text-ink-muted hover:bg-surface",
              )}
            >
              {n}
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={arrowClass}
      >
        <FiChevronRight />
      </button>
    </nav>
  );
}
