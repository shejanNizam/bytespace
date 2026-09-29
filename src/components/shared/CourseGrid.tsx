import CourseCard from "@/components/shared/CourseCard";
import type { Course } from "@/types/course";
import { cn } from "@/utils/cn";

/** Responsive course card grid: 1 → 2 → 3 columns (40px gutters at 1440). */
export default function CourseGrid({
  courses,
  className,
}: {
  courses: Course[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3",
        className,
      )}
    >
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
