import { MapPin, Phone, Clock, Mail, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Chapala = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: 'Dr. Silverio Jafet Vazquez Alcaraz',
      specialty: t('doctors.filter.endodontics'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Silverio.pdf',
      location: 'Zapopan/Chapala',
      experience: 18,
      image: '/lovable-uploads/doctors/dr-1.jpg',
    },
    {
      name: 'Dr. Ivan Sanches Salazar',
      specialty: t('doctors.filter.general'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Ivan.pdf',
      location: 'Chapala',
      experience: 2,
      image: '/lovable-uploads/doctors/dr-2.jpg',
    },
    {
      name: 'Dr. Jong kwan Lee',
      specialty: t('doctors.filter.rehabilitation'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Jong.pdf',
      location: 'Zapopan',
      experience: 18,
      image: '/lovable-uploads/doctors/dr-5.jpg',
    },
    {
      name: 'Dr. Ramón Alejandro Monroy Salcedo ',
      specialty: t('doctors.filter.general'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Ramon.pdf',
      location: 'Chapala',
      experience: 18,
      image: '/lovable-uploads/doctors/dr-4.jpg',
    },
    {
      name: 'Dra. Sara Cruz Delgadillo',
      specialty: t('doctors.filter.surgery'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Sara.pdf',
      location: 'Zapopan',
      experience: 18,
      image: '/lovable-uploads/doctors/dr-3.jpg',
    }
  ];

  // Función para abrir el PDF
  const openCurriculumPdf = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita en su sucursal de Chapala.`);
    window.open(`https://wa.me/523310235792?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+523310235792', '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/30726589/pexels-photo-30726589.jpeg)` }}
        >
          <div className="absolute inset-0 bg-dental-navy/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            {t('branches.chapala.name')}
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            {t('language') === 'es' 
              ? "Sucursal especializada en turismo dental con servicios integrales y transporte incluido"
              : "Branch specialized in dental tourism with comprehensive services and transportation included"
            }
          </p>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-dental-navy to-dental-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-dental">
                <img 
                  src="/lovable-uploads/dentalia-logo.png" 
                  alt="Red Dentalia-chapala" 
                  className="h-24 mx-auto object-contain"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="h-5 w-5 text-dental-light" />
                <span className="font-medium">{t('language.1') }</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('language.2') 
                }
              </h2>
              
              <p className="text-lg opacity-90 mb-6">
                {t('language.3') 
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-dental-light mb-2">
                    {t('language.4')}
                  </h4>
                  <p className="text-sm opacity-80">
                    {t('language.5')
                    }
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-dental-light mb-2">
                    {t('language.6')}
                  </h4>
                  <p className="text-sm opacity-80">
                    {t('language.7') 
                    }
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-bold text-dental-light mb-2">
                    {t('language.8')}
                  </h4>
                  <p className="text-sm opacity-80">
                    {t('language.9') 
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <Card className="h-fit shadow-dental rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=400&fit=crop"
                  alt="Sucursal Chapala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-2xl font-bold">Moleet Dental Unit</h3>
                  <p className="text-white/90">Chapala</p>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-dental-navy mb-6">
                  {t('branches.contactInfo')}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">Dirección</p>
                      <p className="text-muted-foreground">Av. Madero 567, Centro, Chapala, Jalisco</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">{t('branches.phone')}</p>
                      <p className="text-muted-foreground">+523350211248</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">{t('branches.email')}</p>
                      <p className="text-muted-foreground">moleetmedicalunit@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">{t('branches.schedule')}</p>
                      <p className="text-muted-foreground">Lun - Vie: 8:00 - 17:00</p>
                      <p className="text-muted-foreground">Sáb: 8:00 - 13:00</p>
                    </div>
                  </div>
                </div>
                

                <div className="flex gap-3">
                  <Button 
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t('branches.whatsapp')}
                  </Button>
                  <Button 
                    onClick={handleCall}
                    variant="outline"
                    className="flex-1 border-dental-blue text-dental-blue hover:bg-dental-light rounded-xl"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {t('branches.call')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="h-fit shadow-dental rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-dental-light to-dental-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-dental-blue" />
                    <h3 className="font-display text-xl font-bold mb-2">Ubicación Interactiva</h3>
                    <div className="flex justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3732.9231309389825!2d-103.4209521!3d20.6727061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae9063727195%3A0xb658138b4ecc912b!2sMOLEET%20DENTAL%20UNIT%20(Dentistas%20Especializados)!5e0!3m2!1ses-419!2smx!4v1754328402650!5m2!1ses-419!2smx"
                        width="800"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dental-navy mb-4">
              {t('branches.ourDoctors')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('language') === 'es' 
                ? "Conoce a nuestro equipo especializado en Chapala"
                : "Meet our specialized team in Chapala"
              }
            </p>
          </div>

          {/* Grid de doctores - Versión simplificada sin filtros */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-dental transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Imagen del doctor */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-dental-navy text-white">
                      {doctor.experience} {t('language') === 'es' ? 'años' : 'years'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="font-bold text-dental-navy text-lg">{doctor.name}</h3>
                      <p className="text-dental-blue font-medium">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-dental-blue" />
                    <span className="text-sm text-muted-foreground">{doctor.location}</span>
                  </div>

                  {/* Botón para ver curriculum */}
                  <Button 
                    className="w-full bg-gradient-dental hover:opacity-90 text-white mb-2"
                    onClick={() => {
                      if (doctor.curriculumPdf) {
                        openCurriculumPdf(doctor.curriculumPdf);
                      }
                    }}
                  >
                     {t('doctors.schedule')}
                  </Button>
                  
                  {/* Botón para agendar cita */}
                  {/* <Button 
                    variant="outline"
                    className="w-full border-dental-blue text-dental-blue hover:bg-dental-light/20"
                    onClick={() => {
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en la sucursal de Chapala.`);
                      window.open(`https://wa.me/523310235792?text=${message}`, '_blank');
                    }}
                  >
                    {t('language') === 'es' ? 'Agendar Cita' : 'Book Appointment'}
                  </Button> */}
                </CardContent>
              </Card>
              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapala;