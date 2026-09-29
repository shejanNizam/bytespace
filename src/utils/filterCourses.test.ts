import { courseCatalog, featuredCourses } from "@/data/courses";
import { describe, expect, it } from "vitest";
import { defaultCourseFilters, filterCourses } from "./filterCourses";

const run = (patch: Partial<typeof defaultCourseFilters>) =>
  filterCourses(courseCatalog, { ...defaultCourseFilters, ...patch });

describe("filterCourses", () => {
  it("returns the whole catalog in its original order by default", () => {
    expect(run({})).toEqual(courseCatalog);
  });

  it("matches the search query against titles, case-insensitively", () => {
    const result = run({ search: "BIG data" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.title === "the Power of Big Data")).toBe(true);
  });

  it("searches creator names when the scope is creators", () => {
    expect(run({ search: "purepearl", scope: "creators" })).toHaveLength(
      courseCatalog.length,
    );
    expect(run({ search: "purepearl", scope: "courses" })).toHaveLength(0);
  });

  it("filters by any category a course is listed under", () => {
    const result = run({ category: "Business" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.categories.includes("Business"))).toBe(true);
  });

  it("combines level and price filters", () => {
    const result = run({ level: "Advanced", price: "40-plus" });
    expect(result.length).toBeGreaterThan(0);
    expect(
      result.every((c) => c.level === "Advanced" && c.price > 40),
    ).toBe(true);
  });

  it("sorts by price and rating without mutating the input", () => {
    const snapshot = [...featuredCourses];
    const asc = filterCourses(featuredCourses, {
      ...defaultCourseFilters,
      sort: "price-asc",
    }).map((c) => c.price);
    expect(asc).toEqual([...asc].sort((a, b) => a - b));

    const byRating = run({ sort: "rating" }).map((c) => c.rating);
    expect(byRating).toEqual([...byRating].sort((a, b) => b - a));
    expect(featuredCourses).toEqual(snapshot);
  });
});
