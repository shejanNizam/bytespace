"use client";

import CourseSearchHero from "@/components/courses/CourseSearchHero";
import CourseToolbar from "@/components/courses/CourseToolbar";
import CategoryChips from "@/components/shared/CategoryChips";
import Container from "@/components/shared/Container";
import CourseGrid from "@/components/shared/CourseGrid";
import EmptyState from "@/components/shared/EmptyState";
import Pagination from "@/components/shared/Pagination";
import {
  browseCategories,
  courseCatalog,
  courseCategories,
  courseLevels,
} from "@/data/courses";
import {
  type CourseFilters,
  defaultCourseFilters,
  filterCourses,
} from "@/utils/filterCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useRef } from "react";

const PAGE_SIZE = 18;

/* Only accept known values from the URL; anything else falls back. */
const oneOf = <T extends string>(
  value: string | null,
  allowed: T[],
  fallback: T,
) => (value && (allowed as string[]).includes(value) ? (value as T) : fallback);

function parseFilters(params: URLSearchParams): CourseFilters {
  const d = defaultCourseFilters;
  return {
    search: params.get("search") ?? d.search,
    scope: oneOf(params.get("scope"), ["courses", "creators"], d.scope),
    category: oneOf(params.get("category"), browseCategories, d.category),
    level: oneOf(params.get("level"), ["all", ...courseLevels], d.level),
    price: oneOf(
      params.get("price"),
      ["any", "under-25", "25-40", "40-plus"],
      d.price,
    ),
    sort: oneOf(
      params.get("sort"),
      ["relevant", "rating", "price-asc", "price-desc"],
      d.sort,
    ),
  };
}

export default function CourseBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  const filters = useMemo(() => parseFilters(params), [params]);
  const results = useMemo(
    () => filterCourses(courseCatalog, filters),
    [filters],
  );

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(
    totalPages,
    Math.max(1, Number.parseInt(params.get("page") ?? "1", 10) || 1),
  );
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  /** Writes filters to the URL (defaults omitted) so views are shareable. */
  const update = useCallback(
    (patch: Partial<CourseFilters>, nextPage = 1) => {
      const next = { ...parseFilters(params), ...patch };
      const qs = new URLSearchParams();
      (Object.keys(next) as (keyof CourseFilters)[]).forEach((key) => {
        const value = next[key].trim();
        if (value && value !== defaultCourseFilters[key]) qs.set(key, value);
      });
      if (nextPage > 1) qs.set("page", String(nextPage));
      const query = qs.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [params, pathname, router],
  );

  const goToPage = (next: number) => {
    update({}, next);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSearch = useCallback(
    (search: string) => update({ search }),
    [update],
  );

  return (
    <>
      <CourseSearchHero
        search={filters.search}
        scope={filters.scope}
        onSearch={onSearch}
        onScopeChange={(scope) => update({ scope })}
      />

      <section className="bg-white pb-20 pt-12 lg:pb-[120px] lg:pt-20">
        <Container>
          <CourseToolbar
            filters={filters}
            onChange={(patch) => update(patch)}
          />

          <CategoryChips
            layout="scroll"
            rows={[courseCategories]}
            active={filters.category}
            onSelect={(category) => update({ category })}
            className="mt-5"
          />

          <div ref={resultsRef} className="scroll-mt-28 pt-10 lg:pt-[60px]">
            <p className="sr-only" aria-live="polite">
              {results.length} courses found
            </p>
            {visible.length > 0 ? (
              <CourseGrid courses={visible} />
            ) : (
              <EmptyState
                title="No courses match your filters"
                description="Try a different search term or clear the filters to see everything."
                action={
                  <button
                    type="button"
                    onClick={() => update({ ...defaultCourseFilters })}
                    className="cursor-pointer font-medium text-brand hover:underline"
                  >
                    Clear all filters
                  </button>
                }
              />
            )}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={goToPage}
            className="mt-12 lg:mt-16"
          />
        </Container>
      </section>
    </>
  );
}
