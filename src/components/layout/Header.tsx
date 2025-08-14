import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X,  Moon, Sun, Globe } from 'lucide-react';
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
    // { name: t('nav.specialties'), href: '#', hasDropdown: true },
    { name: t('nav.especialities'), href: 'especialidades' },
    { name: t('nav.prices'), href: '/precios' },
    { name: t('nav.doctors'), href: '/doctores' },
    { name: t('nav.transport'), href: '/transporte' },
    { name: t('nav.videos'), href: '/videos' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  // const specialties = [
  //    { name: t('nav.home'), href: 'especialidades' },
  //   { name: t('specialties.general.title'), href: '/especialidades/odontologia-general' },
  //   { name: t('specialties.endodontics.title'), href: '/especialidades/endodoncia' },
  //   { name: t('specialties.periodontics.title'), href: '/especialidades/periodoncia' },
  //   { name: t('specialties.oral_surgery.title'), href: '/especialidades/cirugia-maxilofacial' },
  //   { name: t('specialties.cosmetic.title'), href: '/especialidades/estetica-dental' },
  //   { name: t('specialties.orthodontics.title'), href: '/especialidades/ortodoncia' },
  //   { name: t('specialties.pediatric.title'), href: '/especialidades/odontopediatria' },
  //   { name: t('services.rehabilitacionoral.title'), href: '/especialidades/rehabilitacion-oral' },
    

    


    
  // ];
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/MoleetMedicalUnit', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/moleetdentalchapala/', label: 'Instagram' },
    // { icon: Youtube, href: 'https://youtube.com/moleetdental', label: 'YouTube' },
    // { icon: Twitter, href: 'https://twitter.com/moleetdental', label: 'Twitter' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar with call buttons, theme and language toggles */}
      <div className="bg-primary/10 py-2 px-4">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex items-center gap-3">
            {/* Call Buttons with Flags */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('tel:+15551234567', '_self')}
              className="text-primary hover:bg-primary/10 rounded-xl flex items-center gap-2"
            >
              🇺🇸
              <Phone className="h-3 w-3" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('tel:+15551234568', '_self')}
              className="text-primary hover:bg-primary/10 rounded-xl flex items-center gap-2"
            >
              🇨🇦
              <Phone className="h-3 w-3" />
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-primary hover:bg-primary/10 rounded-xl"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-primary hover:bg-primary/10 rounded-xl"
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
                Moleet Dental Unit®
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              // if (item.hasDropdown) {
              //   return (
              //     <div key={item.name} className="relative group">
              //       <span className="text-sm font-medium transition-colors hover:text-dental-blue text-muted-foreground cursor-pointer">
              //         {item.name}
              //       </span>
              //       <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              //         {/* <div className="p-4">
              //           {specialties.map((specialty) => (
              //             <Link
              //               key={specialty.href}
              //               to={specialty.href}
              //               className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
              //             >
              //               {specialty.name}
              //             </Link>
              //           ))}
              //         </div> */}
              //       </div>
              //     </div>
              //   );
              // }
              return (
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
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-dental hover:opacity-90 text-white font-semibold"
            >
              <Link to="https://wa.me/523326312137" target="_blank">
                {t('contact.title')}
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
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
              {navigation.map((item) => {
                // if (item.hasDropdown) {
                //   return (
                //     <div key={item.name}>
                //       <span className="text-sm font-medium text-muted-foreground px-2 py-1 block">
                //         {item.name}
                //       </span>
                //       {/* <div className="ml-4 mt-2 space-y-2">
                //         {specialties.map((specialty) => (
                //           <Link
                //             key={specialty.href}
                //             to={specialty.href}
                //             className="text-sm text-muted-foreground hover:text-primary px-2 py-1 block"
                //             onClick={() => setIsMenuOpen(false)}
                //           >
                //             {specialty.name}
                //           </Link>
                //         ))}
                //       </div> */}
                //     </div>
                //   );
                // }
                return (
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
                );
              })}
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