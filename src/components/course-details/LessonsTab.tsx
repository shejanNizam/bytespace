import ProgressCard from "@/components/course-details/ProgressCard";
import TabSection from "@/components/course-details/TabSection";
import type { CourseDetail } from "@/types/course";
import { FiVideo } from "react-icons/fi";

export default function LessonsTab({ detail }: { detail: CourseDetail }) {
  return (
    <>
      <TabSection title="Explore the Modules" intro={detail.modulesIntro} />

      <TabSection title="Lesson List">
        <ol className="mt-5 space-y-5">
          {detail.modules.map((module, i) => (
            <li key={module.title} className="flex gap-4 sm:gap-5">
              <span className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-lime text-[22px] text-ink">
                <FiVideo aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-ink">
                  Module {i + 1}: {module.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-ink-soft">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </TabSection>

      <TabSection title="Lesson Content" intro={detail.lessonContent} />

      <TabSection title="Lesson Progress Tracking" intro={detail.progressIntro}>
        <div className="mt-5">
          <ProgressCard value={detail.progress} />
        </div>
      </TabSection>
    </>
  );
}
