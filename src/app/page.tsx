import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {/* Section 1: Hero Intro */}
        <Hero />

        {/* Section 2: About Me (Psychology + Tech) */}
        <About />

        {/* Section 3: Professional Experience & Academics */}
        <Experience />

        {/* Section 4: Skills Matrix */}
        <Skills />

        {/* Section 5: Highlights / Projects showcase */}
        <Projects />

        {/* Section 6: Contact details & footer */}
        <Contact />
      </main>
    </>
  );
}
