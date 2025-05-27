import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { motion } from "framer-motion";

// Componente Link compatible con Next.js y React Router
interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  // En un proyecto Next.js real, importaríamos Link de next/link
  // y usaríamos <Link href={to}><a className={className}>{children}</a></Link>
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-portfolio-secondary border-t border-portfolio-border">
      <div className="max-w-[1409px] mx-auto px-4 sm:px-8 lg:px-[70px] py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col text-base font-normal text-portfolio-text">
            <div className="flex items-stretch gap-3 text-xl font-bold whitespace-nowrap tracking-[0.5px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34ecfbe2f31c3f6ccbcc7e512a558de5907d0b0?placeholderIfAbsent=true"
                alt="Contact"
                className="aspect-[1] object-contain w-6 shrink-0"
              />
              <div>{t('footer.contact')}</div>
            </div>
            <div className="flex items-stretch gap-3 mt-[37px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/747618e7d1a76a3e0796915de98dc300195e1187?placeholderIfAbsent=true"
                alt="Location"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <div className="basis-auto">{t('footer.location')}</div>
            </div>
            <div className="flex items-stretch gap-3 mt-[25px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb34e8700cfbe505757e7de820b0cc7d07b5998?placeholderIfAbsent=true"
                alt="Phone"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <div className="basis-auto">+57 (321)971-0852</div>
            </div>
            <div className="self-stretch flex items-stretch gap-3 whitespace-nowrap mt-[25px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff6fac8d99426ad9106ea5a9a827370858c993d?placeholderIfAbsent=true"
                alt="Email"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <div className="grow shrink w-[191px]">riverflorez.04@gmail.com</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-base font-normal text-portfolio-text">
            <div className="flex items-stretch gap-3 text-xl font-bold whitespace-nowrap tracking-[0.5px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0feddaadd093cd06029940673eb2f8baedaf1a60?placeholderIfAbsent=true"
                alt="Navigation"
                className="aspect-[1] object-contain w-6 shrink-0"
              />
              <div>{t('footer.sections')}</div>
            </div>
            <a href="#home" onClick={scrollToSection('home')} className="flex items-stretch gap-3 whitespace-nowrap mt-[37px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0feddaadd093cd06029940673eb2f8baedaf1a60?placeholderIfAbsent=true"
                alt="Home"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{t('home')}</span>
            </a>
            <a href="#about" onClick={scrollToSection('about')} className="flex items-stretch gap-3 mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79025cdbc45cd67bd942542b7c862b571cfa24?placeholderIfAbsent=true"
                alt="About"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{t('about')}</span>
            </a>
            <a href="#projects" onClick={scrollToSection('projects')} className="flex items-stretch gap-3 mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79025cdbc45cd67bd942542b7c862b571cfa24?placeholderIfAbsent=true"
                alt="Projects"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{t('my.projects')}</span>
            </a>
            <a href="#testimonials" onClick={scrollToSection('testimonials')} className="flex items-stretch gap-3 mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79025cdbc45cd67bd942542b7c862b571cfa24?placeholderIfAbsent=true"
                alt="Testimonials"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{t('testimonials.title')}</span>
            </a>
            <a href="#contact" onClick={scrollToSection('contact')} className="flex items-stretch gap-3 mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79025cdbc45cd67bd942542b7c862b571cfa24?placeholderIfAbsent=true"
                alt="Contact"
                className="aspect-[1] object-contain w-5 shrink-0"
              />
              <span>{t('contact.title')}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-portfolio-text/70 text-sm mt-12">
          © {new Date().getFullYear()} River Florez. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
