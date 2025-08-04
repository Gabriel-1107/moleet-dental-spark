import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import SpecialtiesDropdown from './SpecialtiesDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/servicios' },
    { name: t('nav.locations'), href: '/ubicaciones' },
    { name: t('nav.prices'), href: '/precios' },
    { name: t('nav.doctors'), href: '/doctores' },
    { name: t('nav.transport'), href: '/transporte' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-dental-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Guadalajara: (33) 1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Lun-Vie: 9:00-19:00 | Sáb: 9:00-14:00</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-white hover:bg-white/10"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-white hover:bg-white/10"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'es' ? 'ES' : 'EN'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/c806f455-7ab9-4e65-9742-bd63755e4558.png" 
              alt="Moleet Dental Unit" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-dental-navy">
                Moleet
              </span>
              <span className="text-sm text-dental-blue font-medium">
                dental unit
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-dental-blue ${
                  isActive(item.href)
                    ? 'text-dental-navy border-b-2 border-dental-blue'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Specialties Dropdown */}
            <SpecialtiesDropdown />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-dental hover:opacity-90 text-white font-semibold"
            >
              <Link to="/#contacto">
                {t('contact.title')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-dental-blue px-2 py-1 ${
                    isActive(item.href)
                      ? 'text-dental-navy bg-dental-light/20 rounded'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gradient-dental hover:opacity-90 text-white font-semibold mt-4"
              >
                <Link to="/#contacto" onClick={() => setIsMenuOpen(false)}>
                  {t('contact.title')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;