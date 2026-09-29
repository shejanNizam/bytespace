"use client";

import AuthHeader, {
  authLabel,
  authPrimaryBtn,
} from "@/components/auth/AuthHeader";
import { App, Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMail } from "react-icons/fi";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm<ForgotPasswordFormValues>();
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: ForgotPasswordFormValues): void => {
    // Frontend-only demo: no API call. Route to the verify-code screen.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Reset code sent (demo).");
      router.push(`/verify-code?email=${encodeURIComponent(values.email)}`);
    }, 500);
  };

  return (
    <>
      <AuthHeader
        title="Forgot password?"
        subtitle="Enter your email and we'll send you a code to reset it."
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item<ForgotPasswordFormValues>
          label={<span className={authLabel}>Email address</span>}
          name="email"
          rules={[
            { type: "email", message: "Please enter a valid email address" },
            { required: true, message: "Email is required" },
          ]}
        >
          <Input
            size="large"
            prefix={<FiMail className="mr-1 text-slate-400" />}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          loading={isLoading}
          className={authPrimaryBtn}
        >
          {isLoading ? "Sending..." : "Send reset code"}
        </Button>

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Back to sign in
          </Link>
        </p>
      </Form>
    </>
  );
};

export default ForgotPassword;
