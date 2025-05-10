import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

// Componente Link compatible con Next.js y React Router
const Link = ({ to, className, children }) => {
  // En un proyecto Next.js real, importaríamos Link de next/link
  // y usaríamos <Link href={to}><a className={className}>{children}</a></Link>
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-[rgba(52,29,37,1)] flex w-full flex-col overflow-hidden items-center ml-2.5 mt-[1185px] pt-px pb-[46px] border-[rgba(114,87,96,1)] border-t max-md:max-w-full max-md:mr-[9px] max-md:mt-10">
      <div className="self-stretch flex shrink-0 h-0.5 max-md:max-w-full" />
      <div className="flex w-[1070px] max-w-full items-stretch gap-[40px_100px] flex-wrap mt-[114px] max-md:mt-10">
        
        
        <div className="grow shrink basis-auto max-md:max-w-full">
          
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[71%] max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col max-md:mt-10">
                <div className="flex items-stretch gap-3 text-xl text-white font-bold whitespace-nowrap tracking-[0.5px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/71f53f2cd327c5b49431c6bd3b5439c8d3942dd7?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-6 shrink-0"
                  />
                  <div>River</div>
                </div>
                <p className="text-white text-[15px] font-normal leading-6 self-stretch mt-[27px]">
                  {t('footer.description')}
                </p>
                
                <div className="flex items-stretch gap-4 mt-[33px]">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6183478345ec9bafac7b0016800404e02a379a47?placeholderIfAbsent=true"
                      alt="GitHub"
                      className="aspect-[1] object-contain w-11 shrink-0 rounded-xl"
                    />
                  </a>
                  
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3dad1c6073fb28ea06bf26c17d09ed7a2824f90?placeholderIfAbsent=true"
                      alt="LinkedIn"
                      className="aspect-[1] object-contain w-11 shrink-0 rounded-xl"
                    />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe430e5d461478a5602fc23b9b05c36964b8d55?placeholderIfAbsent=true"
                      alt="Twitter"
                      className="aspect-[1] object-contain w-11 shrink-0 rounded-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            
            <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
              <nav className="flex w-full flex-col text-[15px] text-white font-normal max-md:mt-10">
                
                <div className="self-stretch flex items-stretch gap-3 text-xl font-bold whitespace-nowrap tracking-[0.5px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c77157922d320e64550c722d8ab9ff0660d9bbbf?placeholderIfAbsent=true"
                    alt="Sections"
                    className="aspect-[1] object-contain w-6 shrink-0"
                  />
                  <div className="grow shrink w-[99px]">{t('footer.sections')}</div>
                </div>
                
                <Link to="/" className="flex items-stretch gap-3 whitespace-nowrap mt-[37px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0feddaadd093cd06029940673eb2f8baedaf1a60?placeholderIfAbsent=true"
                    alt="Home"
                    className="aspect-[1] object-contain w-5 shrink-0"
                  />
                  <span>{t('home')}</span>
                </Link>
                <Link to="/about" className="flex items-stretch gap-3 mt-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79025cdbc45cd67bd942542b7c862b571cfa24?placeholderIfAbsent=true"
                    alt="About"
                    className="aspect-[1] object-contain w-5 shrink-0"
                  />
                  <span>{t('about')}</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        
        <div className="flex flex-col text-base text-white font-normal">
          <div className="flex items-stretch gap-3 text-xl font-bold whitespace-nowrap tracking-[0.5px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34ecfbe2f31c3f6ccbcc7e512a558de5907d0b0?placeholderIfAbsent=true"
              alt="Contact"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
            <div>{t('footer.contact')}</div>
          </div>
          <div className="flex items-stretch gap-3 mt-[37px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/747618e7d1a76a3e0796915de98dc300195e1187?placeholderIfAbsent=true"
              alt="Location"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
            <div className="basis-auto">{t('footer.location')}</div>
          </div>
          <div className="flex items-stretch gap-3 mt-[25px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb34e8700cfbe505757e7de820b0cc7d07b5998?placeholderIfAbsent=true"
              alt="Phone"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
            <div className="basis-auto">+57 (321)971-0852</div>
          </div>
          <div className="self-stretch flex items-stretch gap-3 whitespace-nowrap mt-[25px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff6fac8d99426ad9106ea5a9a827370858c993d?placeholderIfAbsent=true"
              alt="Email"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
            <div className="grow shrink w-[191px]">riverflorez.04@gmail.com</div>
          </div>
        </div>
      </div>
      
      
      <div className="w-[1200px] max-w-full text-sm text-white font-normal text-center mt-[93px] pt-[47px] pb-[7px] px-[70px] border-[rgba(114,87,96,1)] border-t max-md:mt-10 max-md:px-5">
        © 2025 River {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
