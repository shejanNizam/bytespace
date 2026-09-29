import AuthCard, { authLink } from "@/components/auth/AuthCard";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Create an Account" };

export default function SignupPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className={authLink}>
              Login
            </Link>
          </>
        }
      >
        <SignupForm />
      </AuthCard>
    </AuthShell>
  );
}
