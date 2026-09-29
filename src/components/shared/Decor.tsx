import { cn } from "@/utils/cn";
import Image from "next/image";

export interface DecorFrame {
  width: number;
  height: number;
}

interface DecorProps {
  src: string;
  /** Intrinsic size of the exported asset (1× Figma px). */
  width: number;
  height: number;
  /** Top-left position in Figma px, relative to `frame`. */
  x: number;
  y: number;
  /** The Figma box the coordinates are measured in. */
  frame: DecorFrame;
  priority?: boolean;
  className?: string;
}

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * Places a decorative Figma export at its design coordinates. Position and
 * width are converted to percentages of the frame, so the composition scales
 * with its container instead of breaking at smaller widths.
 */
export default function Decor({
  src,
  width,
  height,
  x,
  y,
  frame,
  priority,
  className,
}: DecorProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      priority={priority}
      draggable={false}
      className={cn(
        "pointer-events-none absolute h-auto max-w-none select-none",
        className,
      )}
      style={{
        left: pct(x, frame.width),
        top: pct(y, frame.height),
        width: pct(width, frame.width),
      }}
    />
  );
}
