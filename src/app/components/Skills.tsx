"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const rawCategories = t("skills.categories") || [];

  // Static tags & icons that do not require translation
  const staticSkillsData = [
    {
      icon: <Code2 className="text-accent" size={20} />,
      skills: ["TypeScript", "JavaScript", "Angular", "React", "Next.js", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Sass"]
    },
    {
      icon: <Terminal className="text-accent" size={20} />,
      skills: ["Node.js", "Express", "Python", "Django", "PyQt6", "CRUD & REST APIs"]
    },
    {
      icon: <Database className="text-accent" size={20} />,
      skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Railway", "Whitenoise"]
    },
    {
      icon: <Cpu className="text-accent" size={20} />,
      skills: ["Docker", "Linux Red Hat (RH-124)", "VPS Hosting", "Git / GitHub", "Scrum / Kanban", "Automação Kommo (CRM)", "CI/CD Básico"]
    }
  ];

  const skillCategories = Array.isArray(rawCategories) 
    ? rawCategories.map((category: any, idx: number) => ({
        title: category.title,
        description: category.desc,
        icon: staticSkillsData[idx]?.icon || <Code2 className="text-accent" size={20} />,
        skills: staticSkillsData[idx]?.skills || []
      }))
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 16
      }
    }
  };

  const tagVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" as const }
    }
  };

  return (
    <section id="habilidades" className="py-20 sm:py-24 px-4 sm:px-6 bg-foreground/[0.01] border-y border-border/40 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            {t("skills.tag")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("skills.title")}
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-card-bg border border-border/80 hover:border-accent/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-foreground/[0.03] dark:bg-foreground/[0.08]">
                    {category.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-muted mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, tagIdx) => (
                  <motion.span
                    key={tagIdx}
                    variants={tagVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-foreground/[0.02] dark:bg-foreground/[0.04] border border-border text-foreground hover:bg-accent-muted hover:border-accent/30 hover:text-accent cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
