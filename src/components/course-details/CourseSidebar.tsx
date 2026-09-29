"use client";

import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import type { RootState } from "@/redux/store";
import type { CourseDetail } from "@/types/course";
import { App } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiFolder, FiVideo } from "react-icons/fi";
import { PiCertificate, PiChatsCircle } from "react-icons/pi";
import { useSelector } from "react-redux";

const includes = [
  { icon: FiFolder, label: "Learning Resources" },
  { icon: FiVideo, label: "Quality Lesson Videos" },
  { icon: PiCertificate, label: "Certificate of Completion" },
  { icon: PiChatsCircle, label: "Private Consultation" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function CourseSidebar({ detail }: { detail: CourseDetail }) {
  const router = useRouter();
  const { message } = App.useApp();
  const { user } = useSelector((state: RootState) => state.auth);
  const { instructor } = detail;
  const moreVideos = detail.totalLessons - detail.previewLessons.length;

  const enroll = () => {
    if (!user) {
      message.info("Sign in to enroll in this course.");
      router.push("/login");
      return;
    }
    message.success(`You're enrolled in "${detail.headline}" (demo).`);
  };

  return (
    <aside
      aria-label="Course summary"
      className="rounded-[20px] border border-line bg-white p-6 text-ink shadow-[0_24px_60px_-30px_rgba(0,20,90,0.35)] sm:p-8"
    >
      <h2 className="font-heading text-xl font-semibold">
        {detail.totalLessons} Lessons ({detail.totalHours} hours)
      </h2>
      <ol className="mt-5 space-y-4">
        {detail.previewLessons.map((lesson, i) => (
          <li key={lesson.title} className="flex gap-4 text-[15px]">
            <span className="text-ink-muted">{pad(i + 1)}</span>
            <span className="flex-1">{lesson.title}</span>
            <span className="shrink-0 text-sm text-brand">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-ink-soft">{moreVideos} more videos</p>

      <p className="mt-6 text-[15px] leading-7 text-ink-soft">
        {instructor.bio}
      </p>
      <p className="mt-4 flex items-baseline">
        <span className="text-[40px] font-bold leading-none text-brand">
          ${detail.course.price}
        </span>
        <span className="text-sm text-ink-soft">/lifetime</span>
      </p>
      <CustomPrimaryButton block size="lg" onClick={enroll} className="mt-5">
        Enroll Now
      </CustomPrimaryButton>

      <h3 className="mt-7 font-heading text-lg font-semibold">
        This course include
      </h3>
      <ul className="mt-4 space-y-3.5">
        {includes.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 text-[15px] text-ink-muted"
          >
            <Icon aria-hidden className="shrink-0 text-lg text-brand" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-line pt-7">
        <div className="flex items-center gap-4">
          <Image
            src={instructor.avatar}
            alt=""
            width={52}
            height={52}
            className="rounded-full"
          />
          <div>
            <p className="font-heading font-semibold">{instructor.name}</p>
            <p className="text-sm text-ink-soft">{instructor.role}</p>
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-7 text-ink-soft">
          {instructor.bio}
        </p>
        <Link
          href={instructor.profileHref}
          className="mt-4 inline-flex h-9 items-center rounded-full border border-line px-4 text-sm transition-colors hover:border-brand hover:text-brand"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
