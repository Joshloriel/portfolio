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
  github: "https://github.com/Joshloriel",
  email: "mailto:joshlorielsoo@gmail.com",
  phone: "tel:+639369032114",
  rawPhone: "+63 936 903 2114",
  rawEmail: "joshlorielsoo@gmail.com",
  linkedin: "https://linkedin.com",
  location: "Iloilo City, Philippines"
};

export const PROFILE = {
  name: "Josh Loriel L. So",
  role: "Full-Stack Software Engineer",
  status: "🟢 Available for Opportunities & Collaborations",
  location: "Iloilo City, Philippines",
  email: "joshlorielsoo@gmail.com",
  phone: "+63 936 903 2114",
  experienceYears: "2+ Years (Enterprise & International)",
  focus: "Modern Frontend Architecture (React, Next.js), Scalable SaaS Systems & Java Spring",
  summary:
    "Full-Stack Software Engineer with a focus on modern frontend architecture and scalable SaaS systems. Expertise in React, Next.js, and Java Spring, with a proven history of delivering high-impact solutions for international startups, enterprise smart factory frameworks, and municipal digital transformation projects.",
  highlights: [
    { label: "Enterprise Systems", desc: "Smart factory ERP, MES, SPC, POP, PLM, SCM at EasyGeo" },
    { label: "International Startups", desc: "Flagship frontend apps (slom.ai, trackbill.io) at KaChick HK" },
    { label: "Gov Digital Transformation", desc: "Centralized Document Tracking & Emergency Dispatch in Iloilo" }
  ],
  education: {
    institution: "PHINMA University of Iloilo",
    degree: "Bachelor of Science in Information Technology",
    graduated: "2024",
    capstone: "Jianzin E-Commerce Platform — Full-stack e-commerce web application with product catalog, cart state, and end-to-end checkout & order pipelines.",
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
    period: "2025 – 2026",
    badge: "Enterprise",
    highlights: [
      "Engineered core features for WorkStudio, an enterprise platform supporting smart factory frameworks including ERP, MES, SPC, POP, PLM, and SCM.",
      "Developed robust frontend interfaces and integrated backend APIs to streamline operational data flows and real-time factory floor management.",
      "Collaborated with cross-functional international teams to implement scalable architecture and maintain system performance."
    ],
    techStack: ["React.js", "Java Spring", "PostgreSQL", "REST APIs", "Enterprise Architecture"]
  },
  {
    id: "kachick",
    company: "KaChick",
    role: "Software Engineering Intern",
    companyType: "Hong Kong-Based Startup",
    period: "2024",
    badge: "Startup / Global",
    highlights: [
      "Contributed to client-side development for flagship products including trackbill.io, KaChick Photospots, and slom.ai (Solomon AI).",
      "Implemented responsive user interfaces and enhanced user experience across cross-browser environments using modern frontend frameworks.",
      "Collaborated closely with product designers and backend engineers to integrate APIs and resolve UI/UX bottlenecks."
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "AI Integration", "Cross-Browser UX"]
  },
  {
    id: "iloilo-gov",
    company: "Iloilo City Government",
    role: "Junior Programmer",
    companyType: "Local Government Unit / Municipal",
    period: "2023 – 2024",
    badge: "Public Sector",
    highlights: [
      "Built and optimized a centralized Document Tracking System to monitor and manage official municipal records across departments.",
      "Co-engineered an Emergency Patient Report System to accelerate incident intake and improve emergency dispatch response times.",
      "Designed and deployed the municipal Informal Settlers Database to organize and record demographic records for city planning.",
      "Delivered technical support and user onboarding sessions for government staff across deployed web platforms."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Government IT Systems"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages & Core",
    description: "Solid foundational and object-oriented programming competencies",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js", tag: "Core" },
      { name: "TypeScript", level: "Advanced", icon: "ts", tag: "Typed" },
      { name: "Java", level: "Advanced", icon: "java", tag: "Backend/OOP" },
      { name: "PHP", level: "Advanced", icon: "php", tag: "Backend" },
      { name: "HTML5", level: "Advanced", icon: "html", tag: "Markup" },
      { name: "CSS3", level: "Advanced", icon: "css", tag: "Styling" }
    ]
  },
  {
    category: "Frontend Frameworks & UI",
    description: "Building responsive, reactive, accessible user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react", tag: "Framework" },
      { name: "Next.js", level: "Advanced", icon: "nextjs", tag: "Full-Stack" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind", tag: "Styling" },
      { name: "Bootstrap", level: "Advanced", icon: "bootstrap", tag: "UI Library" },
      { name: "jQuery", level: "Proficient", icon: "jquery", tag: "Legacy/DOM" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Scalable API services, microservices, and enterprise logic",
    skills: [
      { name: "Java Spring", level: "Advanced", icon: "spring", tag: "Enterprise" },
      { name: "Node.js", level: "Advanced", icon: "nodejs", tag: "Runtime" },
      { name: "RESTful APIs", level: "Advanced", icon: "api", tag: "Architecture" },
      { name: "Laravel / PHP", level: "Advanced", icon: "laravel", tag: "Framework" }
    ]
  },
  {
    category: "Databases & Cloud",
    description: "Data modeling, schema design, and serverless backends",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "postgres", tag: "Relational" },
      { name: "MySQL", level: "Advanced", icon: "mysql", tag: "Relational" },
      { name: "MSSQL", level: "Proficient", icon: "mssql", tag: "Enterprise" },
      { name: "Supabase", level: "Proficient", icon: "supabase", tag: "Cloud/BaaS" },
      { name: "Firebase", level: "Proficient", icon: "firebase", tag: "Realtime" }
    ]
  },
  {
    category: "AI & Integrations",
    description: "Integrating intelligent language models & automated workflows",
    skills: [
      { name: "AI API Integration", level: "Advanced", icon: "ai", tag: "LLM" },
      { name: "AI Chatbot Development", level: "Advanced", icon: "ai", tag: "Conversational" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Modern collaboration, project management, and version control",
    skills: [
      { name: "Git / GitHub", level: "Advanced", icon: "git", tag: "VCS" },
      { name: "GitLab", level: "Advanced", icon: "gitlab", tag: "CI/CD" },
      { name: "Figma", level: "Proficient", icon: "figma", tag: "UI/UX" },
      { name: "Trello & Asana (Kanban)", level: "Advanced", icon: "kanban", tag: "Agile" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "workstudio",
    title: "WorkStudio — Smart Factory Framework",
    category: "Enterprise / Smart Factory SaaS",
    badge: "Enterprise",
    description:
      "Enterprise platform engineered at EasyGeo Co. Ltd. supporting full smart factory frameworks including ERP, MES, SPC, POP, PLM, and SCM for real-time factory floor management and automated data flows.",
    techStack: ["React.js", "Java Spring", "PostgreSQL", "REST APIs", "Real-time SPC"],
    image: "",
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
    git: "https://github.com/Joshloriel",
    link: "",
    status: "Completed Capstone",
    highlights: [
      "End-to-end order processing, stock tracking, and administrative dashboard",
      "Engineered at PHINMA University of Iloilo BSIT Program"
    ]
  },
  {
    id: "coffeeso",
    title: "CoffeeSo",
    category: "Full Stack / E-Commerce Experience",
    badge: "Featured",
    description:
      "A modern specialty coffee ordering & digital storefront built with React and interactive UI components. Features dynamic catalog filtering, product customization, and seamless cart state management.",
    techStack: ["React.js", "Bootstrap", "Custom CSS", "Responsive UI"],
    image: "/src/assets/coffeeso.png",
    git: "https://github.com/Joshloriel/CoffeeSo2000",
    link: "https://coffeeso.netlify.app",
    status: "Production Live",
    highlights: [
      "Dynamic catalog filtering and real-time state calculations",
      "Tailored mobile-first layouts with animated transitions"
    ]
  },
  {
    id: "movielor",
    title: "MovieLor",
    category: "Web Application & Entertainment API",
    badge: "Featured",
    description:
      "A feature-rich TMDB cinema discovery platform. Enables exploring latest box office hits, trending television shows, categorized movie exploration, and deep media details powered by TMDB API integration.",
    techStack: ["React.js", "TMDB API", "Tailwind CSS", "Swiper.js", "Shadcn UI"],
    image: "/src/assets/ma.png",
    git: "https://github.com/Joshloriel/MovieLor",
    link: "https://movielor.netlify.app",
    status: "Production Live",
    highlights: [
      "Seamless asynchronous data fetching from TMDB endpoints",
      "Interactive media carousels and clean card animations"
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
