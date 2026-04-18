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
      "I’m a Software Engineer with over 5 years of experience building high-performance, scalable web applications. I specialize in both frontend and backend technologies, allowing me to deliver complete, end-to-end solutions that are not only technically robust but also aligned with business goals.",
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
      passion: "Building production-ready digital solutions",
      experience: "5+ years",
      available: true,
      stack: ["Next.js", "React", "Ruby on Rails", "Python", "Wordpress"],
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
        { name: "ReactJS" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "SCSS" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "MUI" },
        { name: "d3.js" },
        { name: "Maps / Leaflet.js" },
        { name: "Vue.js" },
        { name: "JavaScript" },
        { name: "jQuery" },
        { name: "ES6" },
        { name: "Redux" },
        { name: "Responsive Design" },
        { name: "SEO Fundamentals" },
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
        { name: "Node.js" },
        { name: "RESTful APIs" },
        { name: "GraphQL" },
        { name: "Sidekiq" },
        { name: "Socket Programming" },
        { name: "Authentication & Authorization" },
      ],
    },
    {
      title: "Databases",
      icon: "[ ]",
      description: "Data modeling, query tuning, and operational reliability.",
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL" },
        { name: "Google Spanner" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "SupaBase" },
        { name: "Redis" },
        { name: "ORM" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "://",
      description: "Infrastructure, deployments, and service orchestration.",
      skills: [
        { name: "Amazon Web Services" },
        { name: "Google Cloud Platform" },
        { name: "Heroku" },
        { name: "Docker and Kubernetes" },
        { name: "Vercel" },
        { name: "DigitalOcean" },
        { name: "Azure" },
        { name: "Docker" },
        { name: "Microservices" },
      ],
    },
    {
      title: "Testing & Quality",
      icon: "✓",
      description:
        "Shifting quality left with test coverage and bug reduction.",
      skills: [
        { name: "Selenium" },
        { name: "Jest" },
        { name: "Rspec" },
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
  ],
  projects: [
    {
      id: "P-006",
      slug: "spcfz-platform",
      title: "Sharjah Publishing City Free Zone",
      category: "Corporate Website",
      summary:
        "A high-performance government free zone website designed for speed, lead generation, and large-scale campaign execution.",
      description:
        "Led development across the official SPC Free Zone platform, shipping custom WordPress solutions, performance improvements, and conversion-focused web experiences during a major growth phase.",
      featuredImage: {
        accent: "from-blue-400/50 via-sky-500/25 to-transparent",
        overlay: "wordpress • seo • cdn",
      },
      images: [
        {
          src: "/images/projects/spcfz/spc-thumbnail (1).webp",
          alt: "SPCFZ homepage hero and navigation screenshot",
          label: "Few Glimpses",
          featured: true,
        },
        {
          src: "/images/projects/spcfz/spc1.webp",
          alt: "SPCFZ extended homepage capture screenshot",
          label: "Extended homepage capture",
        },
        {
          src: "/images/projects/spcfz/spc2.webp",
          alt: "SPCFZ extended calculator capture screenshot",
          label: "Extended calculator capture",
        },
        {
          src: "/images/projects/spcfz/spc 31.webp",
          alt: "SPCFZ PageSpeed Insights desktop performance score screenshot",
          label: "PageSpeed 95 score",
        },
        {
          src: "/images/projects/spcfz/spc 32.webp",
          alt: "SPCFZ Core Web Vitals report screenshot",
          label: "Core Web Vitals report",
        },

        {
          src: "/images/projects/spcfz/spc - 2.webp",
          alt: "SPCFZ business setup landing page full-page screenshot",
          label: "Business setup full page",
        },
        {
          src: "/images/projects/spcfz/spc -3 .webp",
          alt: "SPCFZ cost calculator full-page screenshot",
          label: "Calculator full page",
        },

        {
          src: "/images/projects/spcfz/spc 4.webp",
          alt: "SPCFZ long-form page capture screenshot",
          label: "Long-form page",
        },

        {
          src: "/images/projects/spcfz/spc 5.webp",
          alt: "SPCFZ business activities list and saved activities drawer screenshot",
          label: "Business activities explorer",
        },
        {
          src: "/images/projects/spcfz/spc 6.webp",
          alt: "SPCFZ saved activities lead form modal screenshot",
          label: "Saved activities form",
        },
        {
          src: "/images/projects/spcfz/spc 7.webp",
          alt: "SPCFZ activities list email delivery screenshot",
          label: "Email delivery flow",
        },
        {
          src: "/images/projects/spcfz/spc 19.webp",
          alt: "SPCFZ consultation form screenshot",
          label: "Lead capture form",
        },
        {
          src: "/images/projects/spcfz/spc 10.webp",
          alt: "SPCFZ Ramadan campaign landing page screenshot",
          label: "Campaign landing page",
        },
        {
          src: "/images/projects/spcfz/spc 13.webp",
          alt: "SPCFZ cost calculator business activity selection screenshot",
          label: "Calculator activity step",
        },
        {
          src: "/images/projects/spcfz/spc 14.webp",
          alt: "SPCFZ cost calculator banking option step screenshot",
          label: "Calculator banking step",
        },
        {
          src: "/images/projects/spcfz/spc 15.webp",
          alt: "SPCFZ cost calculator add-on services step screenshot",
          label: "Calculator add-ons step",
        },
        {
          src: "/images/projects/spcfz/spc 16.webp",
          alt: "SPCFZ cost calculator visa quantity step screenshot",
          label: "Calculator visa step",
        },
        {
          src: "/images/projects/spcfz/spc 17.webp",
          alt: "SPCFZ cost calculator estimated cost summary screenshot",
          label: "Calculator summary",
        },
        {
          src: "/images/projects/spcfz/spc 18.webp",
          alt: "SPCFZ cost calculator detailed pricing breakdown screenshot",
          label: "Calculator breakdown",
        },
        {
          src: "/images/projects/spcfz/spc - thumnail 2.webp",
          alt: "Sharjah Publishing City Free Zone exterior brand image",
          label: "Brand visual",
        },
        {
          src: "/images/projects/spcfz/spc 3.webp",
          alt: "SPCFZ homepage full-page capture screenshot",
          label: "Homepage full page",
        },

        {
          src: "/images/projects/spcfz/spc 9.webp",
          alt: "SPCFZ activities list full-page screenshot",
          label: "Activities full page",
        },
        {
          src: "/images/projects/spcfz/spc.webp",
          alt: "SPCFZ extended website archive capture screenshot",
          label: "Extended site capture",
        },
      ],
      tech: [
        "WordPress",
        "PHP",
        "JavaScript",
        "SCSS",
        "AWS",
        "Google Analytics",
        "GTM",
      ],
      impactTags: [
        { label: "95% performance" },
        { label: "Custom plugins" },
        { label: "SEO uplift" },
      ],
      period: "Jun 2023 - Present",
      role: "Web Developer & Analytics Specialist",
      location: "Sharjah, UAE",
      details: [
        "Developed and maintained the official spcfz.ae website using modern frontend and CMS workflows.",
        "Built custom plugins and tailored web modules to support campaign, content, and lead-generation requirements.",
        "Improved performance from roughly 30 to 95 through optimization, caching strategy, and CDN implementation.",
        "Engineered a responsive and API-driven cost calculator using PHP and JavaScript for real-time setup fee and license option estimates.",
        "Supported a major growth phase where platform improvements and better customer engagement aligned with sales growth from 120 to 500 per month.",
        "Delivered landing pages and marketing support assets across email, WhatsApp, and campaign operations.",
      ],
      links: {
        live: "https://spcfz.ae",
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
      id: "P-010",
      slug: "meydan-free-zone",
      title: "Meydan Free Zone",
      category: "Corporate Website",
      summary:
        "A polished free zone web platform focused on trust, conversion, and high-clarity digital journeys for business setup customers.",
      description:
        "Built and maintained the Meydan Free Zone web presence with tailored WordPress development, marketing support, and performance-minded frontend delivery.",
      featuredImage: {
        accent: "from-sky-400/45 via-blue-500/20 to-transparent",
        overlay: "wordpress • campaigns • performance",
      },
      images: [
        {
          src: "/images/projects/meydan-platform.svg",
          alt: "Meydan Free Zone corporate website overview screenshot",
          label: "Meydan platform",
          featured: true,
        },
      ],
      tech: [
        "WordPress",
        "PHP",
        "JavaScript",
        "SCSS",
        "Google Analytics",
        "GTM",
      ],
      impactTags: [
        { label: "Landing pages" },
        { label: "Custom modules" },
        { label: "Lead journeys" },
      ],
      period: "Jun 2023 - Present",
      role: "Web Developer & Analytics Specialist",
      location: "Sharjah, UAE",
      details: [
        "Developed and maintained meydanfz.ae as a conversion-focused corporate platform for free zone business setup journeys.",
        "Built tailored web modules and campaign landing pages to support marketing and customer acquisition efforts.",
        "Applied performance-minded frontend practices and analytics integrations to improve usability and measurement across the site.",
      ],
      links: {
        live: "https://meydanfz.ae",
      },
    },
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
      id: "P-007",
      slug: "publishers-hub",
      title: "Publishers Hub",
      category: "SaaS",
      summary:
        "A publisher operations portal connecting WordPress content with Laravel-powered workflows for books, print requests, and reporting.",
      description:
        "Built a cross-platform publishing workflow product that gave publishers one place to manage books, submit print requests, and review analytics through a Laravel and WordPress integration.",
      featuredImage: {
        accent: "from-cyan-300/45 via-blue-500/20 to-transparent",
        overlay: "laravel • wordpress • dashboards",
      },
      images: [
        {
          src: "/images/projects/publishers-hub.svg",
          alt: "Publishers Hub dashboard and workflow overview",
          label: "Publisher dashboard",
          featured: true,
        },
      ],
      tech: [
        "Laravel",
        "PHP",
        "WordPress",
        "JavaScript",
        "Bootstrap",
        "Power BI",
      ],
      impactTags: [
        { label: "Book workflows" },
        { label: "Print requests" },
        { label: "Embedded analytics" },
      ],
      period: "Jun 2023 - Present",
      role: "Web Developer & Analytics Specialist",
      location: "Sharjah, UAE",
      details: [
        "Developed the Publishers Hub by integrating a Laravel backend with WordPress-driven publishing workflows.",
        "Enabled publishers to manage books, track print requests, and access analytics in one operational dashboard.",
        "Connected content, data, and admin flows so business teams could work faster without hopping between disconnected systems.",
      ],
      links: {},
    },
    {
      id: "P-008",
      slug: "instant-license",
      title: "Instant License",
      category: "SaaS",
      summary:
        "A custom business-license commerce platform that configures packages dynamically from user-selected attributes.",
      description:
        "Created a tailored e-commerce-style licensing journey for SPC Free Zone, allowing users to assemble the right business setup package and move through a clearer conversion flow.",
      featuredImage: {
        accent: "from-indigo-400/45 via-blue-500/20 to-transparent",
        overlay: "licenses • ecommerce • workflows",
      },
      images: [
        {
          src: "/images/projects/instant-license.svg",
          alt: "Instant License package selection and checkout flow",
          label: "License configurator",
          featured: true,
        },
      ],
      tech: ["PHP", "Laravel", "JavaScript", "WordPress", "Zoho One", "Make"],
      impactTags: [
        { label: "License configurator" },
        { label: "Conversion flow" },
        { label: "CRM routing" },
      ],
      period: "Jun 2023 - Present",
      role: "Web Developer & Analytics Specialist",
      location: "Sharjah, UAE",
      details: [
        "Developed a custom e-commerce platform that lets users purchase tailored business licenses based on selected attributes.",
        "Integrated business workflows, lead routing, and downstream ops with CRM and automation tooling including Zoho, Zapier, and Make.",
        "Focused the experience on reducing friction for customers while supporting internal sales and onboarding teams.",
      ],
      links: {
        live: "https://instantlicense.spcfz.ae/",
      },
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
