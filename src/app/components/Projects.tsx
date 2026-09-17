"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Monitor, Cpu, MessageSquare, Layout, Bot, Bomb } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useLanguage } from "./LanguageContext";
import TechBadge from "./TechBadge";

type Project = {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const rawProjects = t("projects.list") || [];

  const iconsMap: Record<string, React.ReactNode> = {
    "batatoom": <Bomb className="text-accent" size={24} />,
    "odontovieira": <Monitor className="text-accent" size={24} />,
    "trackchat": <MessageSquare className="text-accent" size={24} />,
    "gerenciador-atividades": <Cpu className="text-accent" size={24} />,
    "portfolio-nextjs": <Layout className="text-accent" size={24} />,
    "ragnar": <Bot className="text-accent" size={24} />
  };

  const projectsData: Project[] = Array.isArray(rawProjects)
    ? rawProjects.map((project: any) => ({
        id: project.id,
        title: project.title,
        category: project.category,
        summary: project.summary,
        description: project.description,
        tags: project.tags,
        link: project.link,
        github: project.github,
        icon: iconsMap[project.id] || <Monitor className="text-accent" size={24} />
      }))
    : [];

  // Esc/Close Handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projetos" className="py-20 sm:py-24 px-4 sm:px-6 relative bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            {t("projects.tag")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-2">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="bg-card-bg border border-border/80 hover:border-accent/30 rounded-2xl p-5 sm:p-6 cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-foreground/[0.03] dark:bg-foreground/[0.08] group-hover:bg-accent-muted transition-colors duration-300">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-accent transition-colors">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-xs text-muted leading-relaxed font-normal mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Tags summary */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, tagIdx) => (
                  <TechBadge key={tagIdx} name={tag} size="sm" />
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-medium text-accent pl-1 self-center">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Details Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Darkened backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              />

              {/* Card Container */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card-bg border border-border rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl pointer-events-auto relative scrollbar-none"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-5 p-2 rounded-full hover:bg-foreground/5 text-muted hover:text-foreground transition-colors cursor-pointer"
                    aria-label={t("projects.closeLabel")}
                  >
                    <X size={16} />
                  </button>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4 sm:mb-5 pr-8">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-accent-muted text-accent shrink-0 mt-0.5">
                      {selectedProject.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  {/* Quick Access Action Bar at TOP */}
                  {(selectedProject.github || selectedProject.link) ? (
                    <div className="flex flex-wrap items-center gap-2.5 mb-6 pb-5 border-b border-border/70">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-2 px-4 rounded-xl bg-foreground text-background hover:opacity-90 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                        >
                          <GithubIcon size={14} />
                          {t("projects.codeBtn")}
                        </a>
                      )}
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-2 px-4 rounded-xl border border-border bg-card-bg hover:bg-foreground/[0.04] text-xs font-semibold text-foreground transition-colors cursor-pointer"
                        >
                          <ExternalLink size={14} />
                          {t("projects.siteBtn")}
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center mb-6 pb-5 border-b border-border/70">
                      <span className="text-[10px] font-semibold text-muted bg-foreground/[0.02] border border-border/50 px-3 py-1.5 rounded-lg cursor-default">
                        {t("projects.privateProject")}
                      </span>
                    </div>
                  )}

                  {/* Detailed description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal mb-6 sm:mb-8 whitespace-pre-line">
                    {selectedProject.description}
                  </p>

                  {/* Tags list with official logos */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground opacity-60 mb-3">
                      {t("projects.techHeader")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <TechBadge key={idx} name={tag} size="md" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
