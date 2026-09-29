"use client";

import { App } from "antd";
import { FiShare2 } from "react-icons/fi";

/** Native share sheet where available, otherwise copies the page link. */
export default function ShareButton({ title }: { title: string }) {
  const { message } = App.useApp();

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      message.success("Link copied to clipboard.");
    } catch (error) {
      // Dismissing the share sheet is not an error worth reporting.
      if ((error as DOMException)?.name !== "AbortError") {
        message.error("Couldn't share this page.");
      }
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-lime px-4 text-sm font-medium text-ink transition-[filter] hover:brightness-95"
    >
      <FiShare2 aria-hidden />
      Share
    </button>
  );
}
