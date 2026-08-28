import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from "./components/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Complete SEO Optimization Metadata - Branded as Júlio Santos
export const metadata: Metadata = {
  title: {
    default: "Júlio Santos | Dev Full Stack & DevOps",
    template: "%s | Júlio Santos",
  },
  description: "Portfólio profissional de Júlio Santos. Especialista em DevOps (CESAR School) e Desenvolvedor Full Stack, unindo engenharia de software à visão humana da Psicologia.",
  keywords: [
    "DevOps",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "Python",
    "Docker",
    "Linux Red Hat",
    "Psicologia",
    "CESAR School",
    "Piedade",
    "Jaboatão dos Guararapes",
    "Recife",
    "Portfólio Desenvolvedor",
    "Júlio Santos"
  ],
  authors: [{ name: "Júlio Santos", url: "https://github.com/Shuralot" }],
  creator: "Júlio Santos",
  publisher: "Júlio Santos",
  metadataBase: new URL("https://portifoliosantos.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Júlio Santos | Dev Full Stack & DevOps",
    description: "Sistemas precisos focados em pessoas. Conheça a jornada, habilidades e principais projetos de Júlio Santos.",
    url: "https://portifoliosantos.vercel.app",
    siteName: "Portfólio Júlio Santos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/avatar-front.png",
        width: 800,
        height: 800,
        alt: "Júlio Santos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Júlio Santos | Dev Full Stack & DevOps",
    description: "Sistemas precisos focados em pessoas. Conheça o portfólio de Júlio Santos.",
    images: ["/avatar-front.png"],
  },
};

// Rich Structured Data Schema JSON-LD - Branded as Júlio Santos
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Júlio Santos",
  "jobTitle": "Full Stack & DevOps Developer",
  "url": "https://portifoliosantos.vercel.app",
  "image": "https://portifoliosantos.vercel.app/avatar-front.png",
  "sameAs": [
    "https://linkedin.com/in/juliorasantos",
    "https://github.com/Shuralot"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaboatão dos Guararapes",
    "addressRegion": "PE",
    "addressCountry": "BR"
  },
  "knowsAbout": [
    "Full Stack Development",
    "DevOps",
    "Docker",
    "Next.js",
    "React",
    "Python",
    "PostgreSQL",
    "Node.js",
    "Linux Red Hat",
    "Psychology"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            {children}
            {/* Inject JSON-LD Schema.org Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
