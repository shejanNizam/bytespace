import ShareButton from "@/components/course-details/ShareButton";
import LevelIcon from "@/components/shared/LevelIcon";
import type { CourseDetail } from "@/types/course";
import { FaStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

/** Title block on the blue band: headline, tagline, creator and quick facts. */
export default function CourseHeader({ detail }: { detail: CourseDetail }) {
  const facts = [
    { icon: <LevelIcon className="text-brand" />, label: detail.course.level },
    {
      icon: <FaStar aria-hidden className="text-brand" />,
      label: `${detail.averageRating} (${detail.reviewCount} reviews)`,
    },
    {
      icon: <FiUsers aria-hidden className="text-brand" />,
      label: `${detail.studentCount} Students`,
    },
  ];

  return (
    <div className="flex flex-col-reverse items-start gap-6 text-white sm:flex-row sm:justify-between">
      <div className="min-w-0">
        <h1 className="font-heading text-[26px] font-semibold leading-tight sm:text-[32px] sm:leading-10">
          {detail.headline}
        </h1>
        {detail.tagline && (
          <p className="mt-1 font-heading text-base font-medium sm:text-lg">
            {detail.tagline}
          </p>
        )}
        <p className="mt-4 text-base lg:mt-5">
          by <span className="text-lime">{detail.course.creator}</span>
        </p>
        <ul className="mt-6 flex flex-wrap gap-3 lg:mt-[30px]">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm text-ink"
            >
              {fact.icon}
              {fact.label}
            </li>
          ))}
        </ul>
      </div>
      <ShareButton title={detail.headline} />
    </div>
  );
}
