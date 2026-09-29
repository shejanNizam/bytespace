import { cn } from "@/utils/cn";

/** Page-width wrapper: 1200px content column from the Figma 1440 frame. */
export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
