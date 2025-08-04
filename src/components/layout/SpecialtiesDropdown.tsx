import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const SpecialtiesDropdown = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      name: 'Odontología General',
      nameEn: 'General Dentistry',
      href: '/especialidades/odontologia-general',
      description: 'Atención integral para toda la familia',
      descriptionEn: 'Comprehensive care for the whole family'
    },
    {
      name: 'Endodoncia',
      nameEn: 'Endodontics',
      href: '/especialidades/endodoncia',
      description: 'Tratamientos de conducto especializados',
      descriptionEn: 'Specialized root canal treatments'
    },
    {
      name: 'Periodoncia',
      nameEn: 'Periodontics',
      href: '/especialidades/periodoncia',
      description: 'Cuidado de encías y tejidos de soporte',
      descriptionEn: 'Gum and supporting tissue care'
    },
    {
      name: 'Cirugía Maxilofacial',
      nameEn: 'Oral Surgery',
      href: '/especialidades/cirugia-maxilofacial',
      description: 'Cirugía oral y maxilofacial avanzada',
      descriptionEn: 'Advanced oral and maxillofacial surgery'
    },
    {
      name: 'Estética Dental',
      nameEn: 'Cosmetic Dentistry',
      href: '/especialidades/estetica-dental',
      description: 'Diseño de sonrisa y estética',
      descriptionEn: 'Smile design and aesthetics'
    },
    {
      name: 'Ortodoncia',
      nameEn: 'Orthodontics',
      href: '/especialidades/ortodoncia',
      description: 'Corrección de la alineación dental',
      descriptionEn: 'Dental alignment correction'
    },
    {
      name: 'Odontopediatría',
      nameEn: 'Pediatric Dentistry',
      href: '/especialidades/odontopediatria',
      description: 'Odontología especializada para niños',
      descriptionEn: 'Specialized dentistry for children'
    }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-dental-blue">
            {t('nav.specialties')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-2 gap-3 p-6">
              {specialties.map((specialty) => (
                <NavigationMenuLink key={specialty.href} asChild>
                  <Link
                    to={specialty.href}
                    className={cn(
                      "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-dental-light/20 hover:text-dental-navy focus:bg-dental-light/20 focus:text-dental-navy"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {t('language') === 'es' ? specialty.name : specialty.nameEn}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t('language') === 'es' ? specialty.description : specialty.descriptionEn}
                    </p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SpecialtiesDropdown;