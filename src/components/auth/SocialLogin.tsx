"use client";

import { authAssets } from "@/components/auth/authAssets";
import { App } from "antd";
import Image from "next/image";

const providers = [
  { name: "Facebook", icon: authAssets.facebook },
  { name: "Google", icon: authAssets.google },
];

// UI-only buttons. Social sign-in needs a backend to verify the provider
// token, so these are visual placeholders — wire up OAuth here later.
export default function SocialLogin() {
  const { message } = App.useApp();

  return (
    <div className="flex justify-center gap-3.5">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          aria-label={`Continue with ${provider.name}`}
          onClick={() =>
            message.info(
              `${provider.name} sign-in needs a backend — this is a UI demo.`,
            )
          }
          className="cursor-pointer rounded-[14px] transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image src={provider.icon} alt="" width={72} height={72} />
        </button>
      ))}
    </div>
  );
}
