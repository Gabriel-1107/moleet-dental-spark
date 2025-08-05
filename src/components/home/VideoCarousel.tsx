import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'tour-virtual',
      title: 'Tour Virtual de la Clínica',
      description: 'Conoce nuestras modernas instalaciones',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      videoUrl: 'lovable-uploads/tour-virtual.mp4'
    },
    {
      id: 'implantes',
      title: 'Proceso de Implantes Dentales',
      description: 'Descubre cómo realizamos los implantes',
      thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop',
      videoUrl: 'lovable-uploads/implantes.mp4'
    },
    {
      id: 'testimonios-video',
      title: 'Testimonios de Pacientes',
      description: 'Historias reales de transformación',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      videoUrl: 'lovable-uploads/testimonios.mp4'
    },
    {
      id: 'tecnologia',
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      videoUrl: 'lovable-uploads/tecnologia.mp4'
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento Dental',
      description: 'Proceso paso a paso',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      videoUrl: 'lovable-uploads/blanqueamiento.mp4'
    }
  ];

  const videosPerView = 3;
  const maxSlide = Math.ceil(videos.length / videosPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getVisibleVideos = () => {
    const startIndex = currentSlide * videosPerView;
    return videos.slice(startIndex, startIndex + videosPerView);
  };

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            Videos Informativos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestros tratamientos y conoce mejor nuestros servicios
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleVideos().map((video, index) => (
              <Card 
                key={video.id}
                className="group cursor-pointer overflow-hidden hover:shadow-dental transition-all duration-300 hover:-translate-y-1"
                onClick={() => openVideo(video.videoUrl)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-dental-navy ml-1" />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                      <p className="text-sm text-white/80">{video.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          {videos.length > videosPerView && (
            <>
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
            </>
          )}

          {/* Dots Indicator */}
          {videos.length > videosPerView && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-dental-navy w-8' 
                      : 'bg-gray-300 hover:bg-dental-light'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeVideo}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;