"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

/** Compact back arrow shown beside each auth page title. */
export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back"
      className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink-muted transition-colors hover:border-brand hover:text-brand"
    >
      <FiArrowLeft className="text-lg" />
    </button>
  );
}
