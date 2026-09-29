import { FEATURED_CATEGORY } from "@/data/courses";
import type { Course, CourseLevel } from "@/types/course";

export type SearchScope = "courses" | "creators";
export type PriceRange = "any" | "under-25" | "25-40" | "40-plus";
export type CourseSort = "relevant" | "rating" | "price-asc" | "price-desc";

export interface CourseFilters {
  search: string;
  scope: SearchScope;
  category: string;
  level: CourseLevel | "all";
  price: PriceRange;
  sort: CourseSort;
}

export const defaultCourseFilters: CourseFilters = {
  search: "",
  scope: "courses",
  category: FEATURED_CATEGORY,
  level: "all",
  price: "any",
  sort: "relevant",
};

const inPriceRange = (price: number, range: PriceRange) => {
  switch (range) {
    case "under-25":
      return price < 25;
    case "25-40":
      return price >= 25 && price <= 40;
    case "40-plus":
      return price > 40;
    default:
      return true;
  }
};

/** Pure search/filter/sort used by the courses page. */
export function filterCourses(
  courses: Course[],
  filters: CourseFilters,
): Course[] {
  const query = filters.search.trim().toLowerCase();

  const matches = courses.filter((course) => {
    if (query) {
      const haystack =
        filters.scope === "creators" ? course.creator : course.title;
      if (!haystack.toLowerCase().includes(query)) return false;
    }
    if (
      filters.category !== FEATURED_CATEGORY &&
      !course.categories.includes(filters.category)
    ) {
      return false;
    }
    if (filters.level !== "all" && course.level !== filters.level) {
      return false;
    }
    return inPriceRange(course.price, filters.price);
  });

  switch (filters.sort) {
    case "rating":
      return [...matches].sort((a, b) => b.rating - a.rating);
    case "price-asc":
      return [...matches].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...matches].sort((a, b) => b.price - a.price);
    default:
      return matches;
  }
}
