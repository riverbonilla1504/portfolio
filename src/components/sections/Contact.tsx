
import React from "react";
import ContactForm from "../ui/ContactForm";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "@/contexts/ThemeContext";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
const Contact: React.FC = () => {
  const { t } = useTranslation();

  const ensureString = (value: any): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join(", ");
    return '';
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center py-16 mx-4 my-8 md:mx-12"
      aria-label="Contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[56px] font-bold text-center text-portfolio-text max-md:text-[40px]"
      >
        {ensureString(t('contact.title'))}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-portfolio-text text-2xl font-normal text-center mt-[51px] max-md:max-w-full max-md:mt-10"
      >
        {ensureString(t('contact.subtitle'))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-portfolio-text text-lg font-normal leading-[29px] text-center mt-6 max-md:max-w-full"
      >
        {ensureString(t('contact.description'))}
      </motion.p>

      <div className="w-full flex flex-col gap-8 mt-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 w-full max-w-lg mx-auto "
        >
          <ContactForm />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full flex flex-col items-center  gap-6"
        >
          <div className="card-glassflex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-portfolio-text">
              <Mail className="h-5 w-5 text-portfolio-accent" />
              <a href="mailto:riverflorez.04@gmail.com" className="hover:text-portfolio-accent transition-colors">
                {ensureString(t('contact.info.email'))}
              </a>
            </div>

            <div className="flex items-center gap-3 text-portfolio-text">
              <Phone className="h-5 w-5 text-portfolio-accent" />
              <a href="tel:+573219710852" className="hover:text-portfolio-accent transition-colors">
                {ensureString(t('contact.info.phone'))}
              </a>
            </div>

            <div className="flex items-center gap-3 text-portfolio-text">
              <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{ensureString(t('contact.info.location'))}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-5 mt-4"
          >
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface/80 transition-colors"
            >
              <Github className="h-6 w-6 text-portfolio-text" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface/80 transition-colors"
            >
              <Linkedin className="h-6 w-6 text-portfolio-text" />
            </motion.a>
            <motion.a
              href="mailto:riverflorez.04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface/80 transition-colors"
            >
              <Mail className="h-6 w-6 text-portfolio-text" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
