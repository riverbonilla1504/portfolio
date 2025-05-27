import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/config/emailjs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Helper function to ensure we always get a string
  const ensureString = (value: any): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join(", ");
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'riverflorez.04@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card-glass bg-portfolio-surface shadow-[0px_8px_32px_rgba(0,0,0,0.1)] border flex w-full max-w-[1024px] flex-col items-stretch text-[15px] text-portfolio-text font-medium p-5 md:p-[41px] rounded-2xl border-portfolio-border max-md:mt-6"
    >
      {/* Name & Email Labels */}
      <div className="flex w-full md:w-[552px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <label htmlFor="name">{ensureString(t('contact.name'))}</label>
        <label htmlFor="email" className="mt-4 md:mt-0">{ensureString(t('contact.email'))}</label>
      </div>

      {/* Name & Email Inputs */}
      <div className="flex w-full md:w-[552px] max-w-full items-stretch gap-5 flex-wrap mt-2">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={ensureString(t('contact.name'))}
          className="bg-portfolio-surface/70 overflow-hidden grow w-full md:basis-0 p-[18px] rounded-xl border-portfolio-border border-solid border-2 focus:border-portfolio-accent outline-none transition-all"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={ensureString(t('contact.email'))}
          className="bg-portfolio-surface/70 overflow-hidden grow w-full md:basis-0 p-[18px] rounded-xl border-portfolio-border border-solid border-2 focus:border-portfolio-accent outline-none transition-all"
          required
        />
      </div>

      {/* Subject */}
      <label htmlFor="subject" className="mt-8 md:mt-12">
        {ensureString(t('contact.subject'))}
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        id="subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        placeholder={ensureString(t('contact.subject'))}
        className="bg-portfolio-surface/70 overflow-hidden text-portfolio-text/70 font-normal mt-[15px] p-[18px] rounded-xl border-portfolio-border border-solid border-2 focus:border-portfolio-accent outline-none transition-all"
        required
      />

      {/* Message */}
      <label htmlFor="message" className="mt-6">
        {ensureString(t('contact.message'))}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={ensureString(t('contact.message'))}
        className="bg-portfolio-surface/70 overflow-hidden text-base text-portfolio-text/70 font-normal mt-3 pt-3.5 pb-[90px] px-[18px] rounded-xl border-portfolio-border border-solid border-2 focus:border-portfolio-accent outline-none transition-all h-36 md:h-auto"
        required
      />

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-portfolio-accent hover:bg-portfolio-accent/80 flex w-full flex-col items-center text-base text-white font-bold text-center justify-center mt-6 px-4 md:px-[70px] py-4 rounded-xl transition-colors disabled:opacity-70"
      >
        <div className="flex w-[148px] max-w-full items-stretch gap-[13px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69725b2d93cb707ed215b98ec8b85ab1fd056ce5?placeholderIfAbsent=true"
            alt="Send"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span className="grow shrink w-[111px] my-auto">
            {isSubmitting
              ? ensureString(t('contact.sending'))
              : submitSuccess
                ? ensureString(t('contact.success'))
                : submitError
                  ? ensureString(t('contact.error'))
                  : ensureString(t('contact.send'))}
          </span>
        </div>
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
