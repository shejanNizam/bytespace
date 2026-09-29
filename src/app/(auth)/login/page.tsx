"use client";

import AuthHeader, {
  authLabel,
  authPrimaryBtn,
} from "@/components/auth/AuthHeader";
import { LoginFormValues } from "@/types/auth";
import { App, Button, Checkbox, Divider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

// UI-only Google button. Google sign-in requires a backend to verify the token,
// so this is a visual placeholder — wire up OAuth here when you have an API.
const GoogleLoginButton: React.FC = () => {
  const { message } = App.useApp();
  return (
    <Button
      size="large"
      block
      icon={<FcGoogle size={20} />}
      onClick={() =>
        message.info("Google sign-in needs a backend — this is a UI demo.")
      }
      className="h-12! rounded-xl! font-medium! border-slate-200! text-slate-700! dark:border-white/10! dark:text-slate-200! dark:bg-white/5!"
    >
      Continue with Google
    </Button>
  );
};

const Login: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm<LoginFormValues>();
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: LoginFormValues): void => {
    // Frontend-only demo: no API call. Simulate a successful login.
    void values;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Logged in (demo).");
      router.push("/user-dashboard");
    }, 500);
  };

  return (
    <>
      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue to your dashboard."
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item<LoginFormValues>
          label={<span className={authLabel}>Email</span>}
          name="email"
          rules={[
            { type: "email", message: "Enter a valid email" },
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

        <Form.Item<LoginFormValues>
          label={<span className={authLabel}>Password</span>}
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password
            size="large"
            prefix={<FiLock className="mr-1 text-slate-400" />}
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </Form.Item>

        <div className="-mt-1 mb-5 flex items-center justify-between">
          <Form.Item<LoginFormValues>
            name="remember"
            valuePropName="checked"
            className="mb-0!"
          >
            <Checkbox className="text-sm text-slate-600 dark:text-slate-300">
              Remember me
            </Checkbox>
          </Form.Item>
          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          loading={isLoading}
          className={authPrimaryBtn}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>

        <Divider className="my-6!">
          <span className="text-xs text-slate-400">OR</span>
        </Divider>

        <GoogleLoginButton />

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          {"Don't have an account? "}
          <Link
            href="/signup"
            className="font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Create account
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
