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

      {/* Interactive Transport Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-dental-navy mb-4">
              {t('transport.routes.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('transport.routes.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544744173-6bed9bb36c2e?w=600&h=400&fit=crop"
                  alt="Airport Pickup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                      <Plane className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {t('transport.pickup.title')}
                    </h3>
                    <p className="text-sm text-white/90">
                      {t('transport.pickup.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                  alt="Comfortable Transport"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {t('transport.comfort.title')}
                    </h3>
                    <p className="text-sm text-white/90">
                      {t('transport.comfort.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                  alt="Hotel Transfer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {t('transport.hotel.title')}
                    </h3>
                    <p className="text-sm text-white/90">
                      {t('transport.hotel.description')}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white rounded-3xl border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-dental-navy mb-4">
                    {t('transport.booking.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('transport.booking.description')}
                  </p>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;