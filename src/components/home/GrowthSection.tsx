import Container from "@/components/shared/Container";
import GlowBlob from "@/components/shared/GlowBlob";
import { creatorPerks, growthStats, homeAssets } from "@/data/home";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const titleClass =
  "font-heading text-[28px] font-semibold leading-[1.3] text-ink sm:text-4xl sm:leading-[1.3]";

export default function GrowthSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f9fb] pb-16 pt-16 lg:pb-0 lg:pt-[92px]">
      <GlowBlob
        tone="lime"
        className="left-[8%] -top-24 h-[420px] w-[560px] opacity-70"
      />
      <GlowBlob
        tone="blue"
        className="-left-48 top-[38%] h-[520px] w-[520px] opacity-70"
      />
      <GlowBlob
        tone="blue"
        className="-right-40 top-[18%] h-[560px] w-[520px] opacity-60"
      />
      <GlowBlob
        tone="lime"
        className="-left-24 bottom-[-160px] h-[420px] w-[560px] opacity-90"
      />
      <GlowBlob
        tone="blue"
        className="-right-32 -bottom-40 h-[460px] w-[520px] opacity-70"
      />

      <Container>
        {/* Learners */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:items-start lg:gap-8">
          <div className="xl:pt-[112px]">
            <h2 className={titleClass}>
              Your Path to Professional
              <br className="hidden sm:block" /> Growth Starts Here!
            </h2>
            <p className="mt-6 max-w-[600px] text-[15px] leading-[26px] text-[#75777a] lg:mt-[42px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-12 lg:mt-[57px] lg:gap-[60px]">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-base text-ink-soft">{stat.label}</dt>
                  <dd className="font-heading text-[32px] font-medium leading-none text-brand">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-[703px] xl:mx-0 xl:-mr-[135px] xl:w-auto xl:max-w-none">
            <Image
              src={homeAssets.growth.learner}
              alt="Smiling student with a laptop, next to a course card and a 55% learning-progress badge"
              width={703}
              height={697}
              sizes="(min-width: 1024px) 703px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Creators */}
        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,587px)_minmax(0,1fr)] lg:gap-9 xl:-mt-12 xl:items-start">
          <div className="order-last mx-auto w-full max-w-[587px] lg:order-first">
            <Image
              src={homeAssets.growth.creator}
              alt="Course creator with a tablet, next to revenue stats and a happy-students badge"
              width={587}
              height={719}
              sizes="(min-width: 1024px) 587px, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="xl:pt-[119px]">
            <h2 className={titleClass}>
              Create &amp; Manage
              <br className="hidden sm:block" /> Courses Easily.
            </h2>
            <p className="mt-6 max-w-[457px] text-[15px] leading-[26px] text-[#75777a] lg:mt-[42px]">
              <strong className="font-semibold text-ink">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-[18px] lg:mt-[62px]">
              {creatorPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-[25px] text-[15px] text-ink"
                >
                  <FaCircleCheck
                    aria-hidden
                    className="shrink-0 text-base text-brand"
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
