"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import SiteHeader from "./header"
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
export default function home() {
  useEffect(() => {
    // Agregamos la clase css para las animaciones al cargar la página
    document.documentElement.style.scrollBehavior = "smooth";

    // Scroll to the top on mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[rgba(61,42,47,1)] pt-2">
      <div className="flex w-full flex-col items-center px-[9px] max-md:max-w-full">
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
  )
}

