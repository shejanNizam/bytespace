"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** About / Lessons / Reviews — each tab is its own route for deep links. */
export default function CourseTabs({ courseId }: { courseId: string }) {
  const pathname = usePathname();
  const base = `/courses/${courseId}`;
  const tabs = [
    { href: base, label: "About" },
    { href: `${base}/lessons`, label: "Lessons" },
    { href: `${base}/reviews`, label: "Reviews" },
  ];

  return (
    <nav aria-label="Course sections">
      <ul className="flex gap-3">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full px-5 text-sm transition-colors",
                  active
                    ? "bg-lime font-medium text-ink"
                    : "bg-surface text-ink-muted hover:bg-[#ebebed]",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
