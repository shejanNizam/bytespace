import type { Course, CourseDetail, CourseLevel } from "@/types/course";

const img = "/assets/landing-page-assets/course-images";
const detailImg = "/assets/course-details-page-assets";

/* -------------------------------------------------------------------------- */
/*  Categories                                                                */
/* -------------------------------------------------------------------------- */
export const FEATURED_CATEGORY = "Featured";

/** Chip rows exactly as laid out on the home page design. */
export const courseCategoryRows = [
  [
    FEATURED_CATEGORY,
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

/** Flat list for single-row chip bars and dropdowns. */
export const courseCategories = courseCategoryRows.flat();

export const courseLevels: CourseLevel[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

/* -------------------------------------------------------------------------- */
/*  Catalog                                                                   */
/* -------------------------------------------------------------------------- */
const studentAvatars = ["one", "two", "three", "four"].map(
  (n) => `${img}/avatar/avatar-${n}.png`,
);

const courseDefaults = {
  creator: "purepearl studio",
  level: "Beginner",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  price: 25,
  studentAvatars,
  moreStudents: 26,
} as const;

/** The six course designs from Figma, in their home-page order. */
export const featuredCourses: Course[] = [
  {
    ...courseDefaults,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: `${img}/course-image-one.png`,
    categories: ["UI/UX Design", "Design", "Digital Illustration"],
  },
  {
    ...courseDefaults,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: `${img}/course-image-two.png`,
    categories: ["Graphic Design", "Design", "Drawing & Painting", "Crafts"],
  },
  {
    ...courseDefaults,
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: `${img}/course-image-three.png`,
    categories: [
      "Data Science",
      "IT & Software",
      "Development",
      "Web Development",
    ],
  },
  {
    ...courseDefaults,
    id: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: `${img}/course-image-four.png`,
    categories: ["Productivity", "Business"],
  },
  {
    ...courseDefaults,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: `${img}/course-image-five.png`,
    categories: [
      "Freelance & Entrepreneurship",
      "Business",
      "Finance",
      "Social Media",
    ],
  },
  {
    ...courseDefaults,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: `${img}/course-image-six.png`,
    categories: [
      "Freelance & Entrepreneurship",
      "Business",
      "Marketing",
      "Creative Marketing",
    ],
  },
];

/*
 * Demo catalog: the search page design paginates 18 cards over 5 pages using
 * the same six course designs, so each one is repeated as a series with
 * varied level, price and rating to make filtering and sorting meaningful.
 */
const SERIES_PER_COURSE = 15;
const levels = courseLevels;
const prices = [25, 29, 19, 35, 45, 39, 22, 49];
const ratings = [4.5, 4.8, 4.6, 4.9, 4.7, 4.4, 4.3];

export const courseCatalog: Course[] = Array.from(
  { length: SERIES_PER_COURSE },
  (_, round) =>
    featuredCourses.map((course, i) =>
      round === 0
        ? course
        : {
            ...course,
            id: `${course.id}-${round + 1}`,
            level: levels[(round + i) % levels.length],
            price: prices[(round * 3 + i) % prices.length],
            rating: ratings[(round + i * 2) % ratings.length],
            lessons: course.lessons + ((round * 5 + i) % 12),
            comments: course.comments + round * 7,
          },
    ),
).flat();

/** Chip categories plus any other category a course is listed under. */
export const browseCategories = [
  ...new Set([
    ...courseCategories,
    ...featuredCourses.flatMap((course) => course.categories),
  ]),
];

export function getCourse(id: string): Course | undefined {
  return courseCatalog.find((course) => course.id === id);
}

/* -------------------------------------------------------------------------- */
/*  Course details                                                            */
/* -------------------------------------------------------------------------- */
const instructor = {
  name: "PurePearl Studio",
  role: "Professional Creator",
  avatar: `${detailImg}/avatar-one.png`,
  bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  profileHref: "/creators/purepearl-studio",
};

/* Headline + tagline per course design; the details page copy is shared. */
const headlines: Record<string, { headline: string; tagline: string }> = {
  "learn-figma-from-basic": {
    headline: "Learn Figma from Basic: Design Your First Interface",
    tagline: "From Blank Canvas to Polished Prototype, Step by Step",
  },
  "build-digital-asset": {
    headline: "Build Digital Asset: A Comprehensive Guide",
    tagline: "Unlock the Power of Digital Creation with Expert Guidance",
  },
  "the-power-of-big-data": {
    headline: "The Power of Big Data: From Raw Data to Insight",
    tagline: "Turn Complex Datasets into Clear, Confident Decisions",
  },
  "balancing-productivity-and-wellbeing": {
    headline: "Balancing Productivity and Wellbeing",
    tagline: "Do Your Best Work Without Burning Out",
  },
  "mastering-money-management": {
    headline: "Mastering Money Management for Creators",
    tagline: "Budget, Price and Grow Your Income with Confidence",
  },
  "from-idea-to-startup-success": {
    headline: "From Idea to Startup Success",
    tagline: "Validate, Build and Launch Your Business Idea",
  },
};

const baseId = (id: string) => id.replace(/-\d+$/, "");

export function getCourseDetail(id: string): CourseDetail | undefined {
  const course = getCourse(id);
  if (!course) return undefined;
  const { headline, tagline } = headlines[baseId(id)] ?? {
    headline: course.title,
    tagline: "",
  };

  return {
    course,
    headline,
    tagline,
    reviewCount: 172,
    studentCount: 199,
    totalLessons: 112,
    totalHours: 24,
    previewLessons: [
      { title: "Introduction to Digital Assets", duration: "12 mins" },
      { title: "Design Principles for Impacts", duration: "21 mins" },
      {
        title: "Advanced Techniques in Digital Creation",
        duration: "18 mins",
      },
    ],
    previewVideo: `${detailImg}/course-details-page-banner-video-image.png`,
    instructor,
    description: [
      `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "${headline}." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: ["one", "two", "three", "four"].map(
      (n) => `${detailImg}/sneak-peak-image-${n}.png`,
    ),
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    modulesIntro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    modules: [
      {
        title: "Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    lessonContent:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressIntro:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progress: 55,
    reviewsIntro: `Discover what our learners have to say about their experience with "${headline}." Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.`,
    averageRating: 4.7,
    ratingBreakdown: [
      { stars: 5, count: 780 },
      { stars: 4, count: 120 },
      { stars: 3, count: 31 },
      { stars: 2, count: 12 },
      { stars: 1, count: 16 },
    ],
    reviews: [
      {
        id: "r1",
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: `${detailImg}/avatar-two.png`,
        rating: 5,
        postedAgo: "a year ago",
        body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        id: "r2",
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: `${detailImg}/avatar-three.png`,
        rating: 5,
        postedAgo: "a year ago",
        body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "r3",
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: `${detailImg}/avatar-four.png`,
        rating: 5,
        postedAgo: "a year ago",
        body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "r4",
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: `${detailImg}/avatar-five.png`,
        rating: 5,
        postedAgo: "a year ago",
        body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  };
}
