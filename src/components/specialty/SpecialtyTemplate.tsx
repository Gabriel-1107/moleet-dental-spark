import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface SpecialtyTemplateProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  testimonials: Array<{
    name: string;
    text: string;
    rating: number;
    treatment: string;
  }>;
  doctors: Array<{
    name: string;
    image: string;
    experience: number;
    description: string;
    location: string;
  }>;
}

const SpecialtyTemplate = ({ title, description, image, features, testimonials, doctors }: SpecialtyTemplateProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-dental-navy/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            {description}
          </p>
          <Button 
            size="lg"
            className="bg-white text-dental-navy hover:bg-white/90 font-semibold"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dental-navy mb-4">
              Nuestros Tratamientos
            </h2>
            <p className="text-xl text-muted-foreground">
              Servicios especializados con la mejor tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-dental transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-dental-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-dental-navy rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-dental-navy mb-2">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dental-navy mb-4">
              Nuestros Especialistas
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce a nuestro equipo especializado en {title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-dental transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-dental-navy text-white">
                      {doctor.experience} años
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-dental-navy mb-2">{doctor.name}</h3>
                  <p className="text-dental-blue font-medium mb-2">{doctor.location}</p>
                  <p className="text-muted-foreground text-sm mb-4">{doctor.description}</p>
                  <Button 
                    className="w-full bg-gradient-dental hover:opacity-90 text-white"
                    onClick={() => {
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} para ${title.toLowerCase()}.`);
                      window.open(`https://wa.me/523312345678?text=${message}`, '_blank');
                    }}
                  >
                    Agendar Cita
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dental-navy mb-4">
              Testimonios de Pacientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Lo que dicen nuestros pacientes sobre {title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-dental">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="h-8 w-8 text-dental-blue" />
                  </div>
                  
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-6 text-center">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="text-center">
                    <h4 className="font-semibold text-dental-navy">{testimonial.name}</h4>
                    <p className="text-sm text-dental-blue">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyTemplate;