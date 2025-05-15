import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useIsMobile } from "../../hooks/use-mobile";
// Componente Link compatible con Next.js y React Router
import { ReactNode } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
      // Close mobile menu after clicking
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Navigation links data
  const navLinks = [
    {
      id: "home",
      label: t('home'),
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0e9e376606a9c0b87eb8885e1d6425aad99aa9e?placeholderIfAbsent=true"
    },
    {
      id: "projects",
      label: t('projects'),
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/353c34eda4c5850cb3af71b826f89b15a827d6b4?placeholderIfAbsent=true"
    },
    {
      id: "about",
      label: t('about'),
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdb03743723d1bed5e8fb772cee4c2c14a41e8dd?placeholderIfAbsent=true"
    },
    {
      id: "testimonials",
      label: t('testimonials.title'),
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/155f892b078bc6c37d859942773706edf59b2835?placeholderIfAbsent=true"
    },
    {
      id: "contact",
      label: t('contact'),
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90a33ceee541198c7559562b859b011eabc13668?placeholderIfAbsent=true"
    }
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-portfolio-secondary shadow-[0px_2px_10px_rgba(0,0,0,0.1)] self-stretch flex w-full items-center gap-5 flex-wrap justify-between px-4 md:px-16 py-[27px] max-md:py-4 z-50 ${sticky ? "fixed top-0 animate-fadeDown" : ""
        }`}
    >
      <div className="self-stretch flex items-stretch gap-2 text-xl font-semibold">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f41305f687c60d8351fcabb15cd007b5487fb79?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1] object-contain w-8 shrink-0"
        />
        <div className="basis-auto grow shrink text-portfolio-text font-poppins">
          {t('portfolio')}
        </div>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="self-stretch flex items-stretch gap-[40px_63px] text-base text-portfolio-text font-medium flex-wrap my-auto max-md:max-w-full">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-stretch gap-2 whitespace-nowrap transition-colors font-poppins ${activeSection === link.id ? "text-portfolio-accent" : ""}`}
            >
              <img
                src={link.icon}
                alt={`${link.label} icon`}
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{link.label}</span>
            </motion.a>
          ))}
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-portfolio-text p-2 rounded-md hover:bg-portfolio-accent/30 transition-colors"
          aria-label="Menu"
        >
          <Menu size={24} />
        </motion.button>
      )}

      {/* Desktop Controls (Language toggle + Theme toggle) */}
      {!isMobile && (
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="self-stretch flex items-center gap-2.5 text-[13px] text-portfolio-text font-bold whitespace-nowrap text-center my-auto cursor-pointer px-3 py-1 rounded-md hover:bg-portfolio-accent/30 transition-colors font-poppins"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7b9d477cc3f205c0f2c91cbb7e492c3c7275c5?placeholderIfAbsent=true"
              alt="Language icon"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
            <div>{t('switch.lang')}</div>
          </motion.button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[77px] left-0 right-0 bg-portfolio-secondary z-40 border-t border-portfolio-border shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={scrollToSection(link.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 p-3 rounded-md font-poppins ${activeSection === link.id ? "bg-portfolio-primary text-portfolio-accent" : "text-portfolio-text"}`}
                >
                  <img
                    src={link.icon}
                    alt={`${link.label} icon`}
                    className="aspect-[1] object-contain w-5"
                  />
                  <span>{link.label}</span>
                </motion.a>
              ))}

              {/* Mobile Controls (Theme Toggle + Language Toggle) */}
              <div className="flex items-center gap-4 p-3">
                <ThemeToggle />

                <motion.button
                  onClick={toggleLanguage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 text-portfolio-text font-poppins"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7b9d477cc3f205c0f2c91cbb7e492c3c7275c5?placeholderIfAbsent=true"
                    alt="Language icon"
                    className="aspect-[1] object-contain w-5"
                  />
                  <div>{t('switch.lang')}</div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
