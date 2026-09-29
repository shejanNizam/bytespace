import { authAssets } from "@/components/auth/authAssets";
import AuthThemeProvider from "@/components/auth/AuthThemeProvider";
import GridTexture from "@/components/shared/GridTexture";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand font-body text-white">
      <GridTexture priority />

      <div className="relative mx-auto w-full max-w-300 px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-30 xl:px-0">
        <Link href="/" aria-label="ByteSpace home" className="inline-block">
          <Image
            src={authAssets.logo}
            alt="ByteSpace"
            width={29}
            height={32}
            priority
          />
        </Link>

        <AuthThemeProvider>{children}</AuthThemeProvider>
      </div>
    </div>
  );
}
