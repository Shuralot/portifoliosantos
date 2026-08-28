"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddress = "juliorasantos@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar: ", err);
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-24 px-4 sm:px-6 bg-foreground/[0.01] border-t border-border/40 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
          {t("contact.tag")}
        </span>
        <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
          {t("contact.title")}
        </h2>
        <p className="text-xs sm:text-base text-muted max-w-lg mb-10 sm:mb-12 leading-relaxed">
          {t("contact.subtitle")}
        </p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12 sm:mb-16 text-left">
          
          {/* Email Card with Copy interaction */}
          <div 
            onClick={handleCopyEmail}
            className="bg-card-bg border border-border/80 hover:border-red-500/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between cursor-pointer group transition-all duration-300 select-none overflow-hidden"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/5 dark:bg-red-500/10 text-[#ea4335] flex-shrink-0">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase block">
                  {t("contact.emailLabel")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                  {emailAddress}
                </span>
              </div>
            </div>
            
            {/* Copy Icon / Feedback */}
            <div className="p-1.5 sm:p-2 rounded-lg bg-foreground/[0.02] dark:bg-foreground/[0.04] text-muted group-hover:text-[#ea4335] transition-colors flex-shrink-0 ml-2">
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1"
                  >
                    <Check size={13} className="text-[#ea4335]" />
                    <span className="text-[9px] font-bold text-[#ea4335] hidden xs:inline">{t("contact.copied")}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy size={13} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/juliorasantos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-bg border border-border/80 hover:border-[#0a66c2]/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between group transition-all duration-300 min-w-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0a66c2]/5 dark:bg-[#0a66c2]/10 text-[#0a66c2] flex-shrink-0">
                <LinkedinIcon size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase block">
                  {t("contact.linkedinLabel")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                  linkedin.com/in/juliorasantos
                </span>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-foreground/[0.02] dark:bg-foreground/[0.04] text-muted group-hover:text-[#0a66c2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0">
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Shuralot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-bg border border-border/80 hover:border-foreground/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between group transition-all duration-300 min-w-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-foreground/[0.04] dark:bg-foreground/[0.08] text-foreground flex-shrink-0">
                <GithubIcon size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase block">
                  {t("contact.githubLabel")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                  {t("contact.githubVal")}
                </span>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-foreground/[0.02] dark:bg-foreground/[0.04] text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0">
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* Telephone / WhatsApp Card */}
          <a
            href={t("contact.whatsappLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-bg border border-border/80 hover:border-[#25d366]/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between group transition-all duration-300 min-w-0 cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#25d366]/5 dark:bg-[#25d366]/10 text-[#25d366] flex-shrink-0">
                <Phone size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase block">
                  {t("contact.whatsappLabel")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                  {t("contact.whatsappVal")}
                </span>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-foreground/[0.02] dark:bg-foreground/[0.04] text-muted group-hover:text-[#25d366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0">
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* Address / Location Card */}
          <div className="bg-card-bg border border-border/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3 min-w-0 sm:col-span-2 justify-center sm:justify-start">
            <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/5 dark:bg-red-500/10 text-[#ea4335] flex-shrink-0">
              <MapPin size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase block">
                {t("contact.locationLabel")}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                {t("contact.locationVal")}
              </span>
            </div>
          </div>

        </div>

        {/* Legal / Copyright Footer */}
        <div className="w-full border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-normal">
          <span>&copy; {new Date().getFullYear()} Júlio Santos.</span>
          <span>{t("contact.designedWith")}</span>
        </div>
      </div>
    </section>
  );
}
