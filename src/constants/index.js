export const MENU_ITEMS = [
  {
    title: "Profile.tsx",
    label: "Profile",
    link: "/",
    icon: "react",
    desc: "Developer overview, bio & work history"
  },
  {
    title: "Experience.log",
    label: "Experience",
    link: "/experience",
    icon: "log",
    desc: "Professional career history & enterprise projects"
  },
  {
    title: "Skills.ts",
    label: "Skills",
    link: "/skills",
    icon: "ts",
    desc: "Tech stack & architecture competencies"
  },
  {
    title: "Projects.json",
    label: "Projects",
    link: "/projects",
    icon: "json",
    desc: "Full-stack apps & featured repositories"
  },
  {
    title: "Contact.sh",
    label: "Contact",
    link: "/contact",
    icon: "bash",
    desc: "Send message, email & socials"
  }
];

export const SOCIAL_LINKS = {
  github: "",
  email: "mailto:joshlorielsoo@gmail.com",
  phone: "tel:+639369032114",
  rawPhone: "+63 936 903 2114",
  rawEmail: "joshlorielsoo@gmail.com",
  linkedin: "https://linkedin.com",
  location: "Iloilo City, Philippines"
};

export const PROFILE = {
  name: "Josh Loriel L. So",
  role: "Software Engineer — Frontend & Full-Stack Web Development",
  status: "🟢 Available for Opportunities & Collaborations",
  location: "Iloilo City, Philippines",
  email: "joshlorielsoo@gmail.com",
  phone: "+63 936 903 2114",
  experienceYears: "2+ Years (Enterprise & International)",
  focus: "Modern Frontend Development, User Interface Optimization & Full-Stack Web Architecture",
  summary:
    "Software Engineer focused on modern frontend development, user interface optimization, and full-stack web architecture across enterprise and public-sector environments. Currently building full-stack features for smart-factory enterprise platforms at EasyGeo Co. Ltd., with prior experience delivering client-side production web applications at KaChick and municipal document tracking and emergency reporting systems for the Iloilo City Government. Combines strong proficiency in modern frontend technologies with a solid foundation in backend architecture, relational and cloud databases, and system integration.",
  highlights: [
    { label: "Enterprise Systems", desc: "WorkStudio smart factory platform (ERP, MES, SPC, POP, PLM, SCM) at EasyGeo Co. Ltd." },
    { label: "International Startups", desc: "Production frontend apps (slom.ai, trackbill.io, Photospots) at KaChick HK" },
    { label: "Gov Digital Transformation", desc: "Centralized Document Tracking, Emergency Patient Reporting & Demographics DB in Iloilo City" }
  ],
  education: {
    institution: "PHINMA University of Iloilo",
    address: "Rizal Street, Iloilo City, Iloilo, 5000",
    degree: "Bachelor of Science in Information Technology",
    graduated: "2024",
    capstone: "Jianzin E-Commerce Website (Advisor: Ryan Valeriano): Developed a web-based e-commerce platform to facilitate online customer transactions, showcase product catalogs, and streamline order management.",
    certifications: [
      "Computer System Configuration",
      "Network Setup & Diagnostics",
      "Server Maintenance & Administration"
    ]
  }
};

export const EXPERIENCES = [
  {
    id: "easygeo",
    company: "EasyGeo Co. Ltd.",
    role: "Full-Stack Engineer",
    companyType: "Korean Technology Company",
    period: "Jan 2025 – Present",
    badge: "Enterprise",
    highlights: [
      "Drive the full-stack development of the WorkStudio web platform, an enterprise system supporting smart-factory operational frameworks including ERP, MES, SPC, POP, PLM, and SCM.",
      "Engineer and integrate frontend user interfaces and backend application features to support scalable manufacturing workflows and cross-module system integration."
    ],
    techStack: ["React.js", "Java", "Spring", "PostgreSQL", "REST APIs", "Smart Factory / MES"]
  },
  {
    id: "kachick",
    company: "KaChick",
    role: "Software Engineering Intern",
    companyType: "Hong Kong–Based Startup",
    period: "2024",
    badge: "Startup / Global",
    highlights: [
      "Contributed to the client-side development and frontend engineering of multiple production web platforms, including trackbill.io, Solomon (slom.ai), and KaChick Photospots.",
      "Focused on user interface implementation, responsive frontend optimization, and interactive client-side functionality across web products."
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "AI Integration", "Cross-Browser UX"]
  },
  {
    id: "iloilo-gov",
    company: "Iloilo City Government",
    role: "Junior Programmer",
    companyType: "Iloilo City, Philippines",
    period: "2023 – 2024",
    badge: "Public Sector",
    highlights: [
      "Contributed to the development, maintenance, and continuous enhancement of a municipal Document Tracking Web Application to streamline the routing and monitoring of official records while resolving operational issues promptly.",
      "Collaborated on creating an Emergency Patient Report System to improve incident documentation workflows and the handling of emergency cases.",
      "Developed the Iloilo City Informal Settlers Database to digitize, centralize, and manage community housing and demographic records.",
      "Delivered technical support and end-user training across municipal web applications to ensure smooth system adoption and effective daily utilization."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Government IT Systems"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    description: "Responsive, optimized user interfaces & modern client architecture",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "js", tag: "Core" },
      { name: "TypeScript", level: "Advanced", icon: "ts", tag: "Typed" },
      { name: "React.js", level: "Advanced", icon: "react", tag: "Framework" },
      { name: "Next.js", level: "Advanced", icon: "nextjs", tag: "Full-Stack" },
      { name: "HTML5", level: "Advanced", icon: "html", tag: "Markup" },
      { name: "CSS3", level: "Advanced", icon: "css", tag: "Styling" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind", tag: "Styling" },
      { name: "Bootstrap", level: "Advanced", icon: "bootstrap", tag: "UI Library" },
      { name: "jQuery", level: "Proficient", icon: "jquery", tag: "DOM" }
    ]
  },
  {
    category: "Backend & AI Integration",
    description: "Enterprise services, API design & conversational AI capabilities",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "nodejs", tag: "Runtime" },
      { name: "PHP", level: "Advanced", icon: "php", tag: "Backend" },
      { name: "Java", level: "Advanced", icon: "java", tag: "Backend/OOP" },
      { name: "Spring", level: "Advanced", icon: "spring", tag: "Enterprise" },
      { name: "AI API Integration", level: "Advanced", icon: "ai", tag: "LLM" },
      { name: "AI-Powered Chatbot Development", level: "Advanced", icon: "ai", tag: "Conversational" }
    ]
  },
  {
    category: "Databases & BaaS",
    description: "Data modeling, relational integrity, and serverless backends",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "postgres", tag: "Relational" },
      { name: "MySQL", level: "Advanced", icon: "mysql", tag: "Relational" },
      { name: "MSSQL", level: "Proficient", icon: "mssql", tag: "Enterprise" },
      { name: "Firebase", level: "Proficient", icon: "firebase", tag: "Realtime" },
      { name: "Supabase", level: "Proficient", icon: "supabase", tag: "Cloud/BaaS" }
    ]
  },
  {
    category: "Tools, Design & Agile",
    description: "Collaboration, agile delivery, interface design & version control",
    skills: [
      { name: "Git", level: "Advanced", icon: "git", tag: "VCS" },
      { name: "GitHub", level: "Advanced", icon: "git", tag: "VCS" },
      { name: "GitLab", level: "Advanced", icon: "gitlab", tag: "CI/CD" },
      { name: "Figma", level: "Proficient", icon: "figma", tag: "UI/UX" },
      { name: "Canva", level: "Proficient", icon: "figma", tag: "Design" },
      { name: "Trello & Asana", level: "Advanced", icon: "kanban", tag: "Agile" },
      { name: "Kanban", level: "Advanced", icon: "kanban", tag: "Methodology" },
      { name: "Microsoft Office", level: "Proficient", icon: "log", tag: "Productivity" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "goliath-workspace",
    title: "Goliath Workspace",
    category: "Enterprise ERP / HCM & Agile Execution System",
    badge: "Flagship SaaS",
    description:
      "A full-featured, multi-tenant Enterprise Resource Planning (ERP), Human Capital Management (HCM), and Agile Project Execution system. Designed for modern mid-to-large enterprises, it provides complete transparency into corporate operations, team initiatives, daily productivity logs, supply chain logistics, multi-facility warehouse inventory, and employee lifecycle management.",
    techStack: [
      "Next.js (App Router)",
      "Strict TypeScript",
      "Zod Schema Validation",
      "Tailwind CSS",
      "Multi-Tenant DB",
      "Route-Level RBAC"
    ],
    image: "/goliath.png",
    git: "",
    link: "https://goliath-workspace-beta.vercel.app",
    status: "Production Beta",
    highlights: [
      "Tenant Isolation: Every database record is strictly scoped to its company context (i_company), with instant tenant switching.",
      "Agile Project Management: Kanban boards, section-grouped list views, interactive subtask checklists, and real-time activity/comment threads.",
      "Universal Employee Workspace: Open access for all team members to collaborate on projects, track tasks, and submit daily work reports.",
      "Granular Route-Level RBAC: Department-level permission policies dynamically regulate navigation routes and action capabilities.",
      "Double-Entry Stock Audit Trails: All inventory mutations generate immutable ledger records with sequential tracking numbers (IN-2026-XXXX, OUT-2026-XXXX, TR-2026-XXXX).",
      "Zero any Strict TypeScript: Built under strict compiler guarantees with 100% type-checked data contracts and Zod schema runtime validation."
    ]
  },
  {
    id: "puicgs",
    title: "PUICGS — Certificate Management Portal",
    category: "Institutional Web App & Verification Portal",
    badge: "Institutional Live",
    description:
      "Official university certificate generation and tracking platform engineered for PHINMA University of Iloilo students and administrators. Enables submitting completed duty hours, uploading verified Daily Time Record (DTR) proof, automated approval routing, and issuing verifiable serial-numbered duty certificates seamlessly.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "OAuth / Google Auth",
      "PDF Generation",
      "REST APIs"
    ],
    image: "/puicgs.png",
    git: "",
    link: "https://puicgs.vercel.app/",
    status: "Production Live",
    highlights: [
      "Official certificate generation platform for PHINMA University of Iloilo students",
      "Restricted institutional authentication supporting @phinmaed.com student accounts",
      "Automated student DTR proof upload, review workflows & administrative approval routing",
      "Generates tamper-resistant, verifiable duty certificates with sequential serial numbering"
    ]
  },
  {
    id: "movielor",
    title: "MovieLor",
    category: "Web Application & Entertainment API",
    badge: "Featured Live",
    description:
      "A feature-rich TMDB cinema discovery platform. Enables exploring latest box office hits, trending television shows, categorized movie exploration, and deep media details powered by TMDB API integration.",
    techStack: ["React.js", "TMDB API", "Tailwind CSS", "Swiper.js", "Shadcn UI"],
    image: "/movielor.png",
    git: "",
    link: "https://movielorwatchtv-plum.vercel.app",
    status: "Production Live",
    highlights: [
      "Seamless asynchronous data fetching from TMDB endpoints",
      "Interactive media carousels and clean card animations"
    ]
  },
  {
    id: "workstudio",
    title: "WorkStudio — Smart Factory Framework",
    category: "Enterprise / Smart Factory SaaS",
    badge: "Enterprise",
    description:
      "Enterprise platform engineered at EasyGeo Co. Ltd. supporting full smart factory frameworks including ERP, MES, SPC, POP, PLM, and SCM for real-time factory floor management and automated data flows.",
    techStack: ["React.js", "Java Spring", "PostgreSQL", "REST APIs", "Real-time SPC"],
    image: "/workstudio.png",
    imagePosition: "object-center",
    git: "",
    link: "",
    status: "Enterprise Production (EasyGeo)",
    highlights: [
      "Streamlined factory operational flows across international production facilities",
      "Integrated real-time telemetry, MES reporting, and ERP modules"
    ]
  },
  {
    id: "slom-ai",
    title: "slom.ai & KaChick Startup Ecosystem",
    category: "AI Platform & Startup Client-Side",
    badge: "International Startup",
    description:
      "Contributed to client-side development for flagship applications (trackbill.io, KaChick Photospots, and slom.ai Solomon AI) at Hong Kong startup KaChick, enhancing cross-browser UX and responsive API integrations.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "AI API Integration"],
    image: "",
    git: "",
    link: "https://slom.ai",
    status: "Production Live",
    highlights: [
      "Developed high-performance interfaces for AI-driven workflows",
      "Collaborated with international designers and engineers"
    ]
  },
  {
    id: "jianzin",
    title: "Jianzin E-Commerce Platform",
    category: "Full-Stack Web Application / Capstone",
    badge: "Capstone Project",
    description:
      "A comprehensive full-stack e-commerce web platform engineered with complete product catalog management, persistent cart state, user authentication, and an end-to-end checkout and order management pipeline.",
    techStack: ["React.js", "Node.js / Java", "MySQL", "Tailwind CSS", "REST APIs"],
    image: "",
    git: "",
    link: "",
    status: "Completed Capstone",
    highlights: [
      "End-to-end order processing, stock tracking, and administrative dashboard",
      "Engineered at PHINMA University of Iloilo BSIT Program"
    ]
  },
  {
    id: "gov-document-tracking",
    title: "Municipal Document Tracking & Emergency Dispatch",
    category: "Government Digital Transformation",
    badge: "Public Sector",
    description:
      "Centralized systems built for the Iloilo City Government to monitor official records, accelerate Emergency Patient Report intakes for rapid dispatch, and manage the Informal Settlers demographic database.",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST APIs"],
    image: "",
    git: "",
    link: "",
    status: "Deployed Municipal System",
    highlights: [
      "Accelerated incident intake and improved emergency dispatch response times",
      "Centralized municipal record workflows across city departments"
    ]
  },
  {
    id: "placeholder-custom",
    title: "Upcoming Project Slot (Placeholder)",
    category: "Full Stack / SaaS",
    badge: "In Development",
    description:
      "Customizable project slot ready to showcase your next software build, portfolio addition, or enterprise system.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "",
    git: "",
    link: "",
    status: "Placeholder / Ready to customize",
    highlights: [
      "Easily editable in src/constants/index.js",
      "Add your demo link and screenshot whenever ready"
    ]
  }
];

export const WORKSPACE_FILES = [
  { name: "Profile.tsx", path: "/", icon: "react", size: "3.2 KB" },
  { name: "Experience.log", path: "/experience", icon: "log", size: "4.5 KB" },
  { name: "Skills.ts", path: "/skills", icon: "ts", size: "4.1 KB" },
  { name: "Projects.json", path: "/projects", icon: "json", size: "6.8 KB" },
  { name: "Contact.sh", path: "/contact", icon: "bash", size: "2.1 KB" }
];
