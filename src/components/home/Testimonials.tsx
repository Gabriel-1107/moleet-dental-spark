import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "María González",
      location: "Guadalajara",
      treatment: "Diseño de Sonrisa",
      rating: 5,
      text: "El equipo de Moleet Dental Unit cambió completamente mi vida. Mi nueva sonrisa me ha dado mucha más confianza. El trato es excelente y muy profesional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Carlos Ramírez",
      location: "Chapala",
      treatment: "Implantes Dentales",
      rating: 5,
      text: "Después de años sin poder masticar bien, los implantes me devolvieron la funcionalidad completa. El Dr. y su equipo son excepcionales.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      location: "Guadalajara",
      treatment: "Ortodoncia",
      rating: 5,
      text: "Mi hija terminó su tratamiento de ortodoncia y estamos encantadas con los resultados. Todo el personal es muy amable con los niños.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Roberto Silva",
      location: "Chapala",
      treatment: "Endodoncia",
      rating: 5,
      text: "Llegué con mucho dolor y temor, pero el tratamiento fue rápido y sin molestias. Ahora puedo comer sin problema. Altamente recomendado.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Isabella Torres",
      location: "Guadalajara",
      treatment: "Blanqueamiento",
      rating: 5,
      text: "El blanqueamiento superó mis expectativas. Mi sonrisa se ve natural y radiante. El equipo me explicó todo el proceso paso a paso.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Fernando López",
      location: "Chapala",
      treatment: "Cirugía Periodontal",
      rating: 5,
      text: "Tenía problemas serios en las encías. Después del tratamiento, mi salud oral mejoró completamente. Muy profesionales y cuidadosos.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-dental transition-all duration-300 hover:-translate-y-1 border-dental-light/20"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-dental-blue opacity-60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-dental-light/20">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-dental-light">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dental-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.treatment} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-dental rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/90">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">2</div>
              <div className="text-white/90">Ubicaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;