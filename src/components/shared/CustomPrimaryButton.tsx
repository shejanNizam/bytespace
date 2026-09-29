import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type ButtonSize = "sm" | "md" | "lg";

interface CustomPrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** When provided, the button renders as a Next.js Link for navigation. */
  href?: string;
  /** Visual size preset. Defaults to "md". */
  size?: ButtonSize;
  /** Stretch to the full width of the parent. */
  block?: boolean;
  /** Optional leading icon. */
  icon?: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-[26px] text-base",
  lg: "h-12 px-8 text-lg",
};

/** Lime pill CTA from the ByteSpace design. */
export default function CustomPrimaryButton({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  href,
  size = "md",
  block = false,
  icon,
}: CustomPrimaryButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer touch-manipulation select-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime font-medium text-ink",
    "transition-[filter,transform] duration-200 hover:brightness-95 active:scale-[0.97]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100 disabled:active:scale-100",
    sizeClasses[size],
    block && "w-full",
    className,
  );

  const content = (
    <>
      {icon && <span className="text-[1.1em]">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
