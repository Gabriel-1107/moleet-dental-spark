import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      alt: 'Consulta dental moderna',
      title: 'Consultorio Principal'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop',
      alt: 'Equipo dental avanzado',
      title: 'Tecnología Avanzada'
    },
    {
      type: 'video',
      src: 'https://player.vimeo.com/video/123456789',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      alt: 'Video del consultorio',
      title: 'Tour Virtual'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      alt: 'Sala de espera',
      title: 'Sala de Espera'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      alt: 'Cirugía dental',
      title: 'Quirófano'
    },
    {
      type: 'video',
      src: 'https://player.vimeo.com/video/123456790',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Proceso de tratamiento',
      title: 'Tratamientos'
    }
  ];

  const openModal = (src: string) => {
    setSelectedMedia(src);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="py-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestros modernos consultorios equipados con la última tecnología dental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-dental transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(item.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-dental-navy ml-1" />
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">
                      {item.type === 'video' ? 'Ver video' : 'Ver imagen'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                {selectedMedia.includes('vimeo') ? (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={selectedMedia}
                    alt="Vista ampliada"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;