"use client";

import CourseToolbar from "@/components/courses/CourseToolbar";
import Container from "@/components/shared/Container";
import CourseGrid from "@/components/shared/CourseGrid";
import EmptyState from "@/components/shared/EmptyState";
import type { Course } from "@/types/course";
import {
  type CourseFilters,
  defaultCourseFilters,
  filterCourses,
} from "@/utils/filterCourses";
import { useMemo, useState } from "react";

/** A creator's own courses with the same filter/sort toolbar as search. */
export default function CreatorCourses({ courses }: { courses: Course[] }) {
  const [filters, setFilters] = useState<CourseFilters>(defaultCourseFilters);
  const results = useMemo(
    () => filterCourses(courses, filters),
    [courses, filters],
  );

  return (
    <section
      aria-label="Courses by this creator"
      className="bg-white pb-20 pt-12 lg:pb-[100px] lg:pt-[60px]"
    >
      <Container>
        <CourseToolbar
          filters={filters}
          onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))}
        />
        <div className="mt-8 lg:mt-[42px]">
          {results.length > 0 ? (
            <CourseGrid courses={results} />
          ) : (
            <EmptyState
              title="No courses match these filters"
              action={
                <button
                  type="button"
                  onClick={() => setFilters(defaultCourseFilters)}
                  className="cursor-pointer font-medium text-brand hover:underline"
                >
                  Clear filters
                </button>
              }
            />
          )}
        </div>
      </Container>
    </section>
  );
}
