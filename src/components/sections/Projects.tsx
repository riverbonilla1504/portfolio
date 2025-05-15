
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useIsMobile } from "../../hooks/use-mobile";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  url?: string;
  image: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<string>("project1");
  const isMobile = useIsMobile();

  // Helper function to ensure we always get an array
  const ensureArray = (value: any): string[] => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return value.split(', ');
    return [];
  };

  // Helper function to ensure we always get a string
  const ensureString = (value: any): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join(", ");
    return '';
  };

  const projects: Project[] = [
    {
      id: "project1",
      name: ensureString(t('project1.name')),
      description: ensureString(t('project1.description')),
      technologies: ensureArray(t('project1.tech')),
      features: ensureArray(t('project1.features')),
      url: "linkedin-platform.azure.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/example/project1"
    },
    {
      id: "project2",
      name: ensureString(t('project2.name')),
      description: ensureString(t('project2.description')),
      technologies: ensureArray(t('project2.tech')),
      features: ensureArray(t('project2.features')),
      url: "university-platform.azure.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/example/project2"
    },
    {
      id: "project3",
      name: ensureString(t('project3.name')),
      description: ensureString(t('project3.description')),
      technologies: ensureArray(t('project3.tech')),
      features: ensureArray(t('project3.features')),
      url: "finance-app.vercel.app",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/example/project3"
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  // Handle array or string for features
  const renderFeatures = (features: any) => {
    if (Array.isArray(features)) {
      return features.slice(0, 4).map((feature, idx) => (
        <div key={idx} className="flex items-stretch gap-[11px] text-portfolio-text font-normal mt-[33px]">
          <div className="text-xl text-center">{['🔧', '✨', '💻', '🎯'][idx % 4]}</div>
          <div className="text-base basis-auto grow shrink">
            {feature}
          </div>
        </div>
      ));
    } else if (typeof features === 'string') {
      // This should no longer be needed with our ensureArray function, but keeping for safety
      return features.split(', ').slice(0, 4).map((feature, idx) => (
        <div key={idx} className="flex items-stretch gap-[11px] text-portfolio-text font-normal mt-[33px]">
          <div className="text-xl text-center">{['🔧', '✨', '💻', '🎯'][idx % 4]}</div>
          <div className="text-base basis-auto grow shrink">
            {feature}
          </div>
        </div>
      ));
    }
    return null;
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="p-4 card-glass bg-portfolio-surface/30 border-t border-portfolio-border">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="relative aspect-video w-full overflow-hidden rounded-md cursor-pointer group">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-portfolio-surface/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-full p-0 bg-portfolio-surface border-portfolio-border shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <div className="p-4">
            <h3 className="text-portfolio-text font-bold text-lg mb-2">{project.name}</h3>
            <p className="text-portfolio-text text-sm mb-4">{project.description}</p>

            <div className="flex space-x-3 mt-3">
              {project.url && (
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs bg-portfolio-accent text-white px-3 py-2 rounded-md hover:bg-portfolio-accent/80 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Visit Site</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs bg-portfolio-surface border border-portfolio-border px-3 py-2 rounded-md hover:bg-portfolio-surface/80 transition-colors"
                >
                  <Github size={14} />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="mt-4">
        <h3 className="text-portfolio-text font-bold text-lg">{project.name}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="text-xs py-1 px-2 bg-portfolio-surface border border-portfolio-border rounded-md text-portfolio-text">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="self-stretch flex w-full flex-col items-center justify-center px-4 sm:px-8 lg:px-[70px] py-16 lg:py-[169px]"
      aria-label="Projects"
    >
      <div className="w-full max-w-[1409px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[34%]"
          >
            <div className="flex w-full flex-col self-stretch items-stretch">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-[40px] font-bold leading-[1.2] text-portfolio-text"
              >
                {ensureString(t('my.projects'))}
              </motion.h2>
              <div className="text-portfolio-text text-lg md:text-xl font-normal mt-[29px]">
                {ensureString(t('explore.portfolio'))}
              </div>
              <motion.p
                key={currentProject.id + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-portfolio-text text-base font-normal leading-[26px] mt-[39px]"
              >
                {currentProject.description}
              </motion.p>

              <motion.div
                key={currentProject.id + ".features"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-[35px]"
              >
                {renderFeatures(currentProject.features)}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-stretch gap-[35px] whitespace-nowrap mt-12"
              >
                <div className="flex flex-col items-stretch">
                  <div className="text-portfolio-accent text-[32px] font-bold self-center">
                    7
                  </div>
                  <div className="text-portfolio-text text-sm font-normal mt-4">
                    {ensureString(t('projects.count'))}
                  </div>
                </div>
                <div className="flex flex-col items-stretch">
                  <div className="text-portfolio-accent text-[32px] font-bold self-center">
                    {currentProject.technologies.length}
                  </div>
                  <div className="text-portfolio-text text-sm font-normal mt-4">
                    {ensureString(t('technologies.count'))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[66%]"
          >
            <div className="border border-portfolio-border grow w-full rounded-xl overflow-hidden">
              <div className="bg-portfolio-surface flex w-full flex-col px-4 py-[17px] rounded-[12px_12px_0px_0px] card-glass ">
                <div className="flex items-stretch gap-2">
                  <div className="bg-[rgba(255,95,87,1)] flex w-3 shrink-0 h-3 rounded-md" />
                  <div className="bg-[rgba(255,189,46,1)] flex w-3 shrink-0 h-3 rounded-md" />
                  <div className="bg-[rgba(40,201,64,1)] flex w-3 shrink-0 h-3 rounded-md" />
                </div>
                <div className="flex items-stretch gap-1.5 text-[13px] text-portfolio-text font-normal whitespace-nowrap text-center mt-2 overflow-x-auto">
                  <div className="flex items-stretch gap-0.5 grow shrink basis-auto">
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setActiveProject(project.id)}
                        className={`flex items-stretch gap-[15px] px-3 sm:px-[22px] py-2.5 rounded-[8px_8px_0px_0px] transition-colors ${activeProject === project.id
                          ? "bg-portfolio-primary text-portfolio-text"
                          : "bg-portfolio-surface/80"
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
                <div className="bg-portfolio-surface border-portfolio-border border self-stretch flex items-stretch gap-6 flex-wrap mt-2 px-2 py-[9px] rounded-md">
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
                  <div className="text-portfolio-text text-sm font-normal grow shrink basis-auto overflow-hidden">
                    https://
                    <span className="text-portfolio-accent">
                      {currentProject.url}
                    </span>
                  </div>
                </div>
              </div>

              <ProjectCard project={currentProject} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
