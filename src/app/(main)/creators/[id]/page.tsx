import CreatorCourses from "@/components/creators/CreatorCourses";
import CreatorHero from "@/components/creators/CreatorHero";
import { creators, getCreator } from "@/data/creators";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

// Unknown ids 404 at routing time (a real 404 status, not a streamed 200).
export const dynamicParams = false;

export function generateStaticParams() {
  return creators.map((creator) => ({ id: creator.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const creator = getCreator((await params).id);
  return creator ? { title: creator.name, description: creator.headline } : {};
}

export default async function CreatorPage({ params }: { params: Params }) {
  const creator = getCreator((await params).id);
  if (!creator) notFound();

  return (
    <main className="bg-white font-body">
      <CreatorHero creator={creator} />
      <CreatorCourses courses={creator.courses} />
    </main>
  );
}
