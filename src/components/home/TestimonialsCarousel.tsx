import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Mostrar 3 testimonios inicialmente

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
    },
    {
      name: "Carlos Mendoza",
      location: "Monterrey",
      rating: 5,
      text: "Increíble experiencia desde la consulta inicial hasta el procedimiento final. Los resultados superaron mis expectativas.",
      treatment: "Carillas dentales"
    },
    {
      name: "Laura Wilson",
      location: "UK",
      rating: 5,
      text: "The entire process was seamless. From the initial consultation to the follow-up care, everything was handled with utmost professionalism.",
      treatment: "Root canal treatment"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / visibleCount));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / visibleCount)) % Math.ceil(testimonials.length / visibleCount));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleShowAll = () => {
    setShowAllTestimonials(!showAllTestimonials);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonials.length));
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  // Si estamos en modo "ver todos", mostrar todos los testimonios
  if (showAllTestimonials) {
    return (
      <section className="py-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <Button
              variant="outline"
              onClick={toggleShowAll}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cerrar vista completa
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-dental border-0 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-dental-light rounded-full flex items-center justify-center mb-4">
                      <Quote className="h-5 w-5 text-dental-navy" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg text-dental-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-dental-blue font-medium">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Calcular qué testimonios mostrar en el carrusel
  const startIndex = currentSlide * visibleCount;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={startIndex + index} className="bg-white shadow-dental border-0 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-dental-light rounded-full flex items-center justify-center mb-4">
                      <Quote className="h-5 w-5 text-dental-navy" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg text-dental-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-dental-blue font-medium">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons - Only show if we have more testimonials than visible */}
          {testimonials.length > visibleCount && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-gray-200 hover:bg-dental-light hover:border-dental-blue"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-gray-200 hover:bg-dental-light hover:border-dental-blue"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(Math.ceil(testimonials.length / visibleCount))].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-dental-navy w-6' 
                    : 'bg-gray-300 hover:bg-dental-light'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button 
              onClick={toggleShowAll}
              variant="outline"
              className="flex items-center gap-2 mx-auto"
            >
              Ver todos los testimonios
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;