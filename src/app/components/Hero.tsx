"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ArrowRight, Download } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom fluid bezier curve
      },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const tags = t("hero.tags") || [];

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Graphic Elements (Soft and Human, No Neon) */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full filter blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-muted/5 rounded-full filter blur-3xl -z-10 animate-pulse duration-[10000ms]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center justify-between z-10"
      >
        {/* Left column: Text content */}
        <div className="md:col-span-8 flex flex-col justify-center items-start text-left space-y-6 sm:space-y-8 order-2 md:order-1">
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground max-w-3xl"
          >
            {t("hero.headline")}{" "}
            <span className="text-accent italic font-serif font-normal">{t("hero.headlineItalic")}</span>
          </motion.h1>

          {/* Sub-headline / Elevator pitch */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted font-normal max-w-2xl leading-relaxed"
          >
            {t("hero.subheadline")}
            <span className="font-semibold text-foreground">{t("hero.subheadlineHighlight")}</span>
            {t("hero.subheadlineText")}
          </motion.p>

          {/* Interactive Badges / Areas */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2 pt-2"
          >
            {Array.isArray(tags) && tags.map((tag: string, i: number) => (
              <span 
                key={i}
                className="text-xs bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-border text-muted px-2.5 sm:px-3 py-1 rounded-md hover:border-accent hover:text-foreground transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projetos")}
              className="group flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 sm:px-6 text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 active:scale-98 cursor-pointer"
            >
              {t("hero.ctaProjects")}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => handleScrollTo("contato")}
              className="flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-border px-5 sm:px-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.06] active:scale-98 cursor-pointer"
            >
              <Mail size={15} />
              {t("hero.ctaContact")}
            </button>

            <a
              href={t("hero.resumeFile")}
              download
              className="flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-border px-5 sm:px-6 text-xs sm:text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.06] active:scale-98 cursor-pointer text-center"
            >
              <Download size={15} className="inline" />
              {t("hero.downloadResume")}
            </a>
          </motion.div>
        </div>

        {/* Right column: Rotating 3D Coin Avatar */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 flex justify-center items-center py-4 sm:py-6 order-1 md:order-2"
        >
          {/* Coin Wrapper with Perspective */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 [perspective:1000px]">
            {/* Spinning Coin Inner */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                repeat: Infinity,
                duration: 8, // Slow, fluid rotation
                ease: "linear"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full h-full relative rounded-full shadow-lg border border-border bg-card-bg"
            >
              {/* Front Face (Professional Profile) */}
              <div 
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-card-bg"
              >
                <Image
                  src="/avatar-front.png"
                  alt="Júlio Rodrigues - Front Face"
                  fill
                  sizes="(max-w-768px) 176px, (max-w-1024px) 224px, 256px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Back Face (Alternative Bear Logo) */}
              <div 
                style={{ 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)" 
                }}
                className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-card-bg"
              >
                <Image
                  src="/avatar-back.png"
                  alt="Júlio Rodrigues - Back Face"
                  fill
                  sizes="(max-w-768px) 176px, (max-w-1024px) 224px, 256px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Indicator at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-muted hover:text-accent transition-colors hidden sm:flex flex-col items-center gap-1"
        onClick={() => handleScrollTo("sobre")}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">{t("hero.discover")}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
