import { Stethoscope, Shield, Sparkles, Users, Award, Heart, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Servicios = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      titleKey: "services.general.title",
      descriptionKey: "services.general.description",
      features: [
        "services.general.feature1",
        "services.general.feature2", 
        "services.general.feature3",
        "services.general.feature4"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      titleKey: "services.aesthetic.title",
      descriptionKey: "services.aesthetic.description",
      features: [
        "services.aesthetic.feature1",
        "services.aesthetic.feature2",
        "services.aesthetic.feature3", 
        "services.aesthetic.feature4"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      titleKey: "services.endodontics.title",
      descriptionKey: "services.endodontics.description",
      features: [
        "services.endodontics.feature1",
        "services.endodontics.feature2",
        "services.endodontics.feature3",
        "services.endodontics.feature4"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      titleKey: "services.periodontics.title",
      descriptionKey: "services.periodontics.description",
      features: [
        "services.periodontics.feature1",
        "services.periodontics.feature2",
        "services.periodontics.feature3",
        "services.periodontics.feature4"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      titleKey: "services.surgery.title",
      descriptionKey: "services.surgery.description",
      features: [
        "services.surgery.feature1",
        "services.surgery.feature2",
        "services.surgery.feature3",
        "services.surgery.feature4"
      ],
      popular: true,
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Heart,
      titleKey: "services.pediatric.title",
      descriptionKey: "services.pediatric.description",
      features: [
        "services.pediatric.feature1",
        "services.pediatric.feature2",
        "services.pediatric.feature3",
        "services.pediatric.feature4"
      ],
      popular: false,
      color: "from-pink-500 to-rose-500"
    },

    {
      icon: Heart,
      titleKey: "services.rehabilitacionoral.title",
      descriptionKey: "services.rehabilitacionoral.description",
      features: [
        "services.rehabilitacionoral.feature1",
        "services.rehabilitacionoral.feature2",
        "services.rehabilitacionoral.feature3",
        "services.rehabilitacionoral.feature4"
      ],
      popular: false,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300">
            {t('services.badge')}
          </Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden relative"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    {t('services.popular')}
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-6 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-dental-blue transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-foreground/80">{t(feature)}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-2xl"
                  >
                    {t('services.learnMore')}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advanced Treatments Section */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 mb-20 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              {t('services.advanced.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('services.advanced.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{t('services.technology.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('services.technology.description')}</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{t('services.safety.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('services.safety.description')}</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
               <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{t('services.care.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('services.care.description')}</p>
                   <p className="text-muted-foreground text-sm">{t('services.care.description')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-display font-bold mb-6">
              {t('services.cta.title')}
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl shadow-lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('services.cta.contact')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-blue-950 hover:bg-white/90 hover:text-primary font-semibold px-8 py-4 rounded-2xl"
                onClick={() => window.location.href = '/precios'}
              >
                {t('services.cta.prices')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;