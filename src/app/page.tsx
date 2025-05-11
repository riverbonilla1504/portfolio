"use client"

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  const [initialLanguage, setInitialLanguage] = useState("en");

  useEffect(() => {
    // Obtener el idioma inicial desde las cookies
    const language = document.cookie
      .split("; ")
      .find((row) => row.startsWith("language="))
      ?.split("=")[1];
    setInitialLanguage(language === "es" ? "es" : "en");

    // Agregamos la clase css para las animaciones al cargar la página
    document.documentElement.style.scrollBehavior = "smooth";
    // Lock horizontal scroll
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden"; // Also lock overflow on html element
    document.body.style.width = "100%"; // Force body to be 100% width

    // Scroll to the top on mount
    window.scrollTo(0, 0);
    return () => {
      // Cleanup when component unmounts
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <div className="bg-portfolio-primary pt-2 overflow-x-hidden w-full font-poppins">
        <div className="flex w-full flex-col items-center">
          <Header />
          <section id="home">
            <Hero />
          </section>
          <Projects />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

