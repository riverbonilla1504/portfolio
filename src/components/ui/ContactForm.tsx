
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[rgba(52,29,37,1)] shadow-[0px_8px_32px_rgba(0,0,0,0.1)] border flex w-[1024px] max-w-full flex-col items-stretch text-[15px] text-[rgba(248,242,244,1)] font-medium p-[41px] rounded-2xl border-[rgba(204,160,169,0.1)] border-solid max-md:mt-10 max-md:px-5"
    >
      <div className="flex w-[552px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <label htmlFor="name">{t('contact.name')}</label>
        <label htmlFor="email">{t('contact.email')}</label>
      </div>
      <div className="flex items-stretch gap-6 text-[rgba(117,117,117,1)] font-normal flex-wrap mt-[15px] max-md:max-w-full">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contact.name')}
          className="bg-[rgba(61,42,47,0.7)] overflow-hidden grow shrink-0 basis-0 w-fit p-[18px] rounded-xl border-[rgba(114,87,96,1)] border-solid border-2 focus:border-[rgba(204,160,169,1)] outline-none transition-all max-md:max-w-full max-md:pr-5"
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
          placeholder={t('contact.email')}
          className="bg-[rgba(61,42,47,0.7)] overflow-hidden grow shrink-0 basis-0 w-fit p-[18px] rounded-xl border-[rgba(114,87,96,1)] border-solid border-2 focus:border-[rgba(204,160,169,1)] outline-none transition-all max-md:max-w-full max-md:pr-5"
          required
        />
      </div>
      <label htmlFor="subject" className="mt-12 max-md:mt-10">
        {t('contact.subject')}
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        id="subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        placeholder={t('contact.subject')}
        className="bg-[rgba(61,42,47,0.7)] overflow-hidden text-[rgba(117,117,117,1)] font-normal mt-[15px] p-[18px] rounded-xl border-[rgba(114,87,96,1)] border-solid border-2 focus:border-[rgba(204,160,169,1)] outline-none transition-all max-md:max-w-full max-md:pr-5"
        required
      />
      <label htmlFor="message" className="mt-6">
        {t('contact.message')}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t('contact.message')}
        className="bg-[rgba(61,42,47,0.7)] overflow-hidden text-base text-[rgba(117,117,117,1)] font-normal mt-3 pt-3.5 pb-[90px] px-[18px] rounded-xl border-[rgba(114,87,96,1)] border-solid border-2 focus:border-[rgba(204,160,169,1)] outline-none transition-all max-md:max-w-full max-md:pr-5 max-md:pb-[110px]"
        required
      />
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-[rgba(204,160,169,1)] hover:bg-[rgba(204,160,169,0.8)] flex w-full flex-col items-center text-base text-white font-bold text-center justify-center mt-6 px-[70px] py-4 rounded-xl transition-colors max-md:max-w-full max-md:px-5 disabled:opacity-70"
      >
        <div className="flex w-[148px] max-w-full items-stretch gap-[13px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69725b2d93cb707ed215b98ec8b85ab1fd056ce5?placeholderIfAbsent=true"
            alt="Send"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <span className="grow shrink w-[111px] my-auto">
            {isSubmitting ? t('contact.sending') : submitSuccess ? t('contact.success') : t('contact.send')}
          </span>
        </div>
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;

