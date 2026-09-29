import Link from "next/link";
import { FiCheck } from "react-icons/fi";

/* Selling points shown on the branded showcase panel. */
const highlights = [
  {
    title: "Enterprise-grade security",
    desc: "Bank-level encryption and SOC 2 compliance out of the box.",
  },
  {
    title: "Ship in minutes, not weeks",
    desc: "A production-ready foundation so you can focus on your product.",
  },
  {
    title: "Loved by 20,000+ teams",
    desc: "From solo builders to Fortune 500 engineering orgs.",
  },
];

/** Brand mark — reused on both the showcase panel and the mobile header. */
function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span
        className={
          inverted
            ? "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold text-white ring-1 ring-white/25 backdrop-blur-sm"
            : "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-lg font-bold text-white shadow-md shadow-primary/30"
        }
      >
        B
      </span>
      <span
        className={
          inverted
            ? "text-lg font-bold tracking-tight text-white"
            : "text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        }
      >
        Byte
        <span className={inverted ? "text-white/70" : "text-primary"}>
          Space
        </span>
      </span>
    </Link>
  );
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#080d1a]">
      {/* ───────────────────────── Showcase panel (lg+) ───────────────────────── */}
      <aside className="relative hidden w-1/2 shrink-0 overflow-hidden bg-linear-to-br from-primary via-primary to-secondary lg:flex xl:w-[55%]">
        {/* Dot-grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Floating ambient orbs */}
        <div
          aria-hidden
          className="animate-auth-float pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="animate-auth-float-slow pointer-events-none absolute -bottom-32 -right-16 h-112 w-112 rounded-full bg-secondary/40 blur-[120px]"
        />
        {/* Top sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
        />

        <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
          <BrandMark inverted />

          <div className="max-w-md">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white xl:text-5xl">
              Build faster.
              <br />
              Ship with confidence.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              The modern platform trusted by teams to launch, scale, and grow —
              all from one beautiful workspace.
            </p>

            <ul className="mt-10 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                    <FiCheck className="text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <figure className="max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <blockquote className="text-[15px] leading-relaxed text-white/90">
              &ldquo;Switching over was the best decision we made this year. Our
              team ships twice as fast and everything just works.&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white ring-1 ring-white/25">
                SD
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Sarah Doyle</p>
                <p className="text-xs text-white/60">
                  Head of Product, Northwind
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </aside>

      {/* ───────────────────────── Form column ───────────────────────── */}
      <main className="relative flex flex-1 flex-col px-4 py-6 sm:px-6">
        {/* Ambient glow — clipped to this column so it never adds page scroll.
            Backdrop for mobile/tablet where the showcase panel is hidden. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
        >
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] dark:bg-primary/20" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px] dark:bg-secondary/15" />
        </div>

        {/* Card centered in the remaining space; scrolls when taller than the viewport */}
        <div className="relative z-10 flex flex-1 items-center justify-center py-6">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-xl shadow-slate-300/40 backdrop-blur-sm sm:p-9 dark:border-white/10 dark:bg-[#0f1a2e]/90 dark:shadow-black/40">
              {children}
            </div>

            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} ByteSpace. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
