import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/MoleetMedicalUnit', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/moleetdentalchapala/', label: 'Instagram' },
    // { icon: Youtube, href: 'https://youtube.com/moleetdental', label: 'YouTube' },
    // { icon: Twitter, href: 'https://twitter.com/moleetdental', label: 'Twitter' }
  ];

  const quickLinks = [
     { name: t('nav.home'), href: '/' },
    // { name: t('nav.services'), href: '/servicios' },
    // { name: t('nav.specialties'), href: '#', hasDropdown: true },
    { name: t('nav.especialities'), href: 'especialidades' },
    // { name: t('nav.prices'), href: '/precios' },
    { name: t('nav.doctors'), href: '/doctores' },
    { name: t('nav.transport'), href: '/transporte' },
    { name: t('nav.videos'), href: '/videos' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  // const services = [
  //   'Odontología General',
  //   'Estética Dental',
  //   'Endodoncia',
  //   'Periodoncia',
  //   'Cirugía Maxilofacial',
  //   'Ortodoncia'
  // ];

  return (
    <footer className="bg-dental-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/c806f455-7ab9-4e65-9742-bd63755e4558.png" 
                alt="Moleet Dental Unit" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl"> Moleet Dental Unit®</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
               {t('context.footer.text')}
            </p>
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
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/80 hover:text-dental-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t('footer.services')}</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-white/80">
                  {service}
                </div>
              ))}
            </nav>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-4">
              {/* Guadalajara */}
              <div className="space-y-2">
                <h4 className="font-medium text-dental-accent">🇲🇽 México</h4> 
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-dental-accent" />
                  <button 
                    onClick={() => window.open('https://wa.me/3315204944', '_blank')}
                    className="text-sm text-white/80 hover:text-white transition-colors text-left"
                  >
                    {t('branches.guadalajara.name')}
                  </button>
                  <Phone className="h-4 w-4 text-dental-accent" />
                  <button 
                    onClick={() => window.open('https://wa.me/3310235792', '_blank')}
                    className="text-sm text-white/80 hover:text-white transition-colors text-left"
                  >
                    {t('branches.chapala.name')}
                  </button>
                  
                </div>
              </div>

              {/* Chapala */}
              <div className="space-y-2">
                <h4 className="font-medium text-dental-accent">🇨🇦 Canadá</h4> 
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-dental-accent" />
                  <button 
                    onClick={() => window.open('https://wa.me/17806808367', '_blank')}
                    className="text-sm text-white/80 hover:text-white transition-colors text-left"
                  >
                    (780) 680 8367
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-dental-accent">🇺🇸 Estados Unidos</h4> 
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-dental-accent" />
                  <button 
                    onClick={() => window.open('https://wa.me/17806808367', '_blank')}
                    className="text-sm text-white/80 hover:text-white transition-colors text-left"
                  >
                    (780) 680 8367
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-dental-accent" />
                  <div className="text-sm text-white/80">
                    <div>Lun-Vie: 9:00-20:00</div>
                    <div>Sáb: 9:00-14:00</div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-dental-accent" />
                <span className="text-sm text-white/80">moleetmedicalunit@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              Ⓡ {currentYear} Moleet Dental Unit. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="https://udigitalbusiness.com/" className="hover:text-dental-accent transition-colors">
                Hecho por UdigitalBusiness
              </a>
              {/* <a href="/privacidad" className="hover:text-dental-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="hover:text-dental-accent transition-colors">
                Términos y Condiciones
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;