import AuthIllustration from "@/components/auth/AuthIllustration";

interface AuthShellProps {
  /** Short intro shown on the blue side, e.g. "Sign in with ease". */
  heading: string;
  description: string;
  /** The form card. */
  children: React.ReactNode;
}

/**
 * Two-column auth screen: intro copy + illustration on the left, form card on
 * the right. Below `lg` it collapses to intro above card and drops the
 * illustration.
 */
export default function AuthShell({
  heading,
  description,
  children,
}: AuthShellProps) {
  return (
    <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,530px)_minmax(0,579px)] lg:justify-between lg:gap-10">
      <div className="mx-auto w-full max-w-[579px] lg:mx-0 lg:pt-2.5">
        <p className="font-heading text-xl font-semibold text-white">
          {heading}
        </p>
        <p className="mt-3 max-w-[480px] text-base leading-7 text-white sm:text-lg lg:min-h-21">
          {description}
        </p>
        <AuthIllustration className="mt-12 hidden lg:block" />
      </div>

      <div className="mx-auto w-full max-w-[579px] lg:mx-0 lg:justify-self-end">
        {children}
      </div>
    </div>
  );
}
