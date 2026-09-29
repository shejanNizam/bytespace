"use client";

import AuthHeader, {
  authLabel,
  authPrimaryBtn,
} from "@/components/auth/AuthHeader";
import { App, Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLock } from "react-icons/fi";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm<ResetPasswordFormValues>();
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: ResetPasswordFormValues): void => {
    // Frontend-only demo: no API call. Simulate a successful reset.
    void values;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Password reset (demo). Please log in.");
      router.push("/login");
    }, 500);
  };

  return (
    <>
      <AuthHeader
        title="Reset password"
        subtitle="Choose a new password for your account."
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item<ResetPasswordFormValues>
          label={<span className={authLabel}>New password</span>}
          name="password"
          rules={[
            { required: true, message: "Please enter your new password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            prefix={<FiLock className="mr-1 text-slate-400" />}
            placeholder="Enter your new password"
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item<ResetPasswordFormValues>
          label={<span className={authLabel}>Confirm password</span>}
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            prefix={<FiLock className="mr-1 text-slate-400" />}
            placeholder="Re-enter your new password"
            autoComplete="new-password"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          loading={isLoading}
          className={`mt-1 ${authPrimaryBtn}`}
        >
          {isLoading ? "Resetting..." : "Reset password"}
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

export default ResetPassword;
