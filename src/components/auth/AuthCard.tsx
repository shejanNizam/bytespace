interface AuthCardProps {
  /** Small blue label above the title, e.g. "Sign In". */
  eyebrow?: string;
  title?: string;
  /** Pinned to the bottom of the card, e.g. the "New user?" link. */
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/** White form card used on every auth screen. */
export default function AuthCard({
  eyebrow,
  title,
  footer,
  children,
}: AuthCardProps) {
  return (
    <section className="flex w-full flex-col rounded-[20px] bg-white px-6 py-10 text-ink sm:px-[63px] sm:pb-16 sm:pt-14 lg:min-h-[784px]">
      {(eyebrow || title) && (
        <header className="mb-8">
          {eyebrow && <p className="text-lg text-brand">{eyebrow}</p>}
          {title && (
            <h1 className="mt-1.5 font-heading text-[34px] font-semibold leading-[1.17] text-ink sm:text-[46px]">
              {title}
            </h1>
          )}
        </header>
      )}

      {children}

      {footer && (
        <p className="mt-auto pt-10 text-center text-base text-ink-muted">
          {footer}
        </p>
      )}
    </section>
  );
}

/** Inline link style for card footers. */
export const authLink =
  "text-brand transition-opacity hover:opacity-80 hover:underline";
