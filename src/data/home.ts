/* -------------------------------------------------------------------------- */
/*  Asset paths (files live in /public). Names mirror the Figma layer exports */
/*  so they're easy to trace back to the design.                              */
/* -------------------------------------------------------------------------- */
const dir = "/assets/landing-page-assets";
const banner = `${dir}/banner-assets`;
const cta = `${dir}/unlock-your-potential-as-creator`;

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
    { label: "IT", href: "/courses?category=IT%20%26%20Software" },
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
