import CourseExplorer from "@/components/home/CourseExplorer";
import CreatorCta from "@/components/home/CreatorCta";
import GrowthSection from "@/components/home/GrowthSection";
import HeroSection from "@/components/home/HeroSection";
import LearningPaths from "@/components/home/LearningPaths";
import LogoStrip from "@/components/home/LogoStrip";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="bg-white font-body">
      <HeroSection />
      <LogoStrip />
      <CourseExplorer />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
    </main>
  );
}
