import AboutTab from "@/components/course-details/AboutTab";
import { getCourseDetail } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CourseAboutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const detail = getCourseDetail((await params).id);
  if (!detail) notFound();
  return <AboutTab detail={detail} />;
}
