import HeroSearch from "@/components/home/HeroSearch";
import Container from "@/components/shared/Container";
import Decor, { type DecorFrame } from "@/components/shared/Decor";
import GridTexture from "@/components/shared/GridTexture";
import { homeAssets } from "@/data/home";

const { hero } = homeAssets;

/* Figma frames the coordinates below are measured in. */
const HERO: DecorFrame = { width: 1440, height: 1024 };
/* The illustration band: Figma y 460 → 1024 of the hero. */
const STAGE: DecorFrame = { width: 1440, height: 564 };

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand font-body text-white">
      <GridTexture priority />

      {/* Side shapes beside the headline — only where there's room. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 hidden aspect-[1440/1024] lg:block"
      >
        <Decor
          src={hero.limeSquiggle}
          width={267}
          height={387}
          x={0}
          y={221}
          frame={HERO}
          className="animate-shape-float-slow"
        />
        <Decor
          src={hero.limeCylinder}
          width={213}
          height={372}
          x={1227}
          y={221}
          frame={HERO}
        />
      </div>

      <Container className="relative z-10 pt-32 text-center lg:pt-[166px]">
        <h1 className="mx-auto max-w-[900px] font-heading text-4xl font-semibold leading-[1.2] sm:text-5xl lg:text-6xl xl:text-[70px] xl:leading-[1.24]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-[860px] text-base leading-6 lg:mt-[42px] lg:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-10 lg:mt-[57px]">
          <HeroSearch />
        </div>
      </Container>

      {/* Illustration stage */}
      <div className="relative left-1/2 mt-4 aspect-[1440/564] w-[max(100%,700px)] -translate-x-1/2 lg:-mt-[50px]">
        <div
          aria-hidden
          className="absolute aspect-square rounded-full bg-lime-bright"
          style={{
            left: `${(161 / 1440) * 100}%`,
            top: `${(125 / 564) * 100}%`,
            width: `${(1114 / 1440) * 100}%`,
          }}
        />
        <Decor
          src={hero.whiteTorus}
          width={346}
          height={343}
          x={14}
          y={220}
          frame={STAGE}
          className="animate-shape-float"
        />
        <Decor
          src={hero.whiteSquiggleSmall}
          width={177}
          height={176}
          x={184}
          y={17}
          frame={STAGE}
          className="animate-shape-float-slow"
        />
        <Decor
          src={hero.whiteCone}
          width={190}
          height={189}
          x={1103}
          y={3}
          frame={STAGE}
          className="animate-shape-float"
        />
        <Decor
          src={hero.whiteSquiggleLarge}
          width={317}
          height={332}
          x={1124}
          y={212}
          frame={STAGE}
          className="animate-shape-float-slow"
        />
        <Decor
          src={hero.student}
          width={722}
          height={515}
          x={403}
          y={49}
          frame={STAGE}
          priority
        />
        <Decor
          src={hero.categoryCard}
          width={208}
          height={70}
          x={402}
          y={177}
          frame={STAGE}
        />
        <Decor
          src={hero.progressCard}
          width={232}
          height={131}
          x={840}
          y={190}
          frame={STAGE}
        />
        <Decor
          src={hero.happyStudentsCard}
          width={258}
          height={121}
          x={327}
          y={375}
          frame={STAGE}
        />
      </div>
    </section>
  );
}
