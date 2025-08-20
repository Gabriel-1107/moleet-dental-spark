import { useState, useEffect } from 'react';

const ImageMarqueeCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Array de imágenes para el carrusel con textos ALT optimizados para SEO
  const images = [
    {
      id: 1,
      alt: "Moleet Dental Zapopan - Cámara hiperbárica para tratamientos dentales avanzados",
      url: 'lovable-uploads/doctors/dr-1.jpg',
    },
    {
      id: 2,
      alt: "Clínica dental Moleet en Zapopan - Consultorio moderno con tecnología de punta",
      url: 'lovable-uploads/doctors/dr-2.jpg',
    },
    {
      id: 3,
      alt: "Dentistas en Chapala - Equipos de última generación en Moleet Dental",
      url: 'lovable-uploads/doctors/dr-3.jpg',
    },
    {
      id: 4,
      alt: "Ortodoncia en Zapopan - Especialistas de Moleet Dental trabajando con paciente",
      url: 'lovable-uploads/doctors/dr-4.jpg',
    },
    {
      id: 5,
      alt: "Blanqueamiento dental en Chapala - Sonrisa perfecta con tratamientos Moleet",
      url: 'lovable-uploads/doctors/dr-5.jpg',
    },
    {
      id: 6,
      alt: "Implantes dentales Zapopan - Sala de espera moderna en clínica Moleet Dental",
      url: 'lovable-uploads/sucursal-chapala.png',
    },
    {
      id: 7,
      alt: "Endodoncia Chapala - Dentistas especializados de Moleet Dental en consulta",
      url: 'lovable-uploads/instalations.png',
    },
    {
      id: 8,
      alt: "Odontopediatría Zapopan - Atención dental para niños en Moleet Dental",
      url: 'lovable-uploads/dr-monrroy.png',
    }
  ];

  // Duplicar las imágenes para crear un efecto continuo
  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-r from-dental-navy to-dental-blue text-white py-6">
      <div className="container mx-auto px-4">
       
        
        <div className="relative flex overflow-hidden whitespace-nowrap">
          {/* Contenedor con dos copias de las imágenes */}
          <div 
            className={`flex min-w-max ${isPaused ? 'animate-none' : 'animate-marquee'}`}
            onMouseEnter={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedImages.map((image, index) => (
              <div key={`${image.id}-${index}`} className="mx-4 flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-lg transition-transform duration-300">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
            ))}
          </div>
        </div>
       
        
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        
      `}</style>
    </section>
  );
};

export default ImageMarqueeCarousel;