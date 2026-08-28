"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

type TabId = "experiencia" | "educacao" | "certificados";

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>("experiencia");

  const tabs = [
    { id: "experiencia" as TabId, label: t("experience.tabs.exp"), icon: <Briefcase size={15} /> },
    { id: "educacao" as TabId, label: t("experience.tabs.edu"), icon: <GraduationCap size={15} /> },
    { id: "certificados" as TabId, label: t("experience.tabs.cert"), icon: <Award size={15} /> },
  ];

  const experienceData = t("experience.experiences") || [];
  const educationData = t("experience.education") || [];
  const certificateData = t("experience.certificates") || [];

  // Animation variants for items container
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15
      }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  return (
    <section id="experiencia" className="py-20 sm:py-24 px-4 sm:px-6 relative bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            {t("experience.tag")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("experience.title")}
          </h2>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center md:justify-start border-b border-border mb-10 overflow-x-auto scrollbar-none">
          <div className="flex gap-1.5 p-1 relative min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 focus-visible:outline-none cursor-pointer ${
                    isActive ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-accent-muted border border-accent/20 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.icon}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === "experiencia" && (
              <motion.div
                key="experiencia"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="space-y-6 sm:space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-border"
              >
                {Array.isArray(experienceData) && experienceData.map((item: any, idx: number) => (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[11px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-background bg-accent group-hover:scale-125 transition-transform duration-300" />
                    
                    <div className="bg-card-bg border border-border/80 rounded-2xl p-4 sm:p-6 hover:border-accent/30 transition-colors duration-300 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                          {item.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                          <Calendar size={11} />
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted mb-3 sm:mb-4 font-semibold">
                        <span className="text-accent">{item.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "educacao" && (
              <motion.div
                key="educacao"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="space-y-6 sm:space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-border"
              >
                {Array.isArray(educationData) && educationData.map((item: any, idx: number) => (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[11px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-background bg-accent group-hover:scale-125 transition-transform duration-300" />
                    
                    <div className="bg-card-bg border border-border/80 rounded-2xl p-4 sm:p-6 hover:border-accent/30 transition-colors duration-300 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                          {item.degree}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                          <Calendar size={11} />
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted mb-3 sm:mb-4 font-semibold">
                        <span className="text-accent">{item.institution}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "certificados" && (
              <motion.div
                key="certificados"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {Array.isArray(certificateData) && certificateData.map((item: any, idx: number) => (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className="bg-card-bg border border-border/80 hover:border-accent/30 rounded-2xl p-5 transition-colors duration-300 flex flex-col justify-between shadow-sm"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-2 block">
                          {item.issuer}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-foreground mb-2.5 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-muted leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                      
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:opacity-80 transition-opacity cursor-pointer w-fit"
                        >
                          {t("experience.tabs.verifyBtn") || "Verificar Credencial"}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
