import AuthCard, { authLink } from "@/components/auth/AuthCard";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{" "}
            <Link href="/signup" className={authLink}>
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}
