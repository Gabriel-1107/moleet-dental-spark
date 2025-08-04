import { MapPin, Phone, Clock, Mail, Globe, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Chapala = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: "Dra. Patricia Hernández",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      specialty: "Odontología General",
      specialtyEn: "General Dentistry",
      experience: 15,
      description: "Especialista en odontología general preventiva con enfoque en cuidado familiar integral.",
      descriptionEn: "Specialist in preventive general dentistry with a focus on comprehensive family care."
    },
    {
      name: "Dr. Carlos Mendoza",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      specialty: "Endodoncia",
      specialtyEn: "Endodontics",
      experience: 12,
      description: "Endodoncista dedicado a la preservación dental. Especializado en casos de urgencias y retratamientos.",
      descriptionEn: "Endodontist dedicated to dental preservation. Specialized in emergency cases and retreatments."
    },
    {
      name: "Dra. Ana Jiménez",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      specialty: "Periodoncia",
      specialtyEn: "Periodontics",
      experience: 16,
      description: "Especialista en periodoncia preventiva y estética. Enfoque integral en la salud gingival y periodontal.",
      descriptionEn: "Specialist in preventive and aesthetic periodontics. Comprehensive approach to gingival and periodontal health."
    },
    {
      name: "Dra. Mónica Cruz",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      specialty: "Cirugía Maxilofacial",
      specialtyEn: "Oral Surgery",
      experience: 19,
      description: "Especialista en cirugía oral y trauma facial. Experta en sedación consciente y cirugía ambulatoria.",
      descriptionEn: "Specialist in oral surgery and facial trauma. Expert in conscious sedation and outpatient surgery."
    },
    {
      name: "Dr. Sebastián Luna",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      specialty: "Estética Dental",
      specialtyEn: "Cosmetic Dentistry",
      experience: 17,
      description: "Experto en rehabilitación estética integral. Especializado en carillas y armonización facial.",
      descriptionEn: "Expert in comprehensive aesthetic rehabilitation. Specialized in veneers and facial harmonization."
    },
    {
      name: "Dr. Eduardo Campos",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      specialty: "Ortodoncia",
      specialtyEn: "Orthodontics",
      experience: 15,
      description: "Especialista en ortodoncia para todas las edades. Enfoque personalizado en cada tratamiento ortodóntico.",
      descriptionEn: "Specialist in orthodontics for all ages. Personalized approach to each orthodontic treatment."
    },
    {
      name: "Dr. José Herrera",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      specialty: "Odontopediatría",
      specialtyEn: "Pediatric Dentistry",
      experience: 13,
      description: "Especialista en odontología preventiva infantil. Enfoque lúdico y educativo para crear experiencias positivas.",
      descriptionEn: "Specialist in preventive pediatric dentistry. Playful and educational approach to create positive experiences."
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita en su sucursal de Chapala.`);
    window.open(`https://wa.me/523376543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+523376543210', '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1920&h=1080&fit=crop)` }}
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
                      <p className="text-muted-foreground">+52 33 7654-3210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">{t('branches.email')}</p>
                      <p className="text-muted-foreground">chapala@moleetdental.com</p>
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
                  <div className="text-center text-dental-navy">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-dental-blue" />
                    <h3 className="font-display text-xl font-bold mb-2">Ubicación Interactiva</h3>
                    <p className="text-muted-foreground">Mapa de Google Maps aquí</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-dental transition-all duration-300 hover:-translate-y-2 rounded-2xl border-0 shadow-lg">
                <div className="relative h-64">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-dental-navy text-white rounded-xl">
                      {doctor.experience} años
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-dental-navy mb-1">{doctor.name}</h3>
                  <p className="text-dental-blue font-medium mb-3">
                    {t('language') === 'es' ? doctor.specialty : doctor.specialtyEn}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('language') === 'es' ? doctor.description : doctor.descriptionEn}
                  </p>
                  <Button 
                    className="w-full bg-gradient-dental hover:opacity-90 text-white rounded-xl"
                    onClick={() => {
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en la sucursal de Chapala.`);
                      window.open(`https://wa.me/523376543210?text=${message}`, '_blank');
                    }}
                  >
                    {t('language') === 'es' ? 'Agendar Cita' : 'Book Appointment'}
                  </Button>
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