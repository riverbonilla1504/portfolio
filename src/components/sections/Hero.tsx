import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

// Componente Link compatible con Next.js y React Router
const Link = ({ to, className, children }) => {
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
      className="bg-[rgba(61,42,47,1)] self-stretch flex w-full flex-col overflow-hidden items-center pt-[84px] px-[70px] max-md:max-w-full max-md:px-5"
      aria-label="Introduction"
    >
      
      <div className="w-full max-w-[1483px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[67%] max-md:w-full max-md:ml-0">
            
            <div className="flex grow items-start gap-5 font-normal flex-wrap justify-between mt-[85px] max-md:max-w-full max-md:mt-10">
              <div
                className="bg-[rgba(204,160,169,1)] flex w-[100px] shrink-0 h-[100px] rounded-[50px]"
                aria-hidden="true"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col mt-[54px] max-md:max-w-full max-md:mt-10"
              >
                
                <h1
                  className="text-[rgba(229,214,218,1)] text-[56px] leading-[67px] w-[243px] max-md:text-[40px] max-md:leading-[54px]"
                >
                  {t('greeting')}
                  <br />
                  River
                </h1>
                <h2
                  className="text-[rgba(229,214,218,1)] text-[32px] self-stretch mt-[58px] max-md:max-w-full max-md:mt-10"
                >
                  {t('role')}
                </h2>
                <p
                  className="text-[rgba(229,214,218,1)] text-lg leading-7 mt-[35px] max-md:max-w-full"
                >
                  {t('hero-description')}
                </p>
                
                <div className="flex items-stretch gap-4 text-[13px] font-semibold text-center mt-10">
                  <Link
                    to="/projects"
                    className="bg-[rgba(204,160,169,1)] text-white px-6 py-4 rounded-lg max-md:px-5 hover:bg-[rgba(204,160,169,0.9)] transition-colors"
                  >
                    {t('view-projects')}
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[rgba(204,160,169,1)] whitespace-nowrap px-[27px] py-[18px] rounded-lg border-[rgba(204,160,169,1)] border-solid border-2 max-md:px-5 hover:bg-[rgba(204,160,169,0.1)] transition-colors"
                  >
                    {t('contact-me')}
                  </Link>
                </div>
                
                <div
                  className="bg-[rgba(204,160,169,1)] self-center flex w-[120px] shrink-0 h-[83px] mt-[85px] rounded-[60px] max-md:mt-10"
                  aria-hidden="true"
                />
              </motion.div>
              <div
                className="bg-[rgba(204,160,169,1)] flex w-20 shrink-0 h-20 my-auto rounded-[40px]"
                aria-hidden="true"
              />
            </div>
          </div>
          
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full max-md:mt-10">
              <div
                className="bg-[rgba(204,160,169,1)] flex w-[60px] shrink-0 h-[60px] ml-[76px] rounded-[30px] max-md:ml-2.5"
                aria-hidden="true"
              />
              <div className="mt-[17px]">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[66%] max-md:w-full max-md:ml-0">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b3910733c9520e0f4aeaf63c66587081bbe4bc?placeholderIfAbsent=true"
                      alt={t('profile-image-alt')}
                      className="aspect-[0.64] object-contain w-full z-10 mr-[-31px] rounded-[217px]"
                    />
                  </div>
                  <div className="w-[34%] ml-5 max-md:w-full max-md:ml-0">
                    <div
                      className="bg-[rgba(204,160,169,1)] flex w-[150px] shrink-0 h-[150px] mt-[345px] mx-auto rounded-[75px] max-md:mt-10"
                      aria-hidden="true"
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
