export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  image: string;
  creator: string;
  /** Every category the course is listed under; the first is its primary one. */
  categories: string[];
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

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  profileHref: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  postedAgo: string;
  body: string;
}

/** Everything the course details page needs beyond the card data. */
export interface CourseDetail {
  course: Course;
  headline: string;
  tagline: string;
  reviewCount: number;
  studentCount: number;
  totalLessons: number;
  totalHours: number;
  previewLessons: { title: string; duration: string }[];
  previewVideo: string;
  instructor: Instructor;
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modulesIntro: string;
  modules: CourseModule[];
  lessonContent: string;
  progressIntro: string;
  /** Learner's completion, 0–100. */
  progress: number;
  reviewsIntro: string;
  averageRating: number;
  /** Review counts keyed by star value, 5 → 1. */
  ratingBreakdown: { stars: number; count: number }[];
  reviews: CourseReview[];
}
