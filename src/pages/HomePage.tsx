import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function HomePage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setDarkMode(!darkMode);
  };

  return (
    <div className="container py-10">
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        {t('home.darkMode')}
      </label>
    </div>
  );
}