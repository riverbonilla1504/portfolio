import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

// Componente Link compatible con Next.js y React Router
interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  // En un proyecto Next.js real, importaríamos Link de next/link
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="self-stretch flex w-full flex-col overflow-hidden items-center pt-8 md:pt-[84px] px-4 sm:px-8 lg:px-[70px]"
      aria-label="Introduction"
    >

      <div className="w-full max-w-[1483px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[67%]">

            <div className="flex flex-wrap items-start gap-5 font-normal justify-between mt-4 md:mt-[85px]">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col mt-4 md:mt-[54px] w-full lg:w-auto"
              >

                <h1
                  className="text-portfolio-text text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[67px] w-full md:w-[243px]"
                >
                  {t('greeting')}
                  <br />
                  River
                </h1>
                <h2
                  className="text-portfolio-text text-2xl md:text-[32px] mt-6 md:mt-[58px]"
                >
                  {t('role')}
                </h2>
                <p
                  className="text-portfolio-text text-base md:text-lg leading-7 mt-4 md:mt-[35px] max-w-xl"
                >
                  {t('hero.description')}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-10">
                  <div className="flex items-center gap-2 text-portfolio-text">
                    <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Pasto, Colombia</span>
                  </div>
                  <div className="flex items-center gap-2 text-portfolio-text">
                    <svg className=" h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m2 6 3 1 4-2 3 2 4-1 6 3v7l-6-3-4 1-3-2-4 2-3-1V6z"></path>
                      <path d="M22 6 2 18"></path>
                    </svg>
                    <span>English: B2</span>
                  </div>
                </div>

                <div className="flex items-stretch gap-4 text-[13px] font-semibold text-center mt-8">
                  <Link
                    to="#projects"
                    className=" card-glass text-portfolio-accent whitespace-nowrap px-4 sm:px-4 py-4 sm:p-4 rounded-lg border-portfolio-accent border-solid border-2 hover:bg-portfolio-accent/10 transition-colors"
                  >
                    {t('view.projects')}
                  </Link>
                  <Link
                    to="#contact"
                    className="card-glass text-portfolio-accent whitespace-nowrap px-4 sm:px-4 py-4 sm:p-4 rounded-lg border-portfolio-accent border-solid border-2 hover:bg-portfolio-accent/10 transition-colors"
                  >
                    {t('contact.me')}
                  </Link>
                </div>


              </motion.div>

            </div>
          </div>

          <div className="w-full lg:w-[33%] flex justify-center">
            <div className="w-full max-w-xs">

              <div className="mt-4 md:mt-[17px]">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[250px]">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b3910733c9520e0f4aeaf63c66587081bbe4bc?placeholderIfAbsent=true"
                      alt={t('profile.image.alt')}
                      className="aspect-[0.64] object-contain w-full z-10 rounded-[217px]"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
