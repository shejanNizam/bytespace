import type { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

/** Three ascending bars — the "level" glyph from the design. */
function LevelIcon() {
  return (
    <svg aria-hidden viewBox="0 0 14 14" className="h-3.5 w-3.5 fill-current">
      <rect x="1" y="8" width="3" height="5" rx="1" />
      <rect x="5.5" y="4.5" width="3" height="8.5" rx="1" />
      <rect x="10" y="1" width="3" height="12" rx="1" />
    </svg>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  const stats = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="group relative flex flex-col rounded-[20px] border border-[#e4e5e7] bg-white p-4 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,59,226,0.35)]">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt=""
          width={341}
          height={196}
          sizes="(min-width: 1280px) 341px, (min-width: 768px) 30vw, 90vw"
          className="aspect-[341/196] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <ul className="absolute inset-x-3 bottom-3 flex gap-1.5">
          {stats.map((stat) => (
            <li
              key={stat}
              className="min-w-0 truncate rounded-full bg-[#e4e4e7]/75 px-2.5 py-1.5 text-xs leading-none text-[#5b5d63] backdrop-blur-sm xl:px-3 xl:text-[13px]"
            >
              {stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate font-heading text-xl font-semibold leading-[30px] text-ink">
          {/* Stretched link: the whole card is clickable. */}
          <Link
            href={`/courses/${course.id}`}
            className="after:absolute after:inset-0 after:rounded-[20px] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-brand"
          >
            {course.title}
          </Link>
        </h3>
        <p className="flex shrink-0 items-center gap-1 pt-0.5 text-lg text-[#656565]">
          <span className="sr-only">Rated</span>
          {course.rating}
          <FaStar aria-hidden className="text-base text-[#c9cacd]" />
        </p>
      </div>

      <p className="text-[13px] leading-5 text-ink-soft">
        by <span className="text-brand">{course.creator}</span>
      </p>

      <div className="mt-[13px] flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-surface px-3.5 text-sm text-ink-muted">
          <LevelIcon />
          {course.level}
        </span>
        <div className="flex -space-x-2">
          {course.studentAvatars.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className="rounded-full ring-2 ring-white"
            />
          ))}
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-medium text-ink ring-2 ring-white">
            {course.moreStudents}+
          </span>
        </div>
      </div>

      <p className="mt-3 flex items-baseline">
        <span className="text-xl font-bold text-brand">${course.price}</span>
        <span className="text-xs text-[#9a9ca3]">/lifetime</span>
      </p>
    </article>
  );
}
