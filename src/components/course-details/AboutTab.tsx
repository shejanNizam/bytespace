import TabSection from "@/components/course-details/TabSection";
import type { CourseDetail } from "@/types/course";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function AboutTab({ detail }: { detail: CourseDetail }) {
  return (
    <>
      <TabSection title="Description">
        <div className="mt-3 space-y-6 text-[15px] leading-[26px] text-ink-soft">
          {detail.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </TabSection>

      <TabSection title="Sneak Peek">
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[17px]">
          {detail.sneakPeek.map((src, i) => (
            <li key={src}>
              <Image
                src={src}
                alt={`Course preview ${i + 1}`}
                width={167}
                height={125}
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </TabSection>

      <TabSection title="Key Points">
        <ul className="mt-4 space-y-4">
          {detail.keyPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-[15px] text-ink"
            >
              <FaCircleCheck aria-hidden className="shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
      </TabSection>
    </>
  );
}
