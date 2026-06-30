"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "HTML",          value: 80 },
  { name: "CSS",           value: 85 },
  { name: "JavaScript",    value: 50 },
  { name: "PHP",           value: 70 },
  { name: "WordPress/CMS", value: 90 },
  { name: "Photoshop",     value: 55 },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const bars = document.querySelectorAll<HTMLElement>(".skills .progress-bar");
            bars.forEach((bar) => {
              const value = bar.getAttribute("aria-valuenow") ?? "0";
              bar.style.width = value + "%";
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(skills.length / 2);
  const leftSkills  = skills.slice(0, half);
  const rightSkills = skills.slice(half);

  return (
    <section id="skills" className="skills section light-background" ref={sectionRef}>
      <div className="container section-title">
        <h2>Skills</h2>
        <p>
          Here&apos;s a brief overview of my skills and the value I offer. I&apos;m
          excited to collaborate and achieve great results together.
        </p>
      </div>

      <div className="container">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            {leftSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="col-lg-6">
            {rightSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: 0 }}
        ></div>
      </div>
    </div>
  );
}
