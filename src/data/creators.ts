import { featuredCourses } from "@/data/courses";
import type { Course } from "@/types/course";

export interface Creator {
  id: string;
  name: string;
  badge: string;
  headline: string;
  avatar: string;
  bio: string[];
  followers: number;
  courses: Course[];
}

export const creators: Creator[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    badge: "Creator",
    headline: "Passionate UI/UX, Web designer",
    avatar: "/assets/creators-page-assets/creator-avatar.png",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    followers: 12,
    courses: featuredCourses,
  },
];

export function getCreator(id: string): Creator | undefined {
  return creators.find((creator) => creator.id === id);
}
