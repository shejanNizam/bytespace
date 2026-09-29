import CourseBrowser from "@/components/courses/CourseBrowser";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Search hundreds of courses by topic, level and price, from design to data science.",
};

export default function CoursesPage() {
  return (
    <main className="bg-white font-body">
      {/* useSearchParams needs a Suspense boundary for static rendering. */}
      <Suspense>
        <CourseBrowser />
      </Suspense>
    </main>
  );
}
