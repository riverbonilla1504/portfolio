
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useIsMobile } from "../../hooks/use-mobile";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("skills");
  const isMobile = useIsMobile();

  // Helper function to safely get arrays 
  const getArray = (key: string): string[] => {
    const value = t(key);
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return value.split(', ');
    return [];
  };

  const tabContents = {
    skills: {
      backend: getArray('about.skills.backend.items'),
      frontend: getArray('about.skills.frontend.items'),
      ai: getArray('about.skills.ai.items'),
      databases: getArray('about.skills.databases.items'),
      devops: getArray('about.skills.devops.items'),
      architecture: getArray('about.skills.architecture.items')
    },
    experience: [
      {
        title: t('about.experience.linkedin.title'),
        tech: t('about.experience.linkedin.tech'),
        description: t('about.experience.linkedin.description')
      },
      {
        title: t('about.experience.university.title'),
        tech: t('about.experience.university.tech'),
        description: t('about.experience.university.description')
      },
      {
        title: t('about.experience.finance.title'),
        tech: t('about.experience.finance.tech'),
        description: t('about.experience.finance.description')
      },
      {
        title: t('about.experience.iot.title'),
        tech: t('about.experience.iot.tech'),
        description: t('about.experience.iot.description')
      },
      {
        title: t('about.experience.game.title'),
        tech: t('about.experience.game.tech'),
        description: t('about.experience.game.description')
      },
      {
        title: t('about.experience.pos.title'),
        tech: t('about.experience.pos.tech'),
        description: t('about.experience.pos.description')
      },
      {
        title: t('about.experience.hackathon.title'),
        tech: t('about.experience.hackathon.tech'),
        description: t('about.experience.hackathon.description')
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
        degree: t('about.education.ai.degree'),
        institution: t('about.education.ai.institution'),
        period: t('about.education.ai.period'),
        description: t('about.education.ai.description')
      },
      {
        degree: t('about.education.frontend1.degree'),
        institution: t('about.education.frontend1.institution'),
        period: t('about.education.frontend1.period'),
        description: t('about.education.frontend1.description')
      },
      {
        degree: t('about.education.excel.degree'),
        institution: t('about.education.excel.institution'),
        period: t('about.education.excel.period'),
        description: t('about.education.excel.description')
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
    <section id="about" className="flex flex-col items-center py-16 px-4" aria-label="About">

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-2 mt-4 text-portfolio-text"
      >
        <div className="flex items-center gap-2 mx-2">
          <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{t('about.personal.location')}</span>
        </div>
        <div className="flex items-center gap-2 mx-2">
          <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>{t('about.personal.phone')}</span>
        </div>
        <div className="flex items-center gap-2 mx-2">
          <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span>{t('about.personal.email')}</span>
        </div>
        <div className="flex items-center gap-2 mx-2">
          <svg className="h-5 w-5 text-portfolio-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m2 6 3 1 4-2 3 2 4-1 6 3v7l-6-3-4 1-3-2-4 2-3-1V6z"></path>
            <path d="M22 6 2 18"></path>
          </svg>
          <span>{t('about.personal.english')}</span>
        </div>
      </motion.div>

      {/* Tabs */}
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
                : "bg-portfolio-surface/50 border border-portfolio-border"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Backend Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">⚙️</span>
                  {t('about.skills.backend.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.backend.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">📱</span>
                  {t('about.skills.frontend.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.frontend.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">🤖</span>
                  {t('about.skills.ai.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.ai.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Databases Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">🛢️</span>
                  {t('about.skills.databases.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.databases.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">⚡</span>
                  {t('about.skills.devops.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.devops.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture Skills */}
            <div className="w-full">
              <div className="flex grow flex-col text-base text-slate-200 font-normal p-4 md:px-6 md:py-[30px] rounded-2xl border border-portfolio-border bg-portfolio-surface/30 overflow-hidden">
                <h3 className="text-portfolio-text text-xl font-semibold flex items-center font-poppins">
                  <span className="mr-2 text-portfolio-accent">📐</span>
                  {t('about.skills.architecture.title')}
                </h3>
                <ul className="mt-[26px] space-y-3 list-disc pl-5 overflow-y-auto max-h-[300px] font-poppins">
                  {tabContents.skills.architecture.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="text-portfolio-text"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-6 p-4 border border-portfolio-border rounded-2xl bg-portfolio-surface/30">
            <h3 className="text-portfolio-text text-xl font-semibold font-poppins mb-4 flex items-center">
              <span className="mr-2 text-portfolio-accent">🚀</span>
              {t('about.softskills.title')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-portfolio-text font-poppins">
              {getArray('about.softskills.items').map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-portfolio-accent">✓</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
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
          <div className="border border-portfolio-border rounded-2xl bg-portfolio-surface/30 p-4 md:p-8 overflow-hidden">
            <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2">
              {tabContents.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-portfolio-border pb-6 last:border-0"
                >
                  <h3 className="text-portfolio-text text-xl font-semibold font-poppins">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                    <p className="text-portfolio-accent font-medium font-poppins">{exp.tech}</p>
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
          <div className="border border-portfolio-border bg-portfolio-surface/30 rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2">
              {tabContents.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-portfolio-border pb-6 last:border-0"
                >
                  <h3 className="text-portfolio-text text-xl font-semibold font-poppins">{edu.degree}</h3>
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

      {/* Interests Content */}
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
                className="border border-portfolio-border bg-portfolio-surface/30 rounded-xl p-6 hover:bg-portfolio-surface/50 transition-all"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h3 className="text-portfolio-text text-lg font-semibold mb-2 font-poppins">{interest.title}</h3>
                <p className="text-portfolio-text text-sm font-poppins">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Aspirations Content */}
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
                className="border border-portfolio-border bg-portfolio-surface/30 rounded-xl p-6 hover:bg-portfolio-surface/50 transition-all"
              >
                <div className="text-4xl mb-3">{aspiration.icon}</div>
                <h3 className="text-portfolio-text text-lg font-semibold mb-2 font-poppins">{aspiration.title}</h3>
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
