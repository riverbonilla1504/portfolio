
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("skills");

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
    <section id="about" className="bg-[rgba(61,42,47,1)] flex flex-col items-center py-16" aria-label="About">
      <div className="bg-[rgba(52,29,37,1)] flex w-2.5 shrink-0 h-2.5 ml-[33px] mt-8 rounded-[5px] max-md:ml-2.5" aria-hidden="true" />
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[rgba(248,242,244,1)] text-[56px] font-bold text-center mt-9 max-md:text-[40px]"
      >
        River
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-[264px] max-w-full overflow-hidden text-2xl text-[rgba(229,214,218,1)] font-normal text-center mt-[45px] pb-3 px-1 max-md:mt-10"
      >
        {t('about.role')}
      </motion.div>
      
      {/* Tabs */}
      <div className="flex w-[1036px] max-w-full items-stretch gap-4 text-[13px] text-white font-normal text-center flex-wrap mt-[65px] overflow-x-auto px-4 max-md:mt-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-stretch gap-[9px] px-[25px] py-[13px] rounded-lg max-md:px-5 transition-colors ${
              activeTab === tab.id
                ? "bg-[rgba(61,42,47,1)]"
                : "bg-[rgba(52,29,37,1)] hover:bg-[rgba(71,53,57,1)]"
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
            <span className="basis-auto">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Skills Content */}
      {activeTab === "skills" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-[1201px] max-w-full mt-12 max-md:mt-10"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col text-base text-slate-200 font-normal pl-6 pr-20 py-[51px] rounded-2xl border border-[rgba(114,87,96,0.3)] bg-[rgba(52,29,37,0.3)] max-md:max-w-full max-md:mt-[31px] max-md:px-5">
                <h3 className="text-white text-xl font-semibold flex items-center">
                  <span className="mr-2 text-[rgba(204,160,169,1)]">📱</span>
                  {t('about.skills.frontend.title')}
                </h3>
                <ul className="mt-[26px] space-y-3.5 list-disc pl-5">
                  {typeof tabContents.skills.frontend === 'string' 
                    ? tabContents.skills.frontend.split(', ').map((skill, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="max-md:ml-2.5"
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
                          className="max-md:ml-2.5"
                        >
                          {skill}
                        </motion.li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col text-base text-slate-200 font-normal pl-6 pr-20 py-[49px] rounded-2xl border border-[rgba(114,87,96,0.3)] bg-[rgba(52,29,37,0.3)] max-md:max-w-full max-md:mt-[31px] max-md:px-5">
                <h3 className="text-white text-xl font-semibold flex items-center">
                  <span className="mr-2 text-[rgba(204,160,169,1)]">⚙️</span>
                  {t('about.skills.backend.title')}
                </h3>
                <ul className="mt-[26px] space-y-4 list-disc pl-5">
                  {typeof tabContents.skills.backend === 'string' 
                    ? tabContents.skills.backend.split(', ').map((skill, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="max-md:ml-2.5"
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
                          className="max-md:ml-2.5"
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
          className="w-[1201px] max-w-full mt-12 max-md:mt-10 px-4"
        >
          <div className="bg-[rgba(52,29,37,0.3)] border border-[rgba(114,87,96,0.3)] rounded-2xl p-8 max-md:p-4">
            <div className="space-y-8">
              {tabContents.experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-[rgba(114,87,96,0.3)] pb-6 last:border-0"
                >
                  <h3 className="text-white text-xl font-semibold">{exp.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[rgba(204,160,169,1)] font-medium">{exp.company}</p>
                    <span className="text-[rgba(229,214,218,0.7)] text-sm">{exp.period}</span>
                  </div>
                  <p className="text-[rgba(229,214,218,1)] mt-3">{exp.description}</p>
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
          className="w-[1201px] max-w-full mt-12 max-md:mt-10 px-4"
        >
          <div className="bg-[rgba(52,29,37,0.3)] border border-[rgba(114,87,96,0.3)] rounded-2xl p-8 max-md:p-4">
            <div className="space-y-8">
              {tabContents.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-b border-[rgba(114,87,96,0.3)] pb-6 last:border-0"
                >
                  <h3 className="text-white text-xl font-semibold">{edu.degree}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[rgba(204,160,169,1)] font-medium">{edu.institution}</p>
                    <span className="text-[rgba(229,214,218,0.7)] text-sm">{edu.period}</span>
                  </div>
                  <p className="text-[rgba(229,214,218,1)] mt-3">{edu.description}</p>
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
          className="w-[1201px] max-w-full mt-12 max-md:mt-10 px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabContents.interests.map((interest, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[rgba(52,29,37,0.3)] border border-[rgba(114,87,96,0.3)] rounded-xl p-6 hover:bg-[rgba(52,29,37,0.5)] transition-all"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-[rgba(229,214,218,1)] text-sm">{interest.description}</p>
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
          className="w-[1201px] max-w-full mt-12 max-md:mt-10 px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabContents.aspirations.map((aspiration, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="bg-[rgba(52,29,37,0.3)] border border-[rgba(114,87,96,0.3)] rounded-xl p-6 hover:bg-[rgba(52,29,37,0.5)] transition-all"
              >
                <div className="text-4xl mb-3">{aspiration.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{aspiration.title}</h3>
                <p className="text-[rgba(229,214,218,1)] text-sm">{aspiration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;

