"use client";

import AuthHeader, { authPrimaryBtn } from "@/components/auth/AuthHeader";
import { App, Button, Input, InputRef } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const VerifyCodeContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { message } = App.useApp();

  const email = searchParams.get("email") || "";

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(InputRef | null)[]>([]);

  // Countdown timer for the resend button.
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [resendTimer]);

  const handleVerify = (): void => {
    // Frontend-only demo: no API call. Simulate a successful verification.
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      message.success("Code verified (demo).");
      router.push("/reset-password");
    }, 700);
  };

  const handleChange = (value: string, index: number): void => {
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "") && index === 5) {
      handleVerify();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) {
      message.error("Please paste only numeric digits");
      return;
    }

    const newCode = pastedData.split("").concat(Array(6).fill("")).slice(0, 6);
    setCode(newCode);

    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    inputRefs.current[lastFilledIndex]?.focus();

    if (pastedData.length === 6) {
      handleVerify();
    }
  };

  const handleResendOTP = (): void => {
    if (!canResend) return;
    message.success("New code sent (demo).");
    setResendTimer(60);
    setCanResend(false);
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <>
      <AuthHeader
        title="Verify your email"
        subtitle={
          <>
            Enter the 6-digit code we sent to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {email || "your email"}
            </span>
            .
          </>
        }
      />

      <div className="mb-6 flex justify-center gap-2.5 sm:gap-3">
        {code.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            maxLength={1}
            inputMode="numeric"
            className="h-14! w-12! rounded-xl! text-center text-xl font-bold"
          />
        ))}
      </div>

      <Button
        type="primary"
        size="large"
        block
        loading={isVerifying}
        onClick={handleVerify}
        disabled={code.some((digit) => digit === "")}
        className={authPrimaryBtn}
      >
        {isVerifying ? "Verifying..." : "Verify code"}
      </Button>

      <div className="mt-6 text-center text-sm">
        {!canResend ? (
          <p className="text-gray-500 dark:text-gray-400">
            Resend code in{" "}
            <span className="font-semibold text-primary">{resendTimer}s</span>
          </p>
        ) : (
          <button
            type="button"
            onClick={handleResendOTP}
            className="font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Resend code
          </button>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:opacity-80 transition-opacity"
        >
          Back to sign in
        </Link>
      </p>
    </>
  );
};

function VerifyCodeLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto inline-block h-10 w-10 animate-spin rounded-full border-b-2 border-primary" />
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}

const VerifyCode: React.FC = () => {
  return (
    <Suspense fallback={<VerifyCodeLoading />}>
      <VerifyCodeContent />
    </Suspense>
  );
};

export default VerifyCode;
