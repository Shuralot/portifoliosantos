import React from "react";

type TechBadgeProps = {
  name: string;
  size?: "sm" | "md";
  className?: string;
};

export function getTechLogo(name: string, size = 13): React.ReactNode {
  const norm = name.trim().toLowerCase();

  // Next.js
  if (norm.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M16.5 17L8.5 6.5H7v11h1.8v-7.8l7.2 9.5c.5-.4 1-.7 1.5-1.2h-1zM15 6.5h1.8V12H15V6.5z"
          fill="var(--background, #000)"
          className="dark:fill-black fill-white"
        />
      </svg>
    );
  }

  // React
  if (norm === "react" || norm.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("typescript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M4.5 9h6.5v1.8H8.8v7.2H6.7v-7.2H4.5V9zm7.3 1.8h5.2v1.6h-3.4v1.5h2.8a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h-4.6V17h3.3v-1.3h-2.3a2 2 0 0 1-2-2v-1.1a2 2 0 0 1 1-1.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes("javascript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 12.5v4c0 1.5.8 2.2 2.1 2.2.9 0 1.6-.4 2-.9l-1.1-1.3c-.3.3-.5.4-.8.4-.5 0-.7-.3-.7-.9v-3.5H7zm6.5 0c-.8 0-1.6.5-1.6 1.4 0 1.1.9 1.5 1.9 1.8 1 .3 1.5.6 1.5 1.2 0 .7-.6 1.1-1.4 1.1-1 0-1.6-.4-2-1.1l-1.1 1.3c.7 1 1.8 1.6 3.1 1.6 1.8 0 3-1 3-2.6 0-1.4-1-1.9-2.1-2.2-1-.3-1.4-.5-1.4-1 0-.5.4-.8 1.1-.8.7 0 1.3.3 1.7.7l1.1-1.3c-.7-.8-1.5-1.1-2.7-1.1z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z"
          fill="#539E43"
        />
        <path
          d="M12 5.5l6.5 3.8v7.4L12 20.5l-6.5-3.8V9.3L12 5.5z"
          fill="#333333"
          opacity="0.3"
        />
        <path
          d="M9 10v4.5c0 .9.5 1.4 1.4 1.4.6 0 1.1-.3 1.4-.7v-5.2H10v3.8c-.1.3-.3.4-.6.4-.3 0-.4-.2-.4-.5V10H9zm5 0v5.8h1.4V14h1.5c1 0 1.7-.7 1.7-2s-.7-2-1.7-2H14zm1.4 1.2h1.4c.4 0 .6.3.6.8s-.2.8-.6.8h-1.4v-1.6z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // Socket.IO
  if (norm.includes("socket.io") || norm.includes("socket")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#010101" />
        <path
          d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm1-10h-2.5l-1.5 4.5h3l-1.5 4.5 4.5-5.5h-3.2z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // WebSockets
  if (norm.includes("websocket")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E0356C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="7 10 12 5 17 10" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="17 14 12 19 7 14" />
      </svg>
    );
  }

  // Web Audio API
  if (norm.includes("audio")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round">
        <line x1="4" y1="9" x2="4" y2="15" />
        <line x1="8" y1="5" x2="8" y2="19" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="16" y1="6" x2="16" y2="18" />
        <line x1="20" y1="10" x2="20" y2="14" />
      </svg>
    );
  }

  // Cloudflare
  if (norm.includes("cloudflare")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#F38020">
        <path d="M19.4 10.1a5.4 5.4 0 0 0-5.1-3.6 5.6 5.6 0 0 0-5.4 4A4.3 4.3 0 0 0 4 14.5c0 2.4 2 4.3 4.4 4.3h10.9a3.7 3.7 0 0 0 3.7-3.7 3.8 3.8 0 0 0-3.6-5z" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M22 12.5c-.3 0-1.4.1-2.1.7-.5-.4-1.5-.7-2.6-.5-.3-.9-1.2-1.6-2.3-1.7l-.4-.1-.3.3c-.5.5-.8 1.2-.8 2 0 .2 0 .4.1.6-1.1.1-2 .7-2.5 1.7H2c-.6 0-1 .4-1 1 0 3.9 3.1 7 7 7 4.7 0 8.6-3.4 9.4-8 .7.2 1.5.1 2.1-.3.8-.5 1.5-.7 2.5-.7v-1.5zM6 10H4v2h2v-2zm3 0H7v2h2v-2zm3 0h-2v2h2v-2zm-6-3H4v2h2V7zm3 0H7v2h2V7zm3 0h-2v2h2V7zm3 3h-2v2h2v-2zm0-3h-2v2h2V7z" />
      </svg>
    );
  }

  // Python
  if (norm.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4v2.5h3.3v.5H5.8S2 6 2 10.3c0 4.2 3.3 4.1 3.3 4.1h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1C19.5 2 15.3 2 11.9 2zm-1.8 1.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.3 0 3.1-1.4 3.1-1.4v-2.5h-3.3v-.5h6.3s3.8.4 3.8-3.9c0-4.2-3.3-4.1-3.3-4.1h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1C4.5 22 8.7 22 12.1 22zm1.8-1.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes("postgres")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.4.1.8-.2.8-.6v-2.2c0-.5-.3-.9-.7-1.1-1.3-.7-2.1-2.1-2.1-3.6 0-2.2 1.8-4 4-4 .6 0 1.2.1 1.7.4.4.2.9 0 1.1-.4l.6-1.1c.3-.6 1-.9 1.6-.7 1.8.5 3.1 2.2 3.1 4.1 0 1.7-.9 3.2-2.3 4-.4.2-.6.7-.6 1.1v2.1c0 .4.4.7.8.6C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes("firebase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 19.5L11 3.5l3.2 6.2-9.7 9.8z" fill="#FFA000" />
        <path d="M19.5 19.5l-3.2-13.8L11 3.5l8.5 16z" fill="#F57C00" />
        <path d="M4.5 19.5l7.5 4 7.5-4-5.3-5.3-2.2 4.3-2-3.8-5.5 4.8z" fill="#FFCA28" />
      </svg>
    );
  }

  // Prisma
  if (norm.includes("prisma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19.5L12 3l8 16.5-16 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 3v16.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  // Google Tag Manager
  if (norm.includes("google") || norm.includes("gtm") || norm.includes("tag manager")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#246FDB">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8L12 11.8 5.2 8 12 4.2zM5 9.8l6 3.3v6.7l-6-3.3V9.8zm8 10v-6.7l6-3.3v6.7l-6 3.3z" />
      </svg>
    );
  }

  // Framer Motion
  if (norm.includes("framer")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#0055FF">
        <path d="M4 2h16v7h-8zM4 9h8l8 7H4zM4 16h8v7z" />
      </svg>
    );
  }

  // O(1) Engine / Algorithms
  if (norm.includes("o(1)") || norm.includes("algorithm")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // Event-Driven
  if (norm.includes("event")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }

  // SEO / Local SEO / Advanced SEO
  if (norm.includes("seo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="11 8 13 10 11 12" />
      </svg>
    );
  }

  // Real-time Metrics / Realtime
  if (norm.includes("real-time") || norm.includes("realtime") || norm.includes("metrics")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    );
  }

  // Webhooks
  if (norm.includes("webhook")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    );
  }

  // Chatwoot / Chat / Evolution API
  if (norm.includes("chatwoot") || norm.includes("evolution") || norm.includes("api")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F93FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }

  // PyQt6 / Desktop
  if (norm.includes("pyqt") || norm.includes("qt")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#41CD52">
        <rect x="2" y="3" width="20" height="18" rx="4" />
        <text x="12" y="16" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Qt</text>
      </svg>
    );
  }

  // Mobile-First
  if (norm.includes("mobile")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  }

  // Default fallback: Code tag icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function TechBadge({ name, size = "sm", className = "" }: TechBadgeProps) {
  const isMd = size === "md";
  const iconSize = isMd ? 14 : 12;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg border border-border/70 bg-foreground/[0.02] dark:bg-foreground/[0.04] text-foreground hover:border-accent/40 hover:bg-foreground/[0.05] transition-all duration-200 select-none ${
        isMd ? "text-xs px-2.5 py-1" : "text-[10px] px-2 py-0.5"
      } ${className}`}
    >
      <span className="shrink-0 flex items-center justify-center">
        {getTechLogo(name, iconSize)}
      </span>
      <span className="truncate">{name}</span>
    </span>
  );
}
