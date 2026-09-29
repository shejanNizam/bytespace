import type { Course } from "@/types/course";

/* -------------------------------------------------------------------------- */
/*  Asset paths (files live in /public). Names mirror the Figma layer exports */
/*  so they're easy to trace back to the design.                              */
/* -------------------------------------------------------------------------- */
const dir = "/assets/landing-page-assets";
const banner = `${dir}/banner-assets`;
const cta = `${dir}/unlock-your-potential-as-creator`;
const course = `${dir}/course-images`;

export const homeAssets = {
  logoLight: "/assets/main-logo/main-logo-with-name.png",
  logoMark: "/assets/main-logo/main-logo.png",
  grid: "/assets/auth-page-assets/Group 4.png",
  partnerLogo: `${banner}/Frame (3).png`,
  hero: {
    student: `${banner}/human-image.png`,
    categoryCard: `${banner}/Auto Layout Vertical (1).png`,
    progressCard: `${banner}/Auto Layout Vertical.png`,
    happyStudentsCard: `${banner}/Auto Layout Vertical (2).png`,
    limeSquiggle: `${banner}/Frame (2).png`,
    limeCylinder: `${banner}/Mask Group.png`,
    whiteSquiggleSmall: `${banner}/Frame (1).png`,
    whiteSquiggleLarge: `${banner}/Frame.png`,
    whiteTorus: `${banner}/Cone (1).png`,
    whiteCone: `${banner}/Cone.png`,
  },
  growth: {
    learner: `${dir}/path-to-professional-growth-image.png`,
    creator: `${dir}/create-and-manage-growth-image.png`,
  },
  cta: {
    limeSquiggleTop: `${cta}/Frame.png`,
    whiteSquiggle: `${cta}/Frame (1).png`,
    limeTorus: `${cta}/Cone (1).png`,
    whiteCone: `${cta}/Cone.png`,
    limeCone: `${cta}/Cone (2).png`,
    whiteCylinder: `${cta}/Cone (3).png`,
    limeSquiggleBottom: `${cta}/Frame (2).png`,
  },
} as const;

const studentAvatars = ["one", "two", "three", "four"].map(
  (n) => `${course}/avatar/avatar-${n}.png`,
);

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

export const footerLinkColumns = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses?category=Business" },
    { label: "IT", href: "/courses?category=IT" },
    { label: "Design", href: "/courses?category=Design" },
  ],
  [
    { label: "Development", href: "/courses?category=Development" },
    { label: "Marketing", href: "/courses?category=Marketing" },
    { label: "Photography", href: "/courses?category=Photography" },
    { label: "Finance", href: "/courses?category=Finance" },
    { label: "Sport", href: "/courses?category=Sport" },
  ],
  [
    { label: "Become a Creator", href: "/signup" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

/* -------------------------------------------------------------------------- */
/*  Courses                                                                   */
/* -------------------------------------------------------------------------- */
export const FEATURED_CATEGORY = "Featured";

/** Chip rows exactly as laid out in the design (desktop keeps these breaks). */
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

export const featuredCourses: Course[] = [
  {
    ...courseDefaults,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: `${course}/course-image-one.png`,
    category: "UI/UX Design",
  },
  {
    ...courseDefaults,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: `${course}/course-image-two.png`,
    category: "Graphic Design",
  },
  {
    ...courseDefaults,
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: `${course}/course-image-three.png`,
    category: "Data Science",
  },
  {
    ...courseDefaults,
    id: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: `${course}/course-image-four.png`,
    category: "Productivity",
  },
  {
    ...courseDefaults,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: `${course}/course-image-five.png`,
    category: "Freelance & Entrepreneurship",
  },
  {
    ...courseDefaults,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: `${course}/course-image-six.png`,
    category: "Freelance & Entrepreneurship",
  },
];

/* -------------------------------------------------------------------------- */
/*  Learning paths                                                            */
/* -------------------------------------------------------------------------- */
const pathIcon = (name: string) => `${dir}/learning-path-logos/${name}.png`;

export const learningPaths = [
  { label: "Design", icon: pathIcon("design") },
  { label: "Development", icon: pathIcon("development") },
  { label: "IT & Software", icon: pathIcon("it-and-service") },
  { label: "Business", icon: pathIcon("business") },
  { label: "Marketing", icon: pathIcon("marketing") },
  { label: "Photography", icon: pathIcon("photography") },
];

/* -------------------------------------------------------------------------- */
/*  Growth                                                                    */
/* -------------------------------------------------------------------------- */
export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */
const testimonialAvatar = (n: string) =>
  `${dir}/community-saying/avatar-${n}.png`;

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: testimonialAvatar("one"),
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. This platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: testimonialAvatar("two"),
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: testimonialAvatar("three"),
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
