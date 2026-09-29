import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { learningPaths } from "@/data/home";
import Image from "next/image";
import Link from "next/link";

export default function LearningPaths() {
  return (
    <section className="bg-white pb-20 pt-20 lg:pb-[142px] lg:pt-[70px]">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="[&>p]:max-w-[720px]"
        />

        <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:mt-[74px] lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((path) => (
            <li key={path.label}>
              <Link
                href={`/courses?category=${encodeURIComponent(path.label)}`}
                className="flex h-[164px] flex-col items-center rounded-[20px] border border-[#ecedef] bg-white pt-[34px] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(0,59,226,0.35)] focus-visible:outline-2 focus-visible:outline-brand"
              >
                <Image src={path.icon} alt="" width={60} height={60} />
                <span className="mt-5 text-lg text-ink">{path.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
