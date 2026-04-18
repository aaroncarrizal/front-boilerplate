import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Home Page',
        description: 'Welcome to the boilerplate',
        darkMode: 'Dark Mode',
        clickMe: 'Click Me',
      },
      about: {
        title: 'About Page',
        description: 'This is the about page',
        learnMore: 'Learn More',
        info: 'This boilerplate includes React, TanStack Query, Zustand, MSW, and more.',
      },
      nav: {
        home: 'Home',
        about: 'About',
      },
    },
  },
  es: {
    translation: {
      home: {
        title: 'Página de Inicio',
        description: 'Bienvenido al boilerplate',
        darkMode: 'Modo Oscuro',
        clickMe: 'Haz Click',
      },
      about: {
        title: 'Página Acerca de',
        description: 'Esta es la página about',
        learnMore: 'Aprende Más',
        info: 'Este boilerplate incluye React, TanStack Query, Zustand, MSW, y más.',
      },
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage', 'sessionStorage', 'querystring', 'cookie'],
      caches: ['localStorage'],
    },
  });

export default i18n;