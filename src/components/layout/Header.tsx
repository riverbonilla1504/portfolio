import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

// Componente Link compatible con Next.js y React Router
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, onClick, className, children }) => {
  // En un proyecto Next.js real, importaríamos Link de next/link
  // y usaríamos <Link href={href}><a className={className}>{children}</a></Link>

  // Esta versión funciona tanto en React Router como en Next.js básico
  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const { t, toggleLanguage, currentLanguage } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hacer que el header sea sticky
      setSticky(window.scrollY > 50);

      // Detección de sección activa
      const sections = ["home", "projects", "about", "testimonials", "contact"];
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-[rgba(52,29,37,1)] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] self-stretch flex w-full items-center gap-5 flex-wrap justify-between px-16 py-[27px] max-md:px-5 z-50 ${sticky ? "fixed top-0 animate-fadeDown" : ""
        }`}
    >
      <div className="self-stretch flex items-stretch gap-2 text-xl font-semibold">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f41305f687c60d8351fcabb15cd007b5487fb79?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1] object-contain w-8 shrink-0"
        />
        <div className="basis-auto grow shrink text-white">
          {t('portfolio')}
        </div>
      </div>

      <nav className="self-stretch flex items-stretch gap-[40px_63px] text-base text-white font-medium flex-wrap my-auto max-md:max-w-full">
        <motion.a
          href="#home"
          onClick={scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-stretch gap-2 whitespace-nowrap transition-colors ${activeSection === "home" ? "text-[rgba(204,160,169,1)]" : ""}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e9e376606a9c0b87eb8885e1d6425aad99aa9e?placeholderIfAbsent=true"
            alt="Home icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span>{t('home')}</span>
        </motion.a>
        <motion.a
          href="#projects"
          onClick={scrollToSection("projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-stretch gap-2 whitespace-nowrap transition-colors ${activeSection === "projects" ? "text-[rgba(204,160,169,1)]" : ""}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/353c34eda4c5850cb3af71b826f89b15a827d6b4?placeholderIfAbsent=true"
            alt="Projects icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span>{t('projects')}</span>
        </motion.a>
        <motion.a
          href="#about"
          onClick={scrollToSection("about")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-stretch gap-2 transition-colors ${activeSection === "about" ? "text-[rgba(204,160,169,1)]" : ""}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb03743723d1bed5e8fb772cee4c2c14a41e8dd?placeholderIfAbsent=true"
            alt="About icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span>{t('about')}</span>
        </motion.a>
        <motion.a
          href="#contact"
          onClick={scrollToSection("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-stretch gap-2 whitespace-nowrap transition-colors ${activeSection === "contact" || activeSection === "testimonials" ? "text-[rgba(204,160,169,1)]" : ""}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a33ceee541198c7559562b859b011eabc13668?placeholderIfAbsent=true"
            alt="Contact icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span>{t('contact')}</span>
        </motion.a>
      </nav>

      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="self-stretch flex items-center gap-2.5 text-[13px] text-white font-bold whitespace-nowrap text-center my-auto cursor-pointer px-3 py-1 rounded-md hover:bg-[rgba(204,160,169,0.3)] transition-colors"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7b9d477cc3f205c0f2c91cbb7e492c3c7275c5?placeholderIfAbsent=true"
          alt="Language icon"
          className="aspect-[1] object-contain w-5 shrink-0"
        />
        <div>{t('switch-lang')}</div>
      </motion.button>
    </motion.div>
  );
};

export default Header;
