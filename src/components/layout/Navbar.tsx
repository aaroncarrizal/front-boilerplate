import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
  ];

  return (
    <nav className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-6">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors ${
              location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}