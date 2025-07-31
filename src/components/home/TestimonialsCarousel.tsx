import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Guadalajara",
      rating: 5,
      text: "Excelente atención y profesionalismo. Los doctores son muy amables y explican todo el proceso. Mi sonrisa cambió completamente.",
      treatment: "Implantes dentales"
    },
    {
      name: "John Smith",
      location: "USA",
      rating: 5,
      text: "Amazing service! The staff is professional and caring. Best dental experience I've ever had. Highly recommended for dental tourism.",
      treatment: "Complete restoration"
    },
    {
      name: "Ana Rodríguez",
      location: "Chapala",
      rating: 5,
      text: "El servicio de transporte desde el aeropuerto fue perfecto. Todo muy organizado y la clínica es súper moderna.",
      treatment: "Limpieza dental"
    },
    {
      name: "Robert Johnson",
      location: "Canada",
      rating: 5,
      text: "Outstanding quality at a fraction of the cost back home. The doctors speak excellent English and made me feel comfortable.",
      treatment: "Dental crowns"
    },
    {
      name: "Carmen López",
      location: "Guadalajara",
      rating: 5,
      text: "Después de años de problemas dentales, finalmente encontré la solución aquí. Estoy muy agradecida con todo el equipo.",
      treatment: "Ortodoncia"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="bg-white shadow-dental border-0 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-dental-light rounded-full flex items-center justify-center mb-6">
                  <Quote className="h-8 w-8 text-dental-navy" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-xl text-dental-navy">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentSlide].location}
                  </p>
                  <p className="text-sm text-dental-blue font-medium">
                    {testimonials[currentSlide].treatment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-dental-light hover:border-dental-blue"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-dental-light hover:border-dental-blue"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-dental-navy w-8' 
                    : 'bg-gray-300 hover:bg-dental-light'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;