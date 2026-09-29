import Container from "@/components/shared/Container";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import Footer from "@/components/shared/Footer";
import GridTexture from "@/components/shared/GridTexture";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

// Rendered for unmatched routes and anywhere `notFound()` is called. The root
// not-found sits outside the (main) layout, so it brings its own nav + footer.
export default function NotFound() {
  return (
    <>
      <Navbar overlay />
      <main className="font-body">
        <section className="relative isolate overflow-hidden bg-brand text-white">
          <GridTexture priority />
          <Container className="relative flex flex-col items-center pb-24 pt-36 text-center lg:min-h-[954px] lg:pb-[120px] lg:pt-[128px]">
            {/* Decorative numerals: lime fading into the blue behind them. */}
            <p
              aria-hidden
              className="select-none bg-linear-to-b from-lime from-45% to-lime/0 to-100% bg-clip-text font-heading text-[clamp(150px,33vw,480px)] font-semibold leading-[0.9] tracking-tight text-transparent"
            >
              404
            </p>
            <h1 className="-mt-[0.35em] font-heading text-[32px] font-semibold leading-[1.15] sm:text-5xl lg:text-[62px]">
              The page you are looking
              <br className="hidden sm:block" /> for doesn&rsquo;t exist
            </h1>
            <p className="mt-6 text-base text-white/90 lg:mt-[38px]">
              Try to use a correct url or go back to homepage to start again
            </p>
            <CustomPrimaryButton href="/" className="mt-7 lg:mt-[33px]">
              Back to Home
            </CustomPrimaryButton>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
