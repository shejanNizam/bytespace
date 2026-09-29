"use client";

import CategoryChips from "@/components/shared/CategoryChips";
import Container from "@/components/shared/Container";
import CourseGrid from "@/components/shared/CourseGrid";
import EmptyState from "@/components/shared/EmptyState";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  courseCategoryRows,
  FEATURED_CATEGORY,
  featuredCourses,
} from "@/data/courses";
import Link from "next/link";
import { useState } from "react";

export default function CourseExplorer() {
  const [active, setActive] = useState(FEATURED_CATEGORY);

  const courses =
    active === FEATURED_CATEGORY
      ? featuredCourses
      : featuredCourses.filter((course) => course.categories.includes(active));

  return (
    <section className="bg-white pt-16 lg:pt-20">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="[&>p]:max-w-[900px]"
        />

        <CategoryChips
          rows={courseCategoryRows}
          active={active}
          onSelect={setActive}
          moreHref="/courses"
          className="mt-10 lg:mt-[50px]"
        />

        {courses.length > 0 ? (
          <CourseGrid courses={courses} className="mt-12 lg:mt-[77px]" />
        ) : (
          <EmptyState
            className="mt-12 lg:mt-[77px]"
            title={`No ${active} courses yet`}
            description="New courses are added every week — check back soon or browse everything we have."
            action={
              <Link
                href={`/courses?category=${encodeURIComponent(active)}`}
                className="font-medium text-brand hover:underline"
              >
                Browse all courses
              </Link>
            }
          />
        )}
      </Container>
    </section>
  );
}
