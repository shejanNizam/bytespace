"use client";

import { authTheme } from "@/utils/antTheme";
import { ConfigProvider } from "antd";

/** Applies the light, Figma-matched antd theme to the auth screens. */
export default function AuthThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={authTheme}>{children}</ConfigProvider>;
}
