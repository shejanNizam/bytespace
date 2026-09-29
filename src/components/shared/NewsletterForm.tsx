"use client";

import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import { App } from "antd";
import { useState } from "react";

// UI-only: no newsletter API yet, so a valid email just shows a confirmation.
export default function NewsletterForm() {
  const { message } = App.useApp();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    message.success("Thanks for subscribing (demo).");
    setEmail("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[26px]"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-[50px] w-full rounded-full border border-[#e0e1e4] bg-white px-6 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted focus:border-brand focus:ring-3 focus:ring-brand/10 sm:max-w-[375px]"
      />
      <CustomPrimaryButton type="submit" className="shrink-0 px-[27px] text-lg">
        Subscribe
      </CustomPrimaryButton>
    </form>
  );
}
