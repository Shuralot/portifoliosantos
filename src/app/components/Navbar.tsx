"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("inicio");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.inicio"), href: "#inicio", key: "inicio" },
    { label: t("nav.sobre"), href: "#sobre", key: "sobre" },
    { label: t("nav.experiencia"), href: "#experiencia", key: "experiencia" },
    { label: t("nav.habilidades"), href: "#habilidades", key: "habilidades" },
    { label: t("nav.projetos"), href: "#projetos", key: "projetos" },
    { label: t("nav.contato"), href: "#contato", key: "contato" },
  ];

  // Monitor current scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar height

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]); // Re-run when language changes since navbar dimensions or headings might shift slightly

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl rounded-full border border-border bg-nav-bg backdrop-blur-md px-3 md:px-4 py-2 flex items-center justify-between shadow-sm"
      >
        {/* Name / Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="text-xs md:text-sm font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity pl-2 whitespace-nowrap"
        >
          Júlio Santos
        </a>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoveredSection(item.key)}
                onMouseLeave={() => setHoveredSection(null)}
                className="relative px-2.5 py-1.5 text-[11px] lg:text-xs font-medium transition-colors duration-200 text-muted hover:text-foreground"
              >
                {/* Active Section Highlight */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Indicator */}
                {hoveredSection === item.key && !isActive && (
                  <motion.span
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-foreground/2 dark:bg-foreground/5 rounded-full -z-15"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                
                <span className={isActive ? "text-foreground font-semibold" : ""}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons (Language Toggle + Theme Toggle + Mobile Menu Trigger) */}
        <div className="flex items-center gap-1.5 md:gap-2 pr-1">
          
          {/* Language Toggle Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-border bg-foreground/[0.02] dark:bg-foreground/[0.04] text-[10px] font-bold text-muted hover:text-foreground hover:border-muted/50 transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Switch Language / Alternar Idioma"
          >
            <Globe size={11} />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-18 left-4 right-4 md:hidden border border-border bg-card-bg/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl z-40"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                      isActive 
                        ? "bg-foreground/5 text-foreground font-semibold" 
                        : "text-muted hover:bg-foreground/2 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
