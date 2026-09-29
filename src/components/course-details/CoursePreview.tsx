"use client";

import { App } from "antd";
import Image from "next/image";

/** Course trailer thumbnail; the play button is part of the Figma export. */
export default function CoursePreview({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const { message } = App.useApp();

  return (
    <button
      type="button"
      aria-label={`Play preview of ${title}`}
      onClick={() =>
        message.info("Video playback isn't available in this demo yet.")
      }
      className="group relative block w-full cursor-pointer overflow-hidden rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
    >
      <Image
        src={src}
        alt=""
        width={720}
        height={479}
        priority
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </button>
  );
}
