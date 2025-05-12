
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Esta función auxiliar puede ser utilizada en Next.js para precargar traducciones en el servidor
export const getServerSideTranslations = (locale: string) => {
  // En un proyecto Next.js real, aquí cargaríamos las traducciones del servidor
  // Por ahora, esto es un placeholder para mantener la compatibilidad
  return Promise.resolve({
    locale,
    // Aquí se retornarían las traducciones precargadas
  });
};
