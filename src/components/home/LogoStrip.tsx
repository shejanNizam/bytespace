import { homeAssets } from "@/data/home";
import Image from "next/image";

// Only one partner logo was exported, so it stands in for all five slots.
const PARTNER_COUNT = 5;

export default function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="bg-surface">
      <ul className="mx-auto flex max-w-[1133px] flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 py-12 sm:px-6 lg:h-[196px] lg:flex-nowrap lg:justify-between lg:px-8 lg:py-0 xl:px-0">
        {Array.from({ length: PARTNER_COUNT }, (_, i) => (
          <li key={i}>
            <Image
              src={homeAssets.partnerLogo}
              alt="Logoipsum"
              width={167}
              height={41}
              className="h-auto w-[120px] opacity-90 grayscale lg:w-[150px] xl:w-[167px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
