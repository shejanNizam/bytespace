"use client";

import Container from "@/components/shared/Container";
import GridTexture from "@/components/shared/GridTexture";
import type { SearchScope } from "@/utils/filterCourses";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const scopeLabels: Record<SearchScope, string> = {
  courses: "Courses",
  creators: "Creators",
};

interface CourseSearchHeroProps {
  search: string;
  scope: SearchScope;
  onSearch: (search: string) => void;
  onScopeChange: (scope: SearchScope) => void;
}

const DEBOUNCE_MS = 300;

export default function CourseSearchHero({
  search,
  scope,
  onSearch,
  onScopeChange,
}: CourseSearchHeroProps) {
  const [query, setQuery] = useState(search);

  // Keep the field in sync when the URL changes (back/forward, links).
  useEffect(() => setQuery(search), [search]);

  // Live search: push the query to the URL once typing pauses.
  useEffect(() => {
    if (query === search) return;
    const id = setTimeout(() => onSearch(query), DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [query, search, onSearch]);

  return (
    <section className="relative isolate overflow-hidden bg-brand font-body text-white">
      <GridTexture priority />
      <Container className="relative pb-14 pt-32 text-center lg:pb-[61px] lg:pt-[165px]">
        <h1 className="font-heading text-[28px] font-semibold leading-10 sm:text-[32px]">
          Find Your Next Course
        </h1>

        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(query);
          }}
          className="mx-auto mt-8 flex w-full max-w-[625px] items-center gap-3 sm:gap-[19px] lg:mt-[35px]"
        >
          <label className="relative flex-1">
            <span className="sr-only">
              Search {scopeLabels[scope].toLowerCase()}
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="h-[51px] w-full rounded-full bg-white pl-12 pr-5 text-base text-ink outline-none placeholder:text-[#8a8d94] focus:ring-4 focus:ring-lime/60"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-[#8a8d94] hover:text-brand"
            >
              <FiSearch />
            </button>
          </label>

          <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            menu={{
              selectable: true,
              selectedKeys: [scope],
              items: (Object.keys(scopeLabels) as SearchScope[]).map((key) => ({
                key,
                label: `Search ${scopeLabels[key]}`,
              })),
              onClick: ({ key }) => onScopeChange(key as SearchScope),
            }}
          >
            <button
              type="button"
              aria-label={`Search in: ${scopeLabels[scope]}`}
              className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-lime px-5 text-base font-medium text-ink transition-[filter] hover:brightness-95 sm:px-6"
            >
              {scopeLabels[scope]}
              <FiChevronDown aria-hidden />
            </button>
          </Dropdown>
        </form>
      </Container>
    </section>
  );
}
