
import React from "react";
import ContactForm from "../ui/ContactForm";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="bg-[rgba(61,42,47,1)] flex flex-col items-center py-16" aria-label="Contact">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[56px] font-bold text-center text-white max-md:text-[40px]"
      >
        {t('contact.title')}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[rgba(229,214,218,1)] text-2xl font-normal text-center mt-[51px] max-md:max-w-full max-md:mt-10"
      >
        {t('contact.subtitle')}
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-[rgba(229,214,218,1)] text-lg font-normal leading-[29px] text-center mt-6 max-md:max-w-full"
      >
        {t('contact.description')}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-[rgba(229,214,218,1)] text-lg font-normal text-center mt-16 max-md:mt-10"
      >
        {t('contact.or')}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex w-[222px] max-w-full items-stretch gap-5 justify-between mt-[29px]"
      >
        <motion.a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cbbe32a312ed81eca2aba34b43b6ce7ded1cb9d?placeholderIfAbsent=true"
            alt="GitHub"
            className="aspect-[1] object-contain w-[58px] shrink-0 rounded-[29px]"
          />
        </motion.a>
        <motion.a 
          href="https://linkedin.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1fa3fe95d0d675f56d5d794bb120b4aa484283c?placeholderIfAbsent=true"
            alt="LinkedIn"
            className="aspect-[1] object-contain w-[58px] shrink-0 rounded-[29px]"
          />
        </motion.a>
        <motion.a 
          href="https://twitter.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c32b51d7fd12c8d30aacd6f3ea43c23f169e6fd1?placeholderIfAbsent=true"
            alt="Twitter"
            className="aspect-[1] object-contain w-[58px] shrink-0 rounded-[29px]"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;

