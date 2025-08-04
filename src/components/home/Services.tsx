import { Stethoscope, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const featuredServices = [
    {
      icon: Stethoscope,
      titleKey: "services.general.title",
      descriptionKey: "services.general.description",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      titleKey: "services.aesthetic.title", 
      descriptionKey: "services.aesthetic.description",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      titleKey: "services.endodontics.title",
      descriptionKey: "services.endodontics.description", 
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Featured Services Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent rounded-3xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
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
                onClick={() => window.location.href = '/servicios'}
              >
                {t('hero.viewServices')}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-blue-800 hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-2xl"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;