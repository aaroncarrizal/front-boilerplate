import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container py-10">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
      <p>{t('about.info')}</p>
    </div>
  );
}