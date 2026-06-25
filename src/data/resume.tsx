import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Oluwaferanmi Caleb Oyelowo",
  initials: "OCO",
  url: "https://oluwaferanmi-dev.vercel.app",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos",
  description:
    "Full-stack engineer building web applications, mobile apps, and digital products that solve real-world problems.",
  summary:
    "I’m a full-stack developer with a passion for building scalable, user-focused web applications that solve real-world problems. My journey began through freelance development, where I worked with clients across various industries before joining professional teams at KNFRMD Web Corp and FUNKASH TECHNOLOGY.\n\nOver the years, I’ve built and contributed to products ranging from business platforms and educational systems to community-driven applications and marketplaces. I specialize in modern web technologies including React, React Native, TypeScript, Node.js, and Tailwind CSS, and I enjoy transforming ideas into reliable, production-ready solutions that deliver value to users.",
  avatarUrl: "/profile.JPG",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "React Native" },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "Node.js", icon: Nodejs },
    { name: "REST APIs" },
    { name: "Supabase" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Vercel" },
    { name: "Git" },
    { name: "GitHub" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "feranmioyelowo@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Oluwaferanmi.Dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/feranmi-oyelowo/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/feranmi_sys?s=11",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:feranmioyelowo@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FUNKASH TECHNOLOGY",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/funkash-logo.png",
      start: "Jan 2025",
      end: "May 2026",
      description:
        "Led front-end development of Limpiar, a platform connecting property managers with vetted cleaning agencies. Developed dedicated dashboards and workflows for property managers, cleaning agencies, and administrators. Built responsive and scalable interfaces using modern frontend technologies. Improved platform usability, maintainability, and performance.",
    },
    {
      company: "KNFRMD WEB CORP.",
      badges: [],
      href: "",
      location: "Remote (Vancouver, BC)",
      title: "Frontend Web Developer",
      logoUrl: "/knfrmd_web_corp_logo.jpeg",
      start: "Feb 2023",
      end: "Oct 2024",
      description:
        "Developed modern web applications using React, Next.js, and TypeScript. Integrated backend services and APIs to support dynamic user experiences. Optimized application performance and responsiveness across devices. Collaborated closely with designers and stakeholders to implement user-focused interfaces.",
    },
    {
      company: "Freelance Full-Stack Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Freelance Full-Stack Developer",
      logoUrl: "",
      start: "2020",
      end: "Present",
      description:
        "Delivered custom websites and web applications for businesses and organizations. Managed projects from planning and development through deployment and maintenance. Built scalable digital solutions tailored to client needs.",
    },
  ],
  education: [
    {
      school: "Launch School",
      href: "",
      degree: "Software Development Program",
      logoUrl: "/launch-school.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Babcock University",
      href: "",
      degree: "Bachelor of Science (B.Sc.) Software Engineering",
      logoUrl: "/Babcock_University_Logo.jpg",
      start: "2020",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Yrdly",
      href: "",
      dates: "Current",
      active: true,
      description:
        "A multi-platform community ecosystem consisting of a web application, cross-platform mobile application, and public website designed to strengthen neighborhood connections and local engagement.",
      technologies: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Supabase",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Monexus",
      href: "",
      dates: "Current",
      active: true,
      description:
        "A fintech-focused platform providing secure transactions, identity verification, and seamless digital financial experiences.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Supabase",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Street Priests",
      href: "https://streetpriests.org",
      dates: "Past",
      active: true,
      description:
        "Street Priests is a youth-led Nigerian non-governmental organization headquartered in Calabar, dedicated to rescuing, sheltering, educating, and empowering homeless street children through education, mentorship, protection, and support programs.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://streetpriests.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Farrah Tutors",
      href: "https://www.farrahtutors.com/",
      dates: "Past",
      active: true,
      description:
        "Farrah Tutors is a personalized educational platform offering both virtual and physical tutoring services, academic support, homework assistance, and examination preparation for students at various educational levels.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.farrahtutors.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Limpiar",
      href: "",
      dates: "Jan 2025 - May 2026",
      active: true,
      description:
        "A platform connecting property managers with professional cleaning agencies through streamlined booking, scheduling, and management workflows.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "API Integrations",
        "Vercel",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
