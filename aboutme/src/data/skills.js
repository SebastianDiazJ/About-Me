import {
  FaReact, FaJava, FaPython, FaNodeJs, FaDatabase, FaMicrosoft, FaCss3Alt,
  FaHtml5, FaAws, FaDocker, FaGitAlt, FaGithub, FaAngular, FaFigma,
} from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiTypescript, SiDotnet, SiMongodb, SiPostgresql, SiOracle, SiMysql } from "react-icons/si";

export const skillCategories = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "C# / .NET", icon: <SiDotnet /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    label: "Datos",
    items: [
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure DevOps", icon: <FaMicrosoft /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    label: "Low-code & Enterprise",
    items: [
      { name: "Power Platform", icon: <FaMicrosoft /> },
      { name: "Outsystems", icon: <FaMicrosoft /> },
      { name: "Appian", icon: <FaMicrosoft /> },
    ],
  },
];

export const marqueeSkills = skillCategories.flatMap((c) => c.items);
