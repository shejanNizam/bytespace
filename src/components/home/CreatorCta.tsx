import Container from "@/components/shared/Container";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import Decor, { type DecorFrame } from "@/components/shared/Decor";
import GridTexture from "@/components/shared/GridTexture";
import { homeAssets } from "@/data/home";

const { cta } = homeAssets;
const FRAME: DecorFrame = { width: 1440, height: 482 };

export default function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand font-body text-white">
      <GridTexture />

      {/* Shapes follow the Figma frame on large screens; on smaller ones they
          would sit under the copy, so they are hidden. */}
      <div aria-hidden className="absolute inset-0">
        <Decor
          src={cta.limeSquiggleTop}
          width={267}
          height={225}
          x={0}
          y={0}
          frame={FRAME}
          className="max-lg:hidden"
        />
        <Decor
          src={cta.whiteSquiggle}
          width={177}
          height={176}
          x={179}
          y={5}
          frame={FRAME}
          className="animate-shape-float-slow max-lg:hidden"
        />
        <Decor
          src={cta.whiteCone}
          width={140}
          height={189}
          x={0}
          y={222}
          frame={FRAME}
          className="max-lg:hidden"
        />
        <Decor
          src={cta.limeTorus}
          width={346}
          height={190}
          x={17}
          y={292}
          frame={FRAME}
          className="max-lg:hidden"
        />
        <Decor
          src={cta.limeCone}
          width={190}
          height={189}
          x={1080}
          y={0}
          frame={FRAME}
          className="animate-shape-float max-lg:hidden"
        />
        <Decor
          src={cta.whiteCylinder}
          width={218}
          height={372}
          x={1222}
          y={5}
          frame={FRAME}
          className="max-lg:hidden"
        />
        <Decor
          src={cta.limeSquiggleBottom}
          width={334}
          height={199}
          x={1106}
          y={283}
          frame={FRAME}
          className="max-lg:hidden"
        />
      </div>

      <Container className="relative flex min-h-[420px] flex-col items-center justify-center py-16 text-center lg:h-[482px] lg:py-0">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.3] sm:text-4xl sm:leading-[1.3]">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-[760px] text-base leading-[26px] text-white/85 lg:mt-10 xl:max-w-[900px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <CustomPrimaryButton href="/signup" className="mt-8 lg:mt-[50px]">
          Join as Creator
        </CustomPrimaryButton>
      </Container>
    </section>
  );
}
