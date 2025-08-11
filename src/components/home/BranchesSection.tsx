import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const BranchesSection = () => {
  const { t } = useLanguage();

  const branches = [
    {
      name: t('branches.guadalajara.name'),
      image: 'lovable-uploads/guadalajara.png',
      location: 'Guadalajara (Zapopan), Jalisco',
      description:t('services.guadalajara.name'),
      link: '/sucursales/guadalajara'
    },
    {
      name: t('branches.chapala.name'),
      image: 'lovable-uploads/chapala.png',
      location: 'Chapala, Jalisco',
      description: t('services.chapala.name'),
      link: '/sucursales/chapala'

    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('branches.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('branches.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-dental transition-all duration-500 hover:-translate-y-3 border-0"
            >
              {/* Branch Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-2xl font-bold mb-1">{branch.name}</h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{branch.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {branch.description}
                </p>

                <Button 
                  asChild
                  className="w-full bg-gradient-dental hover:opacity-90 text-white group"
                >
                  <Link to={branch.link}>
                       {t('sucursal.desc')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-dental text-white max-w-2xl mx-auto border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿No sabes cuál sucursal elegir?</h3>
              <p className="text-white/90 mb-6">
                Contáctanos y te ayudaremos a elegir la ubicación más conveniente para ti
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;