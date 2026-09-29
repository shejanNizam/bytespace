import { homeAssets } from "@/data/home";
import Image from "next/image";

/** Faint white grid lines used on every brand-blue band in the design. */
export default function GridTexture({ priority }: { priority?: boolean }) {
  return (
    <Image
      src={homeAssets.grid}
      alt=""
      aria-hidden
      fill
      unoptimized
      priority={priority}
      className="pointer-events-none select-none object-cover object-top"
    />
  );
}
