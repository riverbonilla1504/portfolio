
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useIsMobile } from "../../hooks/use-mobile";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("skills");
  const isMobile = useIsMobile();

  const tabContents = {
    skills: {
      frontend: t('about.skills.frontend.items'),
      backend: t('about.skills.backend.items')
    },
    experience: [
      {
        title: t('about.experience.fullstack.title'),
        company: t('about.experience.fullstack.company'),
        period: t('about.experience.fullstack.period'),
        description: t('about.experience.fullstack.description')
      },
      {
        title: t('about.experience.backend.title'),
        company: t('about.experience.backend.company'),
        period: t('about.experience.backend.period'),
        description: t('about.experience.backend.description')
      },
      {
        title: t('about.experience.frontend.title'),
        company: t('about.experience.frontend.company'),
        period: t('about.experience.frontend.period'),
        description: t('about.experience.frontend.description')
      }
    ],
    education: [
      {
        degree: t('about.education.software.degree'),
        institution: t('about.education.software.institution'),
        period: t('about.education.software.period'),
        description: t('about.education.software.description')
      },
      {
        degree: t('about.education.technical.degree'),
        institution: t('about.education.technical.institution'),
        period: t('about.education.technical.period'),
        description: t('about.education.technical.description')
      },
      {
        degree: t('about.education.fullstack.degree'),
        institution: t('about.education.fullstack.institution'),
        period: t('about.education.fullstack.period'),
        description: t('about.education.fullstack.description')
      }
    ],
    interests: [
      {
        icon: t('about.interests.web.icon'),
        title: t('about.interests.web.title'),
        description: t('about.interests.web.description')
      },
      {
        icon: t('about.interests.ai.icon'),
        title: t('about.interests.ai.title'),
        description: t('about.interests.ai.description')
      },
      {
        icon: t('about.interests.mobile.icon'),
        title: t('about.interests.mobile.title'),
        description: t('about.interests.mobile.description')
      },
      {
        icon: t('about.interests.cloud.icon'),
        title: t('about.interests.cloud.title'),
        description: t('about.interests.cloud.description')
      }
    ],
    aspirations: [
      {
        icon: t('about.aspirations.architect.icon'),
        title: t('about.aspirations.architect.title'),
        description: t('about.aspirations.architect.description')
      },
      {
        icon: t('about.aspirations.teach.icon'),
        title: t('about.aspirations.teach.title'),
        description: t('about.aspirations.teach.description')
      },
      {
        icon: t('about.aspirations.impact.icon'),
        title: t('about.aspirations.impact.title'),
        description: t('about.aspirations.impact.description')
      },
      {
        icon: t('about.aspirations.startup.icon'),
        title: t('about.aspirations.startup.title'),
        description: t('about.aspirations.startup.description')
      }
    ]
  };

  const tabs = [
    { id: "skills", label: t('about.tabs.skills'), icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/694e8340af5ff91e5bb7c0f306bc346d4f653f81?placeholderIfAbsent=true" },
    { id: "experience", label: t('about.tabs.experience'), icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07bc71ad37f9c488498df07ba927b982f62c12ba?placeholderIfAbsent=true" },
    { id: "education", label: t('about.tabs.education'), icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d4a37623c6d2363945dabb696dfec7db1e1deaf?placeholderIfAbsent=true" },
    { id: "interests", label: t('about.tabs.interests'), icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/155f892b078bc6c37d859942773706edf59b2835?placeholderIfAbsent=true" },
    { id: "aspirations", label: t('about.tabs.aspirations'), icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90a33ceee541198c7559562b859b011eabc13668?placeholderIfAbsent=true" },
  ];

  return (
    <section id="about" className="bg-portfolio-primary flex flex-col items-center py-16 px-4" aria-label="About">
      <div className="bg-portfolio-secondary flex w-2.5 shrink-0 h-2.5 mx-auto mt-8 rounded-[5px]" aria-hidden="true" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-portfolio-text text-4xl md:text-[56px] font-bold text-center mt-9 font-poppins"
      >
        River
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-[264px] overflow-hidden text-xl md:text-2xl text-portfolio-text font-normal text-center mt-10 pb-3 font-poppins"
      >
        {t('about.role')}
      </motion.div>

      {/* Tabs - Improved scrollable container for mobile */}
      <div className="w-full mt-8 md:mt-[65px]">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[13px] text-white font-normal p-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-[9px] px-3 md:px-[25px] py-2 md:py-[13px] rounded-lg transition-colors ${activeTab === tab.id
                ? "bg-portfolio-primary"
                : "bg-portfolio-secondary hover:bg-portfolio-surface/50"
                }`}
              aria-selected={activeTab === tab.id}
            >
              {tab.icon && (
                <img
                  src={tab.icon}
                  alt={`${tab.label} icon`}
                  className="aspect-[1] object-contain w-5 shrink-0"
                />
              )}
              <span className="basis-auto font-poppins">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Skills Content */}
      {activeTab === "skills" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[1201px] mt-12 max-md:mt-8 px-2"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[51px] rounded-2xl border border-portfolio-border bg-portfolio-surface overflow-hidden">
                <h3 className="text-white text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">📱</span>
                  {t('about.skills.frontend.title')}
                </h3>
                <ul className="mt-[26px] space-y-3.5 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {typeof tabContents.skills.frontend === 'string'
                    ? tabContents.skills.frontend.split(', ').map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {skill}
                      </motion.li>
                    ))
                    : (Array.isArray(tabContents.skills.frontend) ? tabContents.skills.frontend : []).map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {skill}
                      </motion.li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[49px] rounded-2xl border border-portfolio-border bg-portfolio-surface overflow-hidden">
                <h3 className="text-white text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">⚙️</span>
                  {t('about.skills.backend.title')}
                </h3>
                <ul className="mt-[26px] space-y-4 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {typeof tabContents.skills.backend === 'string'
                    ? tabContents.skills.backend.split(', ').map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {skill}
                      </motion.li>
                    ))
                    : (Array.isArray(tabContents.skills.backend) ? tabContents.skills.backend : []).map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {skill}
                      </motion.li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Experience Content */}
      {activeTab === "experience" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[1201px] mt-12 max-md:mt-8 px-2"
        >
          <div className="bg-portfolio-surface border border-portfolio-border rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2">
              {tabContents.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-portfolio-border pb-6 last:border-0"
                >
                  <h3 className="text-white text-xl font-semibold font-poppins">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                    <p className="text-portfolio-accent font-medium font-poppins">{exp.company}</p>
                    <span className="text-portfolio-text/70 text-sm mt-1 md:mt-0 font-poppins">{exp.period}</span>
                  </div>
                  <p className="text-portfolio-text mt-3 font-poppins">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Education Content */}
      {activeTab === "education" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[1201px] mt-12 max-md:mt-8 px-2"
        >
          <div className="bg-portfolio-surface border border-portfolio-border rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2">
              {tabContents.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-portfolio-border pb-6 last:border-0"
                >
                  <h3 className="text-white text-xl font-semibold font-poppins">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                    <p className="text-portfolio-accent font-medium font-poppins">{edu.institution}</p>
                    <span className="text-portfolio-text/70 text-sm mt-1 md:mt-0 font-poppins">{edu.period}</span>
                  </div>
                  <p className="text-portfolio-text mt-3 font-poppins">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Interests Content - Fixed for desktop grid */}
      {activeTab === "interests" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[1201px] mt-12 max-md:mt-8 px-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            {tabContents.interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-portfolio-surface border border-portfolio-border rounded-xl p-6 hover:bg-portfolio-surface/50 transition-all"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2 font-poppins">{interest.title}</h3>
                <p className="text-portfolio-text text-sm font-poppins">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Aspirations Content - Fixed for desktop grid */}
      {activeTab === "aspirations" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[1201px] mt-12 max-md:mt-8 px-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            {tabContents.aspirations.map((aspiration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="bg-portfolio-surface border border-portfolio-border rounded-xl p-6 hover:bg-portfolio-surface/50 transition-all"
              >
                <div className="text-4xl mb-3">{aspiration.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2 font-poppins">{aspiration.title}</h3>
                <p className="text-portfolio-text text-sm font-poppins">{aspiration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
