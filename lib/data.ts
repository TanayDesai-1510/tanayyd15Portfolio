import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import ruScarletSelector from "@/public/ruScarletSelector.png";
import stampProject from "@/public/stampProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    companyName: "Rutgers OIT-EAS",
    description: [
      "Collaborating with cross-functional developers to modernize and optimize Rutgers University’s central web portal, an enterprise-scale platform supporting academic and student services, relied upon daily by over 70,000 students, faculty, and staff.",
      "Developing custom, reusable, and responsive React.js components, significantly reducing overall development time by 30% and enhancing overall code maintainability, scalability, and cross-project performance across multiple applications.",
      "Resolving critical software issues, improving overall system performance by 15% and providing a smoother user experience.",
      "Engineered dark mode features, increasing user engagement by 20% while improving visual appeal and overall experience.",
    ],
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Present",
  },
  {
    title: "Front-End Engineern Intern",
    companyName: "Skillsvista",
    description: [
      "Designed and developed 3+ highly responsive and reusable web components using Vue.js, significantly improving user experience and overall performance for over 2,000+ monthly users, while ensuring seamless functionality across diverse devices and platforms.",
      "Leveraged Vuex for robust and scalable state management, improving data flow, system stability, and overall application performance by ensuring consistent state synchronization across components and reducing potential errors.",
      "Identified, diagnosed, and efficiently fixed 5+ critical software bugs across multiple modules, resulting in a 15% reduction in support tickets by significantly improving overall system stability, minimizing errors, and greatly enhancing the overall end-user experience.",
    ],
    icon: React.createElement(FaVuejs),
    date: "July 2022 - Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "STAMP",
    description:
      "STAMP is a drone-based software designed for advanced surveillance systems, providing comprehensive monitoring and enhanced security capabilities.",
    tags: ["React.js", "Python", "Flask", "Chakra-UI"],
    imageUrl: stampProject,
  },
  {
    title: "RU-ScarletSelector",
    description:
      "RU-ScarletSelector, a course recommender for Rutgers students, integrating past performance data to recommend optimal courses and real-time professor suggestions.",
    tags: ["React.js", "Python", "Flask", "Material-UI"],
    imageUrl: ruScarletSelector,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Postman",
  "Firebase",
  "Python",
  "Framer Motion",
  "C#",
  "C/C++",
  "Java",
  "R",
  "Figma",
] as const;
