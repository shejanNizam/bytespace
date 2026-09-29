import { homeAssets } from "@/data/home";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** "light" = white wordmark for blue backgrounds, "dark" for white ones. */
  variant?: "light" | "dark";
  onClick?: () => void;
  className?: string;
}

export default function Logo({
  variant = "light",
  onClick,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="ByteSpace home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      {variant === "light" ? (
        <Image
          src={homeAssets.logoLight}
          alt="ByteSpace"
          width={171}
          height={37}
          priority
        />
      ) : (
        // No dark wordmark was exported, so pair the mark with live text.
        <span className="inline-flex items-center gap-2">
          <Image src={homeAssets.logoMark} alt="" width={29} height={32} />
          <span className="font-heading text-[25px] font-bold leading-none tracking-tight text-ink">
            ByteSpace
          </span>
        </span>
      )}
    </Link>
  );
}
