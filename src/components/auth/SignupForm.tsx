"use client";

import { authPrimaryBtn } from "@/components/auth/AuthHeader";
import { SignupFormValues } from "@/types/auth";
import { App, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignupFields = Pick<SignupFormValues, "name" | "email" | "password">;

export default function SignupForm() {
  const router = useRouter();
  const [form] = Form.useForm<SignupFields>();
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: SignupFields): void => {
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
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item<SignupFields>
        label="Full Name"
        name="name"
        rules={[
          { required: true, whitespace: true, message: "Name is required" },
        ]}
      >
        <Input size="large" placeholder="Jamie Davis" autoComplete="name" />
      </Form.Item>

      <Form.Item<SignupFields>
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

      <Form.Item<SignupFields>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Password is required" },
          { min: 6, message: "Min 6 characters" },
        ]}
      >
        <Input.Password
          size="large"
          placeholder="********"
          autoComplete="new-password"
        />
      </Form.Item>

      <div className="mt-1.5 flex justify-end">
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          className={authPrimaryBtn}
        >
          {isLoading ? "Creating..." : "Continue"}
        </Button>
      </div>
    </Form>
  );
}
