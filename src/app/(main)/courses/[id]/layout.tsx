import CourseHeader from "@/components/course-details/CourseHeader";
import CoursePreview from "@/components/course-details/CoursePreview";
import CourseSidebar from "@/components/course-details/CourseSidebar";
import CourseTabs from "@/components/course-details/CourseTabs";
import Container from "@/components/shared/Container";
import GridTexture from "@/components/shared/GridTexture";
import { courseCatalog, getCourseDetail } from "@/data/courses";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

// Unknown ids 404 at routing time (a real 404 status, not a streamed 200).
export const dynamicParams = false;

export function generateStaticParams() {
  return courseCatalog.map((course) => ({ id: course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const detail = getCourseDetail((await params).id);
  if (!detail) return {};
  return { title: detail.headline, description: detail.tagline };
}

/*
 * Shared shell for the About / Lessons / Reviews tabs.
 *
 * One grid holds everything. The blue band is a full-bleed grid item spanning
 * rows 1–3 (header, preview video, 58px spacer), so it always ends just below
 * the video. From lg the sidebar sits in column 2 from the video row down into
 * the white area, as in the design; below lg everything stacks in order.
 */
export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { id } = await params;
  const detail = getCourseDetail(id);
  if (!detail) notFound();

  return (
    <main className="overflow-x-clip bg-white font-body">
      <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,720px)_minmax(0,440px)] lg:justify-between lg:gap-x-10">
        <div
          aria-hidden
          className="relative col-span-full row-start-1 row-end-4 ml-[calc(50%-50vw)] w-screen overflow-hidden bg-brand"
        >
          <GridTexture priority />
        </div>

        <div className="relative col-span-full row-start-1 pt-32 lg:pt-[186px]">
          <CourseHeader detail={detail} />
        </div>

        <div className="relative col-start-1 row-start-2 mt-8 lg:mt-[38px]">
          <CoursePreview src={detail.previewVideo} title={detail.headline} />
        </div>

        <div className="col-start-1 row-start-3 h-10 lg:h-[58px]" />

        <div className="relative col-start-1 row-start-4 mt-8 lg:col-start-2 lg:row-start-2 lg:row-end-5 lg:mt-[38px] lg:self-start">
          <CourseSidebar detail={detail} />
        </div>

        <div className="col-start-1 row-start-5 pb-20 pt-10 lg:row-start-4 lg:pb-[120px] lg:pt-[90px]">
          <CourseTabs courseId={id} />
          <div className="mt-8">{children}</div>
        </div>
      </Container>
    </main>
  );
}
