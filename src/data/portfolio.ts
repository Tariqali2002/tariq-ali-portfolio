import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tariq Ali",
    headline: "Frontend & Mobile Software Engineer",
    subHeadline:
      "Flutter • React • .NET Web API • MS SQL Server • AWS Cloud • Python & GenAI",
    location: "Lucknow, Uttar Pradesh, India",
    availability: ["Open to Remote", "Open to Full-Time Opportunities"],
    email: "shazebsheikh47@gmail.com",
    phone: "+91 8052050925",
    linkedin: "https://www.linkedin.com/in/tariqali2002",
    github: "https://github.com/Tariqali2002",
    resumeUrl: "/Tariq_Ali_Resume.pdf",
    summary:
      "Passionate about full-stack mobile and web engineering, automation, cloud infrastructure, and AI-driven applications. Proven ability to architect and ship end-to-end mobile applications (APK) integrating Flutter, Firebase, secure .NET Web APIs, and MS SQL Server alongside responsive React web interfaces.",
    careerGoal:
      "Known as a quick learner, adaptable team player, and analytical problem solver, my goal is to build high-impact software systems across Cloud, Full-Stack Mobile/Web, and AI engineering while continuously expanding my mastery of emerging technologies.",
  },
  skills: [
    {
      id: "mobile-backend",
      title: "Mobile & Backend Architecture",
      description:
        "End-to-end production mobile app engineering and secure relational database integration.",
      skills: [
        "Flutter",
        "Dart",
        "End-to-End APK Deployment",
        "Firebase",
        ".NET Web API",
        "API Key Authentication",
        "MS SQL Server (MSSQL)",
      ],
    },
    {
      id: "frontend-web",
      title: "Frontend & Web Technologies",
      description:
        "Modern component-driven user interfaces with responsive design and smooth interactions.",
      skills: [
        "React.js",
        "Web Technologies",
        "Responsive Web Design",
        "Modern UI/UX Implementation",
        "HTML5 & CSS3",
        "JavaScript / TypeScript",
      ],
    },
    {
      id: "cloud-ai-data",
      title: "Cloud, GenAI & Data Analytics",
      description:
        "Cloud infrastructure foundations, workflow automation, and data-driven application logic.",
      skills: [
        "AWS Cloud",
        "Python",
        "Generative AI (GenAI)",
        "Data Analysis",
        "Workflow Automation",
        "System Troubleshooting & Documentation",
      ],
    },
  ],
  experience: [
    {
      id: "v-oakbiew",
      role: "Mobile & Full-Stack Application Developer",
      company: "V Oakbiew Private Limited",
      cin: "U14101UP2025PTC222367",
      duration: "2 Months Tenure",
      tenureLength: "2 months",
      location:
        "12/652, Sector 12, Munshi Pulia Chauraha, Indira Nagar Sec-14, Lucknow, Uttar Pradesh",
      landmark: "Near Munshi Pulia Chauraha / Indira Nagar Sector 12 area",
      type: "Full-Stack & Mobile",
      featured: true,
      highlights: [
        "Architected and developed a complete end-to-end Android application (APK) from initial wireframes to production release using Flutter.",
        "Engineered secure backend data synchronization utilizing .NET Web API protected by custom API Key authentication middleware.",
        "Designed relational schemas and optimized transactional queries in Microsoft SQL Server (MSSQL) to support real-time application workflows.",
        "Integrated Firebase services for real-time cloud messaging, authentication state management, and mobile telemetry.",
      ],
      technologies: [
        "Flutter",
        "Firebase",
        ".NET API",
        "API Key Auth",
        "MS SQL Server",
        "End-to-End APK",
      ],
    },
    {
      id: "anudip-foundation",
      role: "Advanced Frontend Development Trainee",
      company: "Anudip Foundation",
      duration: "Sep 2025 – Jan 2026",
      tenureLength: "5 months",
      location:
        "2nd Floor, 27/1, Chandralok, Kapoorthala Road, Aliganj, Lucknow, Uttar Pradesh 226024",
      type: "Frontend",
      highlights: [
        "Completed intensive training in advanced frontend engineering, building responsive, accessible web interfaces with modern React and web standards.",
        "Collaborated on structured UI workflows focusing on cross-device compatibility, component reusability, and clean code architecture.",
      ],
      technologies: [
        "React",
        "Responsive Web Design",
        "Web Technologies",
        "Frontend Architecture",
      ],
    },
    {
      id: "doss",
      role: "Technical Support Intern",
      company: "DOSS",
      duration: "Sep 2024 – Feb 2025",
      tenureLength: "6 months",
      location: "Lucknow, Uttar Pradesh, India",
      type: "Technical Support",
      highlights: [
        "Provided structured technical support and root-cause troubleshooting across software and client environments.",
        "Authored clear technical documentation and delivered responsive user assistance to streamline issue resolution.",
      ],
      technologies: [
        "Technical Diagnostics",
        "System Troubleshooting",
        "Technical Documentation",
        "User Assistance",
      ],
    },
    {
      id: "vaultofcodes",
      role: "Internship Trainee",
      company: "VaultOfCodes",
      duration: "Sep 2024 – Oct 2024",
      tenureLength: "2 months",
      location: "Remote / India",
      type: "Trainee",
      highlights: [
        "Completed practical software development training modules focused on web application fundamentals and structured problem solving.",
      ],
      technologies: ["Web Development", "Core Programming", "Problem Solving"],
    },
    {
      id: "samsung-innovation-campus",
      role: "Apprenticeship",
      company: "Samsung Innovation Campus",
      duration: "Aug 2024 – Sep 2024",
      tenureLength: "2 months",
      location: "Khwaja Moinuddin Chishti Language University, Lucknow",
      type: "Apprenticeship",
      highlights: [
        "Selected for the Samsung Innovation Campus technical apprenticeship program focused on emerging computing technologies and applied engineering.",
      ],
      technologies: ["Emerging Technologies", "Python", "AI Foundations"],
    },
    {
      id: "dhex",
      role: "Technical Trainee",
      company: "Dhex",
      duration: "Dec 2023 – Jul 2024",
      tenureLength: "8 months",
      location: "India",
      type: "Trainee",
      highlights: [
        "Completed an 8-month foundational technical traineeship developing core competencies in web technologies, software workflows, and collaborative delivery.",
      ],
      technologies: ["Web Technologies", "Core Competences", "Software Workflows"],
    },
  ],
  deliverables: [
    {
      id: "oakbiew-apk-system",
      title: "Enterprise End-to-End Mobile APK & .NET/MSSQL Platform",
      organization: "V Oakbiew Private Limited (CIN: U14101UP2025PTC222367)",
      badge: "Production Mobile & API Architecture",
      summary:
        "Full-lifecycle mobile application engineered and packaged as a production Android APK. Built to connect field and enterprise workflows in Indira Nagar, Lucknow with high-availability backend services.",
      architectureLayers: [
        {
          layer: "01. Client Presentation Layer (Flutter APK)",
          tech: "Flutter & Dart",
          detail:
            "Responsive cross-platform mobile UI compiled into a production-ready Android APK with smooth state handling and offline-resilient form workflows.",
        },
        {
          layer: "02. Cloud Services & Real-Time Sync",
          tech: "Google Firebase",
          detail:
            "Integrated Firebase services for real-time notifications, client session verification, and cloud-backed mobile reliability.",
        },
        {
          layer: "03. Secure API Gateway & Business Logic",
          tech: ".NET Web API + API Key Security",
          detail:
            "RESTful .NET API endpoints secured with custom API Key header validation, request sanitization, and structured JSON payloads.",
        },
        {
          layer: "04. Relational Data Persistence",
          tech: "MS SQL Server (MSSQL)",
          detail:
            "Normalized relational database architecture handling structured business records, fast indexed lookups, and transactional integrity.",
        },
      ],
      technologies: [
        "Flutter",
        "Firebase",
        ".NET Web API",
        "API Key Authentication",
        "MS SQL Server",
        "Android APK",
      ],
    },
    {
      id: "frontend-cloud-systems",
      title: "Responsive Frontend & Cloud/GenAI Engineering Suite",
      organization: "Anudip Foundation & Academic Engineering",
      badge: "Web & Cloud Architecture",
      summary:
        "Modern responsive web interfaces combining React component systems, Python-driven data/GenAI exploration, and AWS cloud deployment fundamentals.",
      architectureLayers: [
        {
          layer: "01. Interactive Web UI",
          tech: "React & Responsive Web Design",
          detail:
            "Mobile-first, accessible interfaces crafted during advanced frontend training at Anudip Foundation.",
        },
        {
          layer: "02. Cloud & Automation Layer",
          tech: "AWS Cloud & Python",
          detail:
            "Exploration of cloud infrastructure, automated workflows, and data analysis pipelines.",
        },
      ],
      technologies: [
        "React",
        "Responsive Web Design",
        "Python",
        "AWS Cloud",
        "GenAI",
        "Data Analytics",
      ],
    },
  ],
  education: [
    {
      institution: "Khwaja Moinuddin Chishti Language University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      period: "September 2021 – June 2025",
      location: "Lucknow, Uttar Pradesh, India",
    },
  ],
  certifications: [
    {
      id: "cert-samsung",
      name: "Samsung Innovation Campus Certification",
      issuer: "Samsung Innovation Campus",
      category: "Emerging Tech & Engineering",
    },
    {
      id: "cert-kmclu",
      name: "University Technical Certification",
      issuer: "Khwaja Moinuddin Chishti Language University",
      category: "Computer Engineering",
    },
    {
      id: "cert-unstop",
      name: "Verified Competitive & Technical Credentials",
      issuer: "Unstop",
      category: "Engineering & Problem Solving",
    },
    {
      id: "cert-dhex",
      name: "Technical Traineeship Certification",
      issuer: "dhex",
      category: "Web & Software Technologies",
    },
    {
      id: "cert-vault",
      name: "Internship Completion Credential",
      issuer: "VaultOfCodes",
      category: "Software Development",
    },
  ],
};
