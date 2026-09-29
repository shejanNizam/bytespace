"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

interface CourseBackButtonProps {
  fallbackHref?: string;
  className?: string;
}

/**
 * Polished back navigation button aligned with ByteSpace brand aesthetics.
 * Uses history back when navigated from another page, or safely falls back to /courses.
 */
export default function CourseBackButton({
  fallbackHref = "/courses",
  className = "",
}: CourseBackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the user has history within the session, navigate to the previous page
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <Link
      href={fallbackHref}
      onClick={handleClick}
      aria-label="Back to previous page"
      className={`group inline-flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 text-sm font-medium text-white shadow-xs backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white hover:text-brand sm:px-4 ${className}`}
    >
      <FiArrowLeft
        aria-hidden
        className="text-base transition-transform duration-200 group-hover:-translate-x-0.5"
      />
      <span className="hidden sm:inline">Back to courses</span>
      <span className="sm:hidden">Back</span>
    </Link>
  );
}
