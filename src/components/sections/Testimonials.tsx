
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.ana.name'),
      role: t('testimonials.ana.role'),
      text: t('testimonials.ana.text'),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fa9de8de15c8034ed9bc255856068140859b6b8?placeholderIfAbsent=true"
    },
    {
      id: 2,
      name: t('testimonials.carlos.name'),
      role: t('testimonials.carlos.role'),
      text: t('testimonials.carlos.text'),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/13a10b9fd3c8c5e0a68a0f76c7ae8b42fc5bbfaf?placeholderIfAbsent=true"
    },
    {
      id: 3,
      name: t('testimonials.laura.name'),
      role: t('testimonials.laura.role'),
      text: t('testimonials.laura.text'),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c410d94f73913c1335ca072bb966ec38ee5bbab?placeholderIfAbsent=true"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-[rgba(61,42,47,1)] flex flex-col items-center py-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[56px] font-bold text-center text-white mb-12 max-md:text-[40px]"
      >
        {t('testimonials.title')}
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-4xl relative"
      >
        <div className="flex overflow-hidden">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[rgba(52,29,37,1)] p-8 rounded-2xl shadow-lg w-full"
          >
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[rgba(204,160,169,1)]"
              />
              <p className="text-[rgba(229,214,218,1)] text-lg italic mb-6 leading-relaxed">"{testimonials[activeIndex].text}"</p>
              <h4 className="text-white font-semibold text-xl">{testimonials[activeIndex].name}</h4>
              <p className="text-[rgba(204,160,169,1)]">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={prevTestimonial}
            className="bg-[rgba(204,160,169,0.2)] hover:bg-[rgba(204,160,169,0.4)] transition-all p-3 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-[rgba(204,160,169,1)]' : 'bg-[rgba(204,160,169,0.3)]'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="bg-[rgba(204,160,169,0.2)] hover:bg-[rgba(204,160,169,0.4)] transition-all p-3 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

