import ReviewsTab from "@/components/course-details/ReviewsTab";
import { getCourseDetail } from "@/data/courses";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const detail = getCourseDetail((await params).id);
  return detail ? { title: `Reviews · ${detail.headline}` } : {};
}

export default async function CourseReviewsPage({ params }: { params: Params }) {
  const detail = getCourseDetail((await params).id);
  if (!detail) notFound();
  return <ReviewsTab detail={detail} />;
}
