"use client";

import TabSection from "@/components/course-details/TabSection";
import StarRating from "@/components/shared/StarRating";
import type { CourseDetail } from "@/types/course";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

type RatingFilter = "all" | number;

function RatingSummary({ detail }: { detail: CourseDetail }) {
  const max = Math.max(...detail.ratingBreakdown.map((r) => r.count));

  return (
    <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-line p-5 sm:flex-row sm:items-center sm:p-6">
      <div className="flex h-[124px] w-[124px] shrink-0 flex-col items-center justify-center rounded-xl bg-lime text-ink">
        <span className="text-xs">Ratings</span>
        <span className="font-heading text-[34px] font-semibold leading-tight">
          {detail.averageRating}
        </span>
      </div>
      <ul className="flex-1 space-y-2.5">
        {detail.ratingBreakdown.map(({ stars, count }) => (
          <li key={stars} className="flex items-center gap-3 text-sm">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-lime"
                style={{ width: `${(count / max) * 100}%` }}
              />
            </div>
            <StarRating value={stars} className="text-sm" />
            <span className="w-9 text-right text-ink-muted">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReviewsTab({ detail }: { detail: CourseDetail }) {
  const [filter, setFilter] = useState<RatingFilter>("all");
  const reviews =
    filter === "all"
      ? detail.reviews
      : detail.reviews.filter((review) => review.rating === filter);

  const options: { key: RatingFilter; label: React.ReactNode }[] = [
    { key: "all", label: "All rating" },
    ...[5, 4, 3, 2, 1].map((n) => ({
      key: n,
      label: (
        <>
          <FaStar aria-hidden className="text-xs" /> {n}
          <span className="sr-only"> stars</span>
        </>
      ),
    })),
  ];

  return (
    <>
      <TabSection title="What Learners Are Saying" intro={detail.reviewsIntro}>
        <RatingSummary detail={detail} />
      </TabSection>

      <TabSection title="Individual Reviews:">
        <div
          role="group"
          aria-label="Filter reviews by rating"
          className="mt-4 flex flex-wrap gap-2.5"
        >
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              aria-pressed={filter === option.key}
              onClick={() => setFilter(option.key)}
              className={cn(
                "inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm transition-colors",
                filter === option.key
                  ? "bg-lime font-medium text-ink"
                  : "bg-surface text-ink-muted hover:bg-[#ebebed]",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {reviews.length > 0 ? (
          <ul className="mt-6 space-y-5">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-[15px] font-semibold text-ink">
                        {review.name}
                      </p>
                      <p className="text-[13px] text-ink-soft">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="shrink-0 text-[13px] text-ink-soft">
                    {review.postedAgo}
                  </p>
                </div>
                <StarRating value={review.rating} className="mt-5" />
                <p className="mt-4 text-[15px] leading-7 text-ink-soft">
                  {review.body}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-2xl border border-dashed border-line px-6 py-10 text-center text-[15px] text-ink-soft">
            No {filter}-star reviews yet.
          </p>
        )}
      </TabSection>
    </>
  );
}
