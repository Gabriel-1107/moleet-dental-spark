import { Stethoscope, Shield, Sparkles, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: "Odontología General",
      description: "Cuidado integral de tu salud dental con tratamientos preventivos y curativos.",
      features: ["Limpiezas", "Empastes", "Extracciones", "Revisiones"]
    },
    {
      icon: Sparkles,
      title: "Estética Dental",
      description: "Transforma tu sonrisa con tratamientos estéticos de última generación.",
      features: ["Blanqueamiento", "Carillas", "Coronas", "Diseño de Sonrisa"]
    },
    {
      icon: Shield,
      title: "Endodoncia",
      description: "Especialistas en tratamientos de conducto para salvar tus dientes.",
      features: ["Tratamientos de Conducto", "Retratamientos", "Apicectomías", "Pulpotomías"]
    },
    {
      icon: Users,
      title: "Periodoncia",
      description: "Cuidado especializado de encías y soporte dental.",
      features: ["Tratamiento de Gingivitis", "Cirugía Periodontal", "Implantes", "Mantenimiento"]
    },
    {
      icon: Award,
      title: "Cirugía Maxilofacial",
      description: "Procedimientos quirúrgicos especializados en boca y mandíbula.",
      features: ["Extracciones Complejas", "Implantes", "Cirugía Orthognática", "Traumatología"]
    },
    {
      icon: Heart,
      title: "Odontopediatría",
      description: "Cuidado dental especializado para los más pequeños de la familia.",
      features: ["Revisiones Infantiles", "Selladores", "Tratamientos Preventivos", "Ortodoncia Temprana"]
    }
  ];

  return (
    <section id="servicios" className="py-section bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-dental transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-dental rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-dental-navy">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="w-full pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="text-sm text-dental-blue bg-dental-light/20 rounded-full px-3 py-1 text-center"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-card-dental">
            <h3 className="text-2xl font-display font-bold text-dental-navy mb-4">
              ¿Necesitas un tratamiento específico?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros especialistas están aquí para ayudarte. Agenda una consulta personalizada.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-dental text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Agenda tu Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;