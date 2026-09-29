import BackButton from "@/components/auth/BackButton";

interface AuthHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <BackButton />
        <h1 className="text-[26px] font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Shared field label style so every input reads consistently. */
export const authLabel =
  "text-sm font-medium text-slate-700 dark:text-slate-200";

/** Shared primary CTA: full-width gradient button used across all auth pages. */
export const authPrimaryBtn =
  "h-12! rounded-xl! border-none! bg-linear-to-r from-primary to-secondary text-base! font-semibold shadow-lg shadow-primary/25 hover:opacity-95 hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:shadow-none disabled:grayscale";
