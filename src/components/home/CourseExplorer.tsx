"use client";

import Container from "@/components/shared/Container";
import CourseCard from "@/components/shared/CourseCard";
import EmptyState from "@/components/shared/EmptyState";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  courseCategoryRows,
  FEATURED_CATEGORY,
  featuredCourses,
} from "@/data/home";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

const chipClass =
  "inline-flex h-[42px] shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full px-5 text-sm text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function CourseExplorer() {
  const [active, setActive] = useState(FEATURED_CATEGORY);

  const courses =
    active === FEATURED_CATEGORY
      ? featuredCourses
      : featuredCourses.filter((course) => course.category === active);

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

        <div
          role="group"
          aria-label="Filter courses by category"
          className={cn(
            "mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-x-4 gap-y-5 lg:mt-[50px]",
            // Phones: one swipeable row, edge to edge, instead of ~10 rows.
            "max-sm:-mx-4 max-sm:flex-nowrap max-sm:justify-start max-sm:gap-x-2.5 max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-1 max-sm:scrollbar-none max-sm:[&::-webkit-scrollbar]:hidden",
          )}
        >
          {courseCategoryRows.map((row, i) => (
            // `contents` lets chips wrap freely on smaller screens; from xl
            // each row becomes its own centred line, matching the design.
            <div
              key={i}
              className="contents xl:flex xl:w-full xl:justify-center xl:gap-4"
            >
              {row.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active === category}
                  onClick={() => setActive(category)}
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
              {i === courseCategoryRows.length - 1 && (
                <Link
                  href="/courses"
                  className={cn(chipClass, "bg-surface hover:bg-[#ebebed]")}
                >
                  + More
                </Link>
              )}
            </div>
          ))}
        </div>

        {courses.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[77px] lg:gap-10 xl:grid-cols-3">
            {courses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            className="mt-12 lg:mt-[77px]"
            title={`No ${active} courses yet`}
            description="New courses are added every week — check back soon or browse everything we have."
            action={
              <Link
                href="/courses"
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
