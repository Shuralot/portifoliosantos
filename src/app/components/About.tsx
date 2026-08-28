"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Compass, Zap, Users } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const softSkills = t("about.softSkills") || [];
  
  // Icon mapping corresponding to index
  const icons = [
    <Heart key="heart" size={20} className="text-accent" />,
    <Users key="users" size={20} className="text-accent" />,
    <Compass key="compass" size={20} className="text-accent" />,
    <Zap key="zap" size={20} className="text-accent" />
  ];

  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.1,
        duration: 0.8
      }
    }
  };

  // Helper function to inject bold styling on key phrases dynamically
  const highlightText = (text: string, highlights: string[]) => {
    if (!highlights || highlights.length === 0) return text;
    let parts: (string | React.ReactNode)[] = [text];
    
    highlights.forEach((highlight) => {
      if (!highlight) return;
      const nextParts: (string | React.ReactNode)[] = [];
      parts.forEach((part) => {
        if (typeof part === "string") {
          const splitPart = part.split(highlight);
          for (let i = 0; i < splitPart.length; i++) {
            nextParts.push(splitPart[i]);
            if (i < splitPart.length - 1) {
              nextParts.push(
                <span key={highlight + i} className="font-semibold text-foreground">
                  {highlight}
                </span>
              );
            }
          }
        } else {
          nextParts.push(part);
        }
      });
      parts = nextParts;
    });
    
    return <>{parts}</>;
  };

  return (
    <section id="sobre" className="py-20 sm:py-24 px-4 sm:px-6 bg-foreground/[0.01] border-y border-border/40 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            {t("about.tag")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("about.title")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Story Column */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6 text-muted text-sm sm:text-base leading-relaxed">
            <p>
              {highlightText(t("about.p1"), [t("about.p1Highlight")])}
            </p>
            <p>
              {highlightText(t("about.p2"), [
                t("about.p2Highlight1"), 
                t("about.p2Highlight2"), 
                t("about.p2Highlight3")
              ])}
            </p>
            <p>
              {highlightText(t("about.p3"), [
                t("about.p3Highlight1"), 
                t("about.p3Highlight2"), 
                t("about.p3Highlight3")
              ])}
            </p>
          </div>

          {/* Interactive Soft Skills Column */}
          <div className="md:col-span-5 space-y-4 pt-4 md:pt-0">
            <h3 className="text-xs font-bold tracking-wider text-foreground uppercase mb-2 opacity-75">
              {t("about.softSkillsTag")}
            </h3>
            
            <div className="space-y-3">
              {Array.isArray(softSkills) && softSkills.map((skill: any, index: number) => {
                const isOpen = activeSkill === index;
                return (
                  <motion.div
                    key={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    onClick={() => setActiveSkill(isOpen ? null : index)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                      isOpen
                        ? "bg-accent-muted border-accent/30 shadow-sm"
                        : "bg-card-bg border-border hover:border-accent/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-foreground/[0.03] dark:bg-foreground/[0.08]">
                        {icons[index] || icons[0]}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        {skill.title}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-[11px] sm:text-xs text-muted leading-relaxed">
                        {skill.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            
            <p className="text-[10px] text-muted text-center pt-2 italic">
              {t("about.clickTip")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
