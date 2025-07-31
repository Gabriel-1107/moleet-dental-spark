import { Car, Clock, Shield, Users, Plane, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/home/ContactForm';

const Transport = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Car,
      title: t('transport.features.comfortable'),
      description: 'Vehículos modernos y climatizados para tu comodidad'
    },
    {
      icon: Clock,
      title: t('transport.features.punctual'),
      description: 'Llegamos siempre a tiempo a tu cita'
    },
    {
      icon: Users,
      title: t('transport.features.professional'),
      description: 'Conductores certificados y con experiencia'
    },
    {
      icon: Shield,
      title: t('transport.features.safe'),
      description: 'Vehículos asegurados y servicio confiable'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-dental-navy/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Plane className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              {t('transport.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              {t('transport.subtitle')}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t('transport.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-dental-navy mb-4">
              {t('transport.features.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-dental transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-dental-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-dental-navy" />
                  </div>
                  <h3 className="font-semibold text-xl text-dental-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-dental-navy mb-6">
                Rutas Disponibles
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dental-navy mb-2">
                      Aeropuerto → Hotel/Hospedaje
                    </h3>
                    <p className="text-muted-foreground">
                      Te recogemos en el aeropuerto y te llevamos directamente a tu lugar de hospedaje
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dental-navy mb-2">
                      Hotel → Clínica Dental
                    </h3>
                    <p className="text-muted-foreground">
                      Transporte desde tu hospedaje hasta nuestras clínicas en Guadalajara o Chapala
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dental-navy mb-2">
                      Servicio de Regreso
                    </h3>
                    <p className="text-muted-foreground">
                      Te llevamos de vuelta al aeropuerto al finalizar tu tratamiento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-dental">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-dental-navy mb-4">
                  {t('transport.booking.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('transport.booking.description')}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;