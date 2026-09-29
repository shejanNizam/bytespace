import { authAssets } from "@/components/auth/authAssets";
import { cn } from "@/utils/cn";
import Image from "next/image";

/*
 * Collage from the Figma auth frame. Positions are percentages of a 530×583
 * box so the whole composition scales with the column width. Listed in paint
 * order (back to front).
 */
const pieces = [
  {
    src: authAssets.courseCardBack,
    width: 373,
    height: 384,
    className: "left-[0.6%] top-[12.9%] w-[70.4%]",
  },
  {
    src: authAssets.courseCardFront,
    width: 373,
    height: 384,
    className: "left-[21.1%] top-0 w-[70.4%]",
  },
  {
    src: authAssets.happyStudents,
    width: 258,
    height: 123,
    className: "left-[42.8%] top-[74.4%] w-[48.7%]",
  },
  {
    src: authAssets.squiggle,
    width: 177,
    height: 176,
    className: "left-[66.6%] top-[55.1%] w-[33.4%] animate-shape-float-slow",
  },
  {
    src: authAssets.torus,
    width: 148,
    height: 147,
    className: "left-[5.5%] top-[3.3%] w-[27.9%] animate-shape-float",
  },
  {
    src: authAssets.cone,
    width: 190,
    height: 189,
    className: "-left-[3.8%] top-[67.6%] w-[35.8%] animate-shape-float-slow",
  },
];

export default function AuthIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative aspect-[530/583] w-full max-w-[530px]",
        className,
      )}
    >
      {pieces.map((piece) => (
        <Image
          key={piece.src}
          src={piece.src}
          alt=""
          width={piece.width}
          height={piece.height}
          draggable={false}
          className={cn("absolute h-auto select-none", piece.className)}
        />
      ))}
    </div>
  );
}
