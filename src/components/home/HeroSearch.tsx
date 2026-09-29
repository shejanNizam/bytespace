"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?search=${encodeURIComponent(q)}` : "/courses");
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-[578px] items-center gap-3 sm:gap-[19px]"
    >
      <label className="relative flex-1">
        <span className="sr-only">Search courses</span>
        <FiSearch
          aria-hidden
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#8a8d94]"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="h-[49px] w-full rounded-full bg-white pl-12 pr-5 text-base text-ink outline-none placeholder:text-[#8a8d94] focus:ring-4 focus:ring-lime/60"
        />
      </label>
      <button
        type="submit"
        className="h-11 shrink-0 cursor-pointer rounded-full bg-lime px-6 text-base font-medium text-ink transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Search
      </button>
    </form>
  );
}
