import React, { useEffect, useRef, useState } from 'react';

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWordpress,
  FaReact,
  FaAngular,
  FaJava,
  FaLinux,
  FaFigma,
  FaSearch,
  FaServer,
  FaGitAlt,
  FaRobot,
} from 'react-icons/fa';

import {
  SiFlutter,
  SiDart,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';

import { MdDesignServices } from 'react-icons/md';

import './Skills.css';

const PEEL_RESET_MS = 60_000;

const SkillSticker = ({ id, cardRef }) => {
  const stickerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    let observer;

    const updateSize = () => {
      const sticker = stickerRef.current;
      const card = cardRef.current;

      if (!sticker || !card) return;

      sticker.setOptions({
        display: {
          width: card.clientWidth,
          height: card.clientHeight,
        },
      });
    };

    const init = async () => {
      await customElements.whenDefined('sticker-forge');

      const sticker = stickerRef.current;
      const card = cardRef.current;

      if (!sticker || !card) return;

      try {
        await sticker.setSource({
          type: 'image',
          src: '/img/peel-me.webp',
          name: 'peel-me.webp',

          // IMPORTANTE:
          // elimina il padding trasparente predefinito
          padding: 0,
        });

        sticker.setOptions({
          outline: {
            width: 18,
            color: '#ffffff',
          },

          edge: {
            width: 2.4,
            strength: 0.7,
          },

          shadow: {
            opacity: 0.22,
            blur: 22,
            distance: 16,
            angle: 42,
            color: '#191823',
          },

          lighting: {
            direction: {
              x: -0.38,
              y: 0.52,
              z: 0.76,
            },
            intensity: 0.8,
            ambient: 0.35,
            softness: 0.6,
          },

          peel: {
            radius: 0.12,
            stiffness: 0.72,
            grabWidth: 22,
            maxAngle: 3.55,
            detachThreshold: 0.74,
            residue: true,
            surfaceShadow: true,
            release: 'snap',
          },

          sound: {
            enabled: true,
            volume: 0.7,
          },

          back: {
            color: '#f7f5f2',
            gloss: 0.7,
            roughness: 0.3,
          },

          material: {
            type: 'original',
            intensity: 0.86,
            scale: 1,
            holographicGrain: 0.72,
            seed: 0.37,
          },

          tilt: -3,
          wind: 0.25,
          quality: 'high',

          // Sticker grande esattamente quanto la card
          display: {
            width: card.clientWidth,
            height: card.clientHeight,
          },
        });

        updateSize();

        // Responsive: aggiorna la mesh quando cambia la card
        observer = new ResizeObserver(updateSize);
        observer.observe(card);

        setShow(true);

        const handlePeelEnd = (event) => {
          if (event?.detail?.willReset === false) {
            setShow(false);

            timer = setTimeout(() => {
              updateSize();
              setShow(true);
            }, PEEL_RESET_MS);
          }
        };

        sticker.addEventListener('peelend', handlePeelEnd);

        return () => {
          sticker.removeEventListener('peelend', handlePeelEnd);
        };
      } catch (error) {
        console.error('[SkillSticker]', error);
      }
    };

    let cleanup;

    init().then((removeListener) => {
      cleanup = removeListener;
    });

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      cleanup?.();
    };
  }, [cardRef]);

  return (
    <div
      className="sticker-overlay"
      style={{
        visibility: show ? 'visible' : 'hidden',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <sticker-forge
        ref={stickerRef}
        id={id}
      />
    </div>
  );
};

const SkillCard = ({ category, idx }) => {
  const cardRef = useRef(null);

  return (
    <div
      className="skill-category"
      ref={cardRef}
    >
      <SkillSticker
        id={`sticker-${idx}`}
        cardRef={cardRef}
      />

      <h3 className="category-title">
        {category.title}
      </h3>

      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
          >
            <div className="skill-icon">
              {React.cloneElement(skill.icon, {
                'aria-hidden': true,
              })}
            </div>

            <span className="skill-name">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
        { name: 'React Native', icon: <FaReact color="#61DAFB" /> },
        { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
        { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
        { name: 'Dart', icon: <SiDart color="#0175C2" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
      ],
    },

    {
      title: 'Backend, Database & Core',
      skills: [
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'RESTful API', icon: <FaServer color="#fff" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'NoSQL', icon: <SiMongodb color="#47A248" /> },
      ],
    },

    {
      title: 'Tools, CMS & Altro',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'Linux / Unix', icon: <FaLinux color="#FCC624" /> },
        { name: 'WordPress', icon: <FaWordpress color="#21759B" /> },
        { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
        { name: 'UX/UI Design', icon: <MdDesignServices color="#fff" /> },
        { name: 'SEO Base', icon: <FaSearch color="#4285F4" /> },
        { name: 'Prompt Eng.', icon: <FaRobot color="#8A2BE2" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section skills"
    >
      <div className="container">
        <h2 className="section-title">
          Competenze
        </h2>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              idx={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;