import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
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
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{t('home.title')}</CardTitle>
          <CardDescription>{t('home.description')}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <span>{t('home.darkMode')}</span>
          <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button>{t('home.clickMe')}</Button>
      </div>
    </div>
  );
}