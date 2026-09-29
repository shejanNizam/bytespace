import BackButton from "@/components/auth/BackButton";

interface AuthHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <BackButton />
        <h1 className="font-heading text-[28px] font-semibold leading-tight text-ink">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Shared field label style so every input reads consistently. */
export const authLabel = "text-sm text-ink";

/** Shared primary CTA: lime pill from the Figma auth screens. */
export const authPrimaryBtn =
  "h-11! rounded-full! border-none! bg-lime! px-[26px]! text-lg! font-medium! text-ink! shadow-none! transition-[filter]! hover:brightness-95! disabled:opacity-50!";
