import React, { useRef, useEffect, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress, FaReact,
  FaAngular, FaJava, FaNodeJs, FaLinux, FaFigma, FaSearch,
  FaServer, FaGitAlt, FaRobot
} from 'react-icons/fa';
import {
  SiFlutter, SiDart, SiC, SiCplusplus, SiJavascript,
  SiTypescript, SiMysql, SiMongodb
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

import './Skills.css';

const SkillCard = ({ category }) => {
  return (
    <div className="skill-category">
      <h3 className="category-title">{category.title}</h3>
      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React JS", icon: <FaReact color="#61DAFB" /> },
        { name: "React Native", icon: <FaReact color="#61DAFB" /> },
        { name: "Angular", icon: <FaAngular color="#DD0031" /> },
        { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
        { name: "Dart", icon: <SiDart color="#0175C2" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> }
      ]
    },
    {
      title: "Backend, Database & Core",
      skills: [
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "RESTful API", icon: <FaServer color="#fff" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "NoSQL", icon: <SiMongodb color="#47A248" /> }
      ]
    },
    {
      title: "Tools, CMS & Altro",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Linux / Unix", icon: <FaLinux color="#FCC624" /> },
        { name: "WordPress", icon: <FaWordpress color="#21759B" /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
        { name: "UX/UI Design", icon: <MdDesignServices color="#fff" /> },
        { name: "SEO Base", icon: <FaSearch color="#4285F4" /> },
        { name: "Prompt Eng.", icon: <FaRobot color="#8A2BE2" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Competenze</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;
