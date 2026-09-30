"use client";

import { authPrimaryBtn } from "@/components/auth/AuthHeader";
import SocialLogin from "@/components/auth/SocialLogin";
import { LoginFormValues } from "@/types/auth";
import { App, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
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
      router.push("/");
    }, 500);
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item<LoginFormValues>
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Enter a valid email" },
            { required: true, message: "Email is required" },
          ]}
        >
          <Input
            size="large"
            placeholder="designer@example.com"
            autoComplete="email"
          />
        </Form.Item>

        <Form.Item<LoginFormValues>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password
            size="large"
            placeholder="********"
            autoComplete="current-password"
          />
        </Form.Item>

        <div className="mt-1.5 flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className={authPrimaryBtn}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </div>
      </Form>

      <div className="mt-12 flex items-center gap-4 lg:mt-[88px]">
        <span className="h-px flex-1 bg-line" />
        <span className="text-base text-[#9a9ca3]">or</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-10 lg:mt-[42px]">
        <SocialLogin />
      </div>
    </>
  );
}
