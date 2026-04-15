export type SocialLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type PersonalProfile = {
  name: string;
  title: string;
  intro: string;
  availability: string;
  location: string;
  experienceYears: number;
  companiesServed: number;
  projectsCompleted: number;
  imageAlt: string;
  detailCommand: string;
  detailJson: Record<string, string | number | boolean | string[]>;
  socialLinks: SocialLink[];
};

export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
};

export type ProjectTag = {
  label: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  featured?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category:
    | "SaaS"
    | "Corporate Website"
    | "AI Platform"
    | "HealthTech"
    | "Analytics";
  summary: string;
  description: string;
  featuredImage: {
    accent: string;
    overlay: string;
  };
  images: ProjectImage[];
  tech: string[];
  impactTags: ProjectTag[];
  period: string;
  role: string;
  location: string;
  details: string[];
  links: {
    live?: string;
    source?: string;
  };
};

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  summary: string;
  subjects: string[];
};

export type ContactFormFields = {
  name: string;
  email: string;
  projectSummary: string;
  budget: string;
  timeline: string;
};

export const portfolioData: {
  profile: PersonalProfile;
  heroStats: HeroStat[];
  skills: SkillCategory[];
  projects: Project[];
  education: EducationEntry[];
} = {
  profile: {
    name: "Tayyab Ejaz",
    title: "Full-Stack Engineer Building Scalable SaaS & Data-Driven Platforms",
    intro:
      "I design and ship reliable web products with a backend-first mindset, polished frontend systems, and a bias toward measurable performance wins. My work spans SaaS tools, healthcare workflows, AI-adjacent products, and business platforms.",
    availability: "Open to remote product, SaaS, and platform engineering work",
    location: "Lahore, Pakistan",
    experienceYears: 5,
    companiesServed: 5,
    projectsCompleted: 24,
    imageAlt: "Portrait placeholder for Tayyab",
    detailCommand: "cat portfolio.json",
    detailJson: {
      name: "Tayyab",
      role: "Full-Stack Engineer",
      focus: ["SaaS Platforms", "APIs", "Performance", "Product Advocate"],
      stack: ["Next.js", "React", "Ruby on Rails", "Python", "Wordpress"],
      experience: "5+ years",
      available: true,
      passion: "Building production-ready digital products",
    },
    socialLinks: [
      { label: "GitHub", href: "https://github.com/Tayyab-Ejaz/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tayyab-ejaz-soft-eng/",
      },
    ],
  },
  heroStats: [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Companies Served", value: 4, suffix: "" },
    { label: "Years Experience", value: 5, suffix: "+" },
  ],
  skills: [
    {
      title: "Frontend",
      icon: "</>",
      description: "Interfaces that stay fast, responsive, and product-minded.",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "SCSS" },
        { name: "Bootstrap" },
        { name: "MUI" },
        { name: "JavaScript" },
        { name: "Vue.js" },
        { name: "jQuery" },
        { name: "ES6" },
        { name: "Redux" },
        { name: "Responsive Design" },
        { name: "d3.js" },
        { name: "Maps / Leaflet.js" },
      ],
    },
    {
      title: "Backend",
      icon: "{ }",
      description:
        "APIs, background jobs, auth flows, and production app logic.",
      skills: [
        { name: "Ruby on Rails" },
        { name: "Python" },
        { name: "Flask API" },
        { name: "PHP" },
        { name: "RESTful APIs" },
        { name: "GraphQL" },
        { name: "Sidekiq" },
        { name: "Socket Programming" },
        { name: "Node.js" },
      ],
    },
    {
      title: "Databases",
      icon: "[ ]",
      description: "Data modeling, query tuning, and operational reliability.",
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "ORM" },
        { name: "Redis" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "://",
      description: "Infrastructure, deployments, and service orchestration.",
      skills: [
        { name: "AWS" },
        { name: "Heroku" },
        { name: "DigitalOcean" },
        { name: "Azure" },
        { name: "Docker" },
        { name: "Microservices" },
        { name: "DevOps" },
      ],
    },
    {
      title: "Testing & Quality",
      icon: "✓",
      description:
        "Shifting quality left with test coverage and bug reduction.",
      skills: [
        { name: "Jest" },
        { name: "Rspec" },
        { name: "Selenium" },
        { name: "Unit Testing" },
        { name: "AB Testing" },
        { name: "Black-box Testing" },
        { name: "Debugging" },
      ],
    },
    {
      title: "Project & Delivery",
      icon: "::",
      description:
        "Shipping across cross-functional teams and delivery cycles.",
      skills: [
        { name: "Jira" },
        { name: "ClickUp" },
        { name: "Trello" },
        { name: "Agile Methodology" },
        { name: "SDLC" },
        { name: "SaaS Development" },
        { name: "CMS" },
      ],
    },
    {
      title: "Version Control",
      icon: "git",
      description: "Branching, collaboration, and release discipline.",
      skills: [
        { name: "Git" },
        { name: "SVN" },
        { name: "GitHub" },
        { name: "BitBucket" },
      ],
    },
    {
      title: "Engineering Practices",
      icon: "++",
      description:
        "Architecture, API design, and sustainable product execution.",
      skills: [
        { name: "RESTful API Design" },
        { name: "Testing Frameworks" },
        { name: "Product Debugging" },
        { name: "Performance Optimization" },
        { name: "Reusable UI Systems" },
      ],
    },
  ],
  projects: [
    {
      id: "P-001",
      slug: "mytoolkitt",
      title: "MyToolkitt.com",
      category: "SaaS",
      summary:
        "A modular multi-tool SaaS platform with analytics, auth, and scalable app architecture.",
      description:
        "Built a modern Next.js SaaS product with multiple micro-app style tools, secure user flows, and a reusable UI foundation designed for growth.",
      featuredImage: {
        accent: "from-cyan-400/50 via-sky-500/20 to-transparent",
        overlay: "tracking • auth • seo",
      },
      images: [
        {
          src: "/images/projects/mytoolkitt-home.svg",
          alt: "MyToolkitt homepage screenshot",
          label: "Homepage",
          featured: true,
        },
        {
          src: "/images/projects/biomarking1.webp",
          alt: "MyToolkitt homepage screenshot",
          label: "Homepage",
          featured: true,
        },
      ],
      tech: [
        "Next.js 16",
        "TypeScript",
        "Prisma",
        "Clerk",
        "Tailwind",
        "shadcn/ui",
        "Zod",
      ],
      impactTags: [
        { label: "Multi-tool SaaS" },
        { label: "Realtime analytics" },
        { label: "SEO architecture" },
      ],
      period: "Recent",
      role: "Full-Stack Developer",
      location: "Remote",
      details: [
        "Built a modular SaaS platform using Next.js 16 App Router, TypeScript, Prisma, and Clerk v6.",
        "Delivered tools such as a WhatsApp CTA Tracker and URL Shortener with real-time analytics.",
        "Implemented secure authentication and authorization via Clerk middleware across private dashboards and API routes.",
        "Designed reusable UI systems with Tailwind and shadcn/ui for consistency across forms, cards, and layouts.",
        "Created backend APIs with Prisma ORM, including validated payloads, click tracking, and token claim flows.",
        "Structured the codebase to support multiple micro-apps within one Next.js project.",
      ],
      links: {
        live: "https://mytoolkitt.com",
      },
    },
    {
      id: "P-002",
      slug: "biomark",
      title: "Biomark",
      category: "HealthTech",
      summary:
        "A collaborative healthcare platform connecting doctors, labs, and patients in one workflow.",
      description:
        "Enhanced a medical collaboration platform with e-ordering, background processing, and commerce integrations for medical product delivery.",
      featuredImage: {
        accent: "from-emerald-400/45 via-cyan-500/20 to-transparent",
        overlay: "hl7 • sidekiq • shopify",
      },
      images: [
        {
          src: "/images/projects/biomarking1.webp",
          alt: "Biomark doctor platform screenshot",
          label: "Doctor workflow",
          featured: true,
        },
      ],
      tech: [
        "ReactJS",
        "Ruby on Rails",
        "Shopify API",
        "AWS",
        "Sidekiq",
        "Microservices",
      ],
      impactTags: [
        { label: "Lab ordering" },
        { label: "HL7 ingestion" },
        { label: "Shopify integration" },
      ],
      period: "May 2022 - May 2023",
      role: "Full-Stack Developer",
      location: "Singapore, Remote",
      details: [
        "Enhanced existing modules and added new ones to the healthcare application.",
        "Implemented a lab tests e-ordering module using microservices.",
        "Worked extensively on background workers to capture data from HL7 files.",
        "Integrated the doctor platform with Shopify to power an online medicine store.",
        "Refactored legacy projects to the latest Ruby version and updated libraries for maintenance and performance.",
        "Used Jira for issue tracking, project planning, and collaboration.",
      ],
      links: {
        live: "https://www.biomarking.com/products/doctor-platform/",
      },
    },
    {
      id: "P-003",
      slug: "as-one-management-xquic",
      title: "As One Management / Xquic",
      category: "Corporate Website",
      summary:
        "A hotel management and travel analysis platform focused on performance, contracts, and operations.",
      description:
        "Improved reliability, API performance, testing coverage, and large-data processing for a B2B hotel management system.",
      featuredImage: {
        accent: "from-fuchsia-400/45 via-violet-500/20 to-transparent",
        overlay: "search • rspec • s3",
      },
      images: [
        {
          src: "/images/projects/xquic1.webp",
          alt: "As One Management and Xquic operations dashboard screenshot",
          label: "Operations dashboard",
          featured: true,
        },
        {
          src: "/images/projects/xquic2.png",
          alt: "As One Management and Xquic operations dashboard screenshot",
          label: "Operations dashboard",
          featured: false,
        },
        {
          src: "/images/projects/xquic3.png",
          alt: "As One Management and Xquic operations dashboard screenshot",
          label: "Operations dashboard",
          featured: false,
        },
        {
          src: "/images/projects/xquic4.png",
          alt: "As One Management and Xquic operations dashboard screenshot",
          label: "Operations dashboard",
          featured: false,
        },
         {
          src: "/images/projects/xquic5.webp",
          alt: "As One Management and Xquic operations dashboard screenshot",
          label: "Operations dashboard",
          featured: false,
        },
      ],
      tech: [
        "Ruby on Rails",
        "Sidekiq",
        "Heroku",
        "JavaScript",
        "jQuery",
        "Google Cloud APIs",
        "Elasticsearch",
      ],
      impactTags: [
        { label: "API speedup" },
        { label: "OTA optimization" },
        { label: "PDF/XML parsing" },
      ],
      period: "Dec 2020 - Apr 2022",
      role: "Full-Stack Developer",
      location: "USA, Remote",
      details: [
        "Designed and implemented new features for a B2B hotel management system.",
        "Automated test coverage in Rspec and Jenkins.",
        "Improved OTA algorithm quality, reducing bug rate from 34% to 11%.",
        "Cut API response time from 1800ms to 300ms using Elasticsearch.",
        "Solved query optimization and database bottleneck issues.",
        "Built interfaces for uploading and managing S3 files and parsed complex PDF/XML sources.",
      ],
      links: {},
    },
    {
      id: "P-004",
      slug: "pianofor-ai",
      title: "Pianofor.ai",
      category: "AI Platform",
      summary:
        "A music intelligence product for analytics on musician input and AI-driven generation workflows.",
      description:
        "Contributed to an AI-adjacent music platform with custom upload flows, parsing pipelines, and product exploration around generated music.",
      featuredImage: {
        accent: "from-amber-300/45 via-orange-500/20 to-transparent",
        overlay: "midi • upload • analytics",
      },
      images: [
        {
          src: "/images/projects/pianofor-analytics.svg",
          alt: "Pianofor AI analytics and upload workflow screenshot",
          label: "Analytics view",
          featured: true,
        },
      ],
      tech: [
        "Ruby on Rails",
        "JavaScript",
        "DropzoneJS",
        "Postgres",
        "DigitalOcean",
      ],
      impactTags: [
        { label: "Custom uploader" },
        { label: "MIDI parsing" },
        { label: "Music analytics" },
      ],
      period: "Nov 2022 - Jun 2023",
      role: "Full-Stack Developer",
      location: "Remote",
      details: [
        "Created a custom file uploader with Dropzone for a smoother user workflow.",
        "Used MIDI parsing to extract meaningful music features.",
        "Helped support the product's dual goals of analytics and AI-based music generation.",
      ],
      links: {
        live: "https://pianofor.ai",
      },
    },
    {
      id: "P-005",
      slug: "optimal-biz-value",
      title: "Optimal Biz Value",
      category: "Analytics",
      summary:
        "A valuation estimator for companies powered by a React frontend and AWS Lambda functions.",
      description:
        "Built an estimation workflow that turned business inputs into clear valuation outputs using a modern frontend and serverless compute.",
      featuredImage: {
        accent: "from-blue-400/45 via-indigo-500/20 to-transparent",
        overlay: "valuation • lambda • redux",
      },
      images: [
        {
          src: "/images/projects/optimal-biz-value.svg",
          alt: "Optimal Biz Value valuation estimator screenshot",
          label: "Estimator flow",
          featured: true,
        },
      ],
      tech: ["React", "Redux Toolkit", "Node.js", "AWS Lambda"],
      impactTags: [
        { label: "Serverless flow" },
        { label: "Business valuation" },
        { label: "Interactive UX" },
      ],
      period: "Jan 2022 - Feb 2022",
      role: "Frontend / Full-Stack Developer",
      location: "Remote",
      details: [
        "Built a valuation web app with React and AWS Lambda functions.",
        "Created a user flow that translates company inputs into business value estimates.",
        "Shipped a lightweight but focused product experience for quick analysis.",
      ],
      links: {
        live: "https://optimal-biz-val.vercel.app",
      },
    },
  ],
  education: [
    {
      institution: "Punjab University College of Information Technology",
      degree: "Bachelor of Computer Science",
      period: "June 2017 - July 2021",
      location: "Lahore, Pakistan",
      summary:
        "Built a strong systems and application foundation with coursework spanning software engineering, data, mobile, and operating systems.",
      subjects: [
        "Object Oriented Programming",
        "Data Structures",
        "Database Systems",
        "Enterprise Application Development",
        "Mobile Computing",
        "Operating Systems",
        "Artificial Intelligence and Machine Learning",
      ],
    },
  ],
};
