export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  image: string;
  creator: string;
  category: string;
  level: CourseLevel;
  rating: number;
  lessons: number;
  /** Human-readable total length, e.g. "2 hours 16 mins". */
  duration: string;
  comments: number;
  /** Price in USD for lifetime access. */
  price: number;
  /** Avatar URLs of a few enrolled students. */
  studentAvatars: string[];
  /** Enrolled students beyond the avatars shown. */
  moreStudents: number;
}
