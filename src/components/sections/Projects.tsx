
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  url: string;
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<string>("seminario");

  const projects: Project[] = [
    {
      id: "finance",
      name: "Finance",
      description: t('finance-description'),
      technologies: t('finance-tech').split(', '),
      features: t('finance-features').split(', '),
      url: "finance-app.vercel.app",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f66b972c2ec28526dd157fccef31e896d012842?placeholderIfAbsent=true"
    },
    {
      id: "javagame",
      name: "JavaGame",
      description: t('javagame-description'),
      technologies: t('javagame-tech').split(', '),
      features: t('javagame-features').split(', '),
      url: "javagame-engine.github.io",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e445eb87ec9a5008290bce2c3d89fc64b9119aa?placeholderIfAbsent=true"
    },
    {
      id: "seminario",
      name: "Seminario",
      description: t('seminario-description'),
      technologies: t('seminario-tech').split(', '),
      features: t('seminario-features').split(', '),
      url: "seminario-ucc.vercel.app",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f66b972c2ec28526dd157fccef31e896d012842?placeholderIfAbsent=true"
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section
      id="projects"
      className="bg-[rgba(61,42,47,1)] self-stretch flex w-full flex-col items-center justify-center px-[70px] py-[169px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      aria-label="Projects"
    >
      <div className="w-full max-w-[1409px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[34%] max-md:w-full max-md:ml-0"
          >
            <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:mt-10">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[40px] font-bold leading-[1.2] text-white"
              >
                {t('my-projects')}
              </motion.h2>
              <div className="text-[rgba(229,214,218,1)] text-xl font-normal mt-[29px]">
                {t('explore-portfolio')}
              </div>
              <motion.p 
                key={currentProject.id + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[rgba(229,214,218,1)] text-base font-normal leading-[26px] mt-[39px] max-md:mr-[5px]"
              >
                {currentProject.description}
              </motion.p>
              
              <motion.div 
                key={currentProject.id + "-features"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-[35px]"
              >
                <div className="flex items-stretch gap-2.5 text-[rgba(229,214,218,1)] font-normal max-md:ml-[3px]">
                  <div className="text-xl text-center mt-[13px]">✨</div>
                  <div className="text-base leading-6 grow shrink w-[370px] basis-auto">
                    {currentProject.features[0]}
                  </div>
                </div>
                <div className="text-[rgba(229,214,218,1)] text-base font-normal ml-[35px] mr-[30px] mt-10 max-md:mx-2.5">
                  {currentProject.features[1]}
                </div>
                <div className="flex items-stretch gap-[11px] text-[rgba(229,214,218,1)] font-normal mt-[39px] max-md:ml-1 max-md:mr-0.5">
                  <div className="text-xl text-center">💻</div>
                  <div className="text-base grow shrink w-[366px] basis-auto">
                    {currentProject.features[2]}
                  </div>
                </div>
                <div className="flex items-stretch gap-[11px] text-[rgba(229,214,218,1)] font-normal mt-[33px] max-md:ml-1">
                  <div className="text-xl text-center">🎯</div>
                  <div className="text-base basis-auto grow shrink">
                    {currentProject.features[3]}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-stretch gap-[35px] whitespace-nowrap mt-12 max-md:mt-10"
              >
                <div className="flex flex-col items-stretch">
                  <div className="text-[rgba(204,160,169,1)] text-[32px] font-bold self-center">
                    {projects.length}
                  </div>
                  <div className="text-[rgba(229,214,218,1)] text-sm font-normal mt-4">
                    {t('projects-count')}
                  </div>
                </div>
                <div className="flex flex-col items-stretch">
                  <div className="text-[rgba(204,160,169,1)] text-[32px] font-bold self-center">
                    {currentProject.technologies.length}
                  </div>
                  <div className="text-[rgba(229,214,218,1)] text-sm font-normal mt-4">
                    {t('technologies-count')}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[66%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="bg-[rgba(52,29,37,1)] shadow-[0px_20px_40px_rgba(0,0,0,0.1)] grow w-full rounded-xl max-md:max-w-full max-md:mt-10">
              <div className="bg-[rgba(52,29,37,1)] flex w-full flex-col px-4 py-[17px] rounded-[12px_12px_0px_0px] max-md:max-w-full">
                <div className="flex items-stretch gap-2">
                  <div className="bg-[rgba(255,95,87,1)] flex w-3 shrink-0 h-3 rounded-md" />
                  <div className="bg-[rgba(255,189,46,1)] flex w-3 shrink-0 h-3 rounded-md" />
                  <div className="bg-[rgba(40,201,64,1)] flex w-3 shrink-0 h-3 rounded-md" />
                </div>
                <div className="flex items-stretch gap-1.5 text-[13px] text-[rgba(229,214,218,1)] font-normal whitespace-nowrap text-center mt-2 overflow-x-auto">
                  <div className="flex items-stretch gap-0.5 grow shrink basis-auto">
                    {projects.map((project) => (
                      <button 
                        key={project.id}
                        onClick={() => setActiveProject(project.id)}
                        className={`flex items-stretch gap-[15px] px-[22px] py-2.5 rounded-[8px_8px_0px_0px] max-md:pl-5 transition-colors ${
                          activeProject === project.id 
                            ? "bg-[rgba(61,42,47,1)] text-[rgba(248,242,244,1)]" 
                            : "bg-[rgba(71,53,57,1)]"
                        }`}
                      >
                        <span>{project.name}</span>
                        <img
                          src={activeProject === project.id 
                            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/1f3b6851a203c568ea16edba817764259136a0d3?placeholderIfAbsent=true"
                            : "https://cdn.builder.io/api/v1/image/assets/TEMP/684d53af8d092f9d351bccb89a2a501b06659d72?placeholderIfAbsent=true"
                          }
                          alt={activeProject === project.id ? "Active tab" : "Close tab"}
                          className="aspect-[1] object-contain w-3 shrink-0"
                        />
                      </button>
                    ))}
                  </div>
                  <button>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c3d305ab1ea392b31799dcdac34596a1cf7277?placeholderIfAbsent=true"
                      alt="Add tab"
                      className="aspect-[1] object-contain w-8 shrink-0 rounded-md"
                    />
                  </button>
                </div>
                <div className="bg-[rgba(61,42,47,1)] self-stretch flex items-stretch gap-6 flex-wrap mt-2 px-2 py-[9px] rounded-md">
                  <div className="flex items-stretch gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1189f2f8c2baf838a071afe5f0d6a5aadcacda8a?placeholderIfAbsent=true"
                      alt="Navigation"
                      className="aspect-[0.89] object-contain w-6 rounded shrink-0"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bfeea6f430f3f4d5c42b4e52f260947cd95e526?placeholderIfAbsent=true"
                      alt="Navigation"
                      className="aspect-[0.89] object-contain w-6 rounded shrink-0"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc85417e1015df6c591e56a03dd0a13123a8ea6d?placeholderIfAbsent=true"
                      alt="Navigation"
                      className="aspect-[0.89] object-contain w-6 rounded shrink-0"
                    />
                  </div>
                  <div className="text-[rgba(229,214,218,1)] text-sm font-normal grow shrink w-[622px] basis-auto max-md:max-w-full">
                    https://
                    <span className="text-[rgba(204,160,169,1)]">
                      {currentProject.url}
                    </span>
                  </div>
                </div>
              </div>
              <motion.img
                key={currentProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={currentProject.image}
                alt={`${currentProject.name} screenshot`}
                className="aspect-[1.44] object-contain w-full rounded-[0px_0px_12px_12px] max-md:max-w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

