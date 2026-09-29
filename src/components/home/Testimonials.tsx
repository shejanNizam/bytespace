import Container from "@/components/shared/Container";
import GlowBlob from "@/components/shared/GlowBlob";
import { testimonials } from "@/data/home";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f9fafb] py-20 lg:pb-[122px] lg:pt-[108px]">
      <GlowBlob
        tone="lime"
        className="-top-32 right-[8%] h-[420px] w-[620px] opacity-80"
      />
      <GlowBlob
        tone="blue"
        className="-bottom-40 -left-40 h-[460px] w-[560px] opacity-70"
      />

      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,560px)_minmax(0,541px)] lg:items-center lg:justify-between">
          <h2 className="font-heading text-[28px] font-semibold leading-[1.3] text-ink sm:text-4xl sm:leading-[1.3]">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-[26px] text-ink-soft">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[75px] lg:grid-cols-3 lg:gap-[45px]">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="h-full rounded-[20px] bg-white px-6 pb-7 pt-[22px] shadow-[0_20px_50px_-30px_rgba(36,37,40,0.25)]">
                <Image
                  src={t.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <figcaption className="mt-7">
                  <p className="font-heading text-lg font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="text-base text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="mt-8 text-[17px] leading-[29px] text-[#7b7b7b]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
