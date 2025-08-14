import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Ubicaciones = () => {
  const { t } = useLanguage();

  const locations = [
    {
      name: 'Guadalajara Centro',
      address: 'Av. Juárez 123, Col. Centro, Guadalajara, Jalisco',
      phone: '(33) 1234-5678',
      whatsapp: '3315204944',
      hours: [
        'Lunes - Viernes: 9:00 AM - 7:00 PM',
        'Sábados: 9:00 AM - 2:00 PM',
        'Domingos: Cerrado'
      ],
      mapImage: 'https://images.unsplash.com/photo-1577303935007-0d3c9d28d7db?w=800&h=400&fit=crop',
      services: ['Odontología General', 'Estética Dental', 'Endodoncia', 'Periodoncia'],
      parking: true,
      accessibility: true
    },
    {
      name: 'Chapala Lakeside',
      address: 'Av. Madero 456, Centro, Chapala, Jalisco',
      phone: '(376) 765-4321',
      whatsapp: '3310235792',
      hours: [
        'Lunes - Viernes: 10:00 AM - 6:00 PM',
        'Sábados: 10:00 AM - 1:00 PM',
        'Domingos: Cerrado'
      ],
      mapImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      services: ['Odontología General', 'Cirugía Maxilofacial', 'Implantes', 'Ortodoncia'],
      parking: true,
      accessibility: true
    }
  ];

  const handleWhatsApp = (phone: string, location: string) => {
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita en su sucursal de ${location}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.open(`tel:+52${phone.replace(/[^\d]/g, '')}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            Nuestras Ubicaciones
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visítanos en cualquiera de nuestras dos modernas clínicas dentales, equipadas con la última tecnología.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden shadow-dental hover:shadow-glow transition-all duration-300">
              {/* Location Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.mapImage}
                  alt={`Ubicación ${location.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{location.name}</h2>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Address */}
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="h-5 w-5 text-dental-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-dental-navy font-medium">{location.address}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-dental-blue" />
                    <span className="text-dental-navy font-medium">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-dental-blue" />
                    <span className="text-sm text-muted-foreground">Ver horarios</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dental-navy mb-3">Horarios de Atención:</h4>
                  <div className="space-y-2">
                    {location.hours.map((hour, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{hour}</p>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dental-navy mb-3">Servicios Disponibles:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.services.map((service, idx) => (
                      <div key={idx} className="text-sm bg-dental-light/20 text-dental-blue rounded-full px-3 py-1 text-center">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                  {location.parking && <span>🅿️ Estacionamiento</span>}
                  {location.accessibility && <span>♿ Accesible</span>}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleWhatsApp(location.whatsapp, location.name)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar por WhatsApp
                  </Button>
                  <Button
                    onClick={() => handleCall(location.phone)}
                    variant="outline"
                    className="flex-1 border-dental-blue text-dental-blue hover:bg-dental-light/20"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Info */}
        <Card className="bg-gradient-dental text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿No sabes cuál ubicación elegir?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Ambas ubicaciones cuentan con especialistas altamente calificados y equipamiento moderno. 
              Elige la que te resulte más conveniente por ubicación.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos para Asesoría
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ubicaciones;