"use client";

import AuthHeader, {
  authLabel,
  authPrimaryBtn,
} from "@/components/auth/AuthHeader";
import { SignupFormValues } from "@/types/auth";
import { App, Button, Divider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
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

const Signup: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm<SignupFormValues>();
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: SignupFormValues): void => {
    // Frontend-only demo: no API call. Simulate a successful signup.
    void values;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Account created (demo). Please log in.");
      router.push("/login");
    }, 500);
  };

  return (
    <>
      <AuthHeader
        title="Create your account"
        subtitle="Start building in minutes — no credit card required."
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item<SignupFormValues>
          label={<span className={authLabel}>Full name</span>}
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input
            size="large"
            prefix={<FiUser className="mr-1 text-slate-400" />}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </Form.Item>

        <Form.Item<SignupFormValues>
          label={<span className={authLabel}>Email</span>}
          name="email"
          rules={[
            { type: "email", message: "Invalid email" },
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

        <Form.Item<SignupFormValues>
          label={<span className={authLabel}>Password</span>}
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Min 6 characters" },
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            prefix={<FiLock className="mr-1 text-slate-400" />}
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item<SignupFormValues>
          label={<span className={authLabel}>Confirm password</span>}
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value)
                  return Promise.resolve();
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            prefix={<FiLock className="mr-1 text-slate-400" />}
            placeholder="Re-enter your password"
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
          {isLoading ? "Creating account..." : "Create account"}
        </Button>

        <Divider className="my-6!">
          <span className="text-xs text-slate-400">OR</span>
        </Divider>

        <GoogleLoginButton />

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Sign in
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Signup;
