import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{t('about.title')}</CardTitle>
          <CardDescription>{t('about.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{t('about.info')}</p>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button variant="outline">{t('about.learnMore')}</Button>
      </div>
    </div>
  );
}