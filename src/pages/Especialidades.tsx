import { Stethoscope, Shield, Sparkles, Users, Award, Heart, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Especialidades = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      icon: Stethoscope,
      titleKey: "specialties.odontologia-general.name",
      descriptionKey: "specialties.odontologia-general.description",
      features: [
        "specialties.odontologia-general.feature1",
        "specialties.odontologia-general.feature2",
        "specialties.odontologia-general.feature3",
        "specialties.odontologia-general.feature4"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop",
      href: "/especialidades/odontologia-general"
    },
    {
      icon: Shield,
      titleKey: "specialties.endodoncia.name",
      descriptionKey: "specialties.endodoncia.description",
      features: [
        "specialties.endodoncia.feature1",
        "specialties.endodoncia.feature2",
        "specialties.endodoncia.feature3",
        "specialties.endodoncia.feature4"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop",
      href: "/especialidades/endodoncia"
    },
    {
      icon: Users,
      titleKey: "specialties.periodoncia.name",
      descriptionKey: "specialties.periodoncia.description",
      features: [
        "specialties.periodoncia.feature1",
        "specialties.periodoncia.feature2",
        "specialties.periodoncia.feature3",
        "specialties.periodoncia.feature4"
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&h=1080&fit=crop",
      href: "/especialidades/periodoncia"
    },
    {
      icon: Award,
      titleKey: "specialties.cirugia-maxilofacial.name",
      descriptionKey: "specialties.cirugia-maxilofacial.description",
      features: [
        "specialties.cirugia-maxilofacial.feature1",
        "specialties.cirugia-maxilofacial.feature2",
        "specialties.cirugia-maxilofacial.feature3",
        "specialties.cirugia-maxilofacial.feature4"
      ],
      popular: true,
      color: "from-indigo-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop",
      href: "/especialidades/cirugia-maxilofacial"
    },
    {
      icon: Sparkles,
      titleKey: "specialties.estetica-dental.name",
      descriptionKey: "specialties.estetica-dental.description",
      features: [
        "specialties.estetica-dental.feature1",
        "specialties.estetica-dental.feature2",
        "specialties.estetica-dental.feature3",
        "specialties.estetica-dental.feature4"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&h=1080&fit=crop",
      href: "/especialidades/estetica-dental"
    },
    {
      icon: Heart,
      titleKey: "specialties.ortodoncia.name",
      descriptionKey: "specialties.ortodoncia.description",
      features: [
        "specialties.ortodoncia.feature1",
        "specialties.ortodoncia.feature2",
        "specialties.ortodoncia.feature3",
        "specialties.ortodoncia.feature4"
      ],
      popular: false,
      color: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop",
      href: "/especialidades/ortodoncia"
    },
    {
      icon: Heart,
      titleKey: "specialties.odontopediatria.name",
      descriptionKey: "specialties.odontopediatria.description",
      features: [
        "specialties.odontopediatria.feature1",
        "specialties.odontopediatria.feature2",
        "specialties.odontopediatria.feature3",
        "specialties.odontopediatria.feature4"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1920&h=1080&fit=crop",
      href: "/especialidades/odontopediatria"
    },
    {
      icon: Heart,
      titleKey: "specialties.rehabilitacion-oral.name",
      descriptionKey: "specialties.rehabilitacion-oral.description",
      features: [
        "specialties.rehabilitacion-oral.feature1",
        "specialties.rehabilitacion-oral.feature2",
        "specialties.rehabilitacion-oral.feature3",
        "specialties.rehabilitacion-oral.feature4"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1920&h=1080&fit=crop",
      href: "/especialidades/odontopediatria"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300">
            {t('specialties.badge')}
          </Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
            {t('specialties.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('specialties.subtitle')}
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden relative cursor-pointer"
              onClick={() => window.location.href = specialty.href}
            >
              {specialty.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              {/* Specialty Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={t(specialty.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <specialty.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-b-3xl`} />
                
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-dental-blue transition-colors duration-300">
                    {t(specialty.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(specialty.descriptionKey)}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {specialty.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${specialty.color}`} />
                        <span className="text-foreground/80">{t(feature)}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-2xl"
                  >
                    {t('specialties.learnMore')}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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

export default Especialidades;