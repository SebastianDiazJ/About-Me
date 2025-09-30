import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaMicrosoft,
  FaCss3Alt,  
} from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiDotnet } from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C# / .NET", icon: <SiDotnet /> },
  { name: "CSS3", icon: <FaCss3Alt /> },   
  { name: "Bases de datos", icon: <FaDatabase /> },
  { name: "Power Platform", icon: <FaMicrosoft /> },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
