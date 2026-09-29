"use client";

import Container from "@/components/shared/Container";
import GridTexture from "@/components/shared/GridTexture";
import type { Creator } from "@/data/creators";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

export default function CreatorHero({ creator }: { creator: Creator }) {
  const [following, setFollowing] = useState(false);
  const followers = creator.followers + (following ? 1 : 0);

  const stats = [
    { value: creator.courses.length, label: "Products" },
    { value: followers, label: "Followers" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-brand font-body text-white">
      <GridTexture priority />
      <Container className="relative pb-14 pt-32 lg:pb-[84px] lg:pt-[177px]">
        <div className="flex items-center gap-4 sm:gap-5">
          <Image
            src={creator.avatar}
            alt=""
            width={96}
            height={96}
            priority
            className="h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className="font-heading text-2xl font-semibold sm:text-[30px]">
                {creator.name}
              </h1>
              <span className="inline-flex h-7 items-center rounded-full bg-lime px-4 text-[13px] font-medium text-ink">
                {creator.badge}
              </span>
            </div>
            <p className="mt-1 text-[15px] text-white/90">{creator.headline}</p>
          </div>
        </div>

        <div className="mt-8 space-y-1 text-base leading-[26px] text-white/90 lg:mt-[45px]">
          {creator.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 lg:mt-[47px]">
          <ul className="flex flex-wrap gap-3">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-[15px] text-ink"
              >
                <span className="font-medium text-brand">{stat.value}</span>
                {stat.label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-pressed={following}
            onClick={() => setFollowing((f) => !f)}
            className={cn(
              "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-6 text-base font-medium transition-colors",
              following
                ? "border border-white/60 text-white hover:bg-white/10"
                : "bg-lime text-ink hover:brightness-95",
            )}
          >
            {following && <FiCheck aria-hidden />}
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </Container>
    </section>
  );
}
