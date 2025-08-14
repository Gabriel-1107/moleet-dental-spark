import { MapPin, Phone, Clock, Mail, Globe, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Guadalajara = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: "Dr. Ramón Alejandro Monroy Salcedo ",
      image: "/lovable-uploads/doctors/dr-4.jpg",
      specialty: "Odontología General",
      specialtyEn: "General Dentistry",
      experience: 15,
      description: "Especialista en odontología general preventiva con enfoque en cuidado familiar integral.",
      descriptionEn: "Specialist in preventive general dentistry with a focus on comprehensive family care."
    },
    {
      name: "Dr. Silverio Jafet Vazquez Alcaraz",
      image: "/lovable-uploads/doctors/dr-1.jpg",
      specialty: "Endodoncia",
      specialtyEn: "Endodontics",
      experience: 12,
      description: "Endodoncista dedicado a la preservación dental. Especializado en casos de urgencias y retratamientos.",
      descriptionEn: "Endodontist dedicated to dental preservation. Specialized in emergency cases and retreatments."
    },
    {
      name: "Dr. Jong kwan Lee",
      image: "/lovable-uploads/doctors/dr-5.jpg",
      specialty: "Periodoncia",
      specialtyEn: "Periodontics",
      experience: 16,
      description: "Especialista en periodoncia preventiva y estética. Enfoque integral en la salud gingival y periodontal.",
      descriptionEn: "Specialist in preventive and aesthetic periodontics. Comprehensive approach to gingival and periodontal health."
    },
    {
      name: "Dra. Andrea Ochoa Martínez",
      image: "/lovable-uploads/doctors/dr-3.jpg",
      specialty: "Cirugía Maxilofacial",
      specialtyEn: "Oral Surgery",
      experience: 19,
      description: "Especialista en cirugía oral y trauma facial. Experta en sedación consciente y cirugía ambulatoria.",
      descriptionEn: "Specialist in oral surgery and facial trauma. Expert in conscious sedation and outpatient surgery."
    },
    {
      name: "Dr. Sebastián Luna",
      image: "/lovable-uploads/doctors/dr-2.jpg",
      specialty: "Estética Dental",
      specialtyEn: "Cosmetic Dentistry",
      experience: 17,
      description: "Experto en rehabilitación estética integral. Especializado en carillas y armonización facial.",
      descriptionEn: "Expert in comprehensive aesthetic rehabilitation. Specialized in veneers and facial harmonization."
    },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita en su sucursal de Guadalajara.`);
    window.open(`https://wa.me/3326312137?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:3336291846', '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/10039935/pexels-photo-10039935.jpeg)` }}
        >
          <div className="absolute inset-0 bg-dental-navy/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            {t('branches.guadalajara.name')}
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            {t('language') === 'es' 
              ? "Nuestra sede principal en el corazón de Guadalajara con tecnología de vanguardia"
              : "Our main headquarters in the heart of Guadalajara with cutting-edge technology"
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
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
                  alt="Sucursal Guadalajara"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-2xl font-bold">Moleet Dental Unit</h3>
                  <p className="text-white/90">Guadalajara</p>
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
                      <p className="text-muted-foreground">Av. Sebastian Bach 4754, Prados Guadalupe, 45030 Zapopan, Jal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-dental-blue mt-1" />
                    <div>
                      <p className="font-medium text-dental-navy">{t('branches.phone')}</p>
                      <p className="text-muted-foreground">+523336291846</p>
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
                      <p className="text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Sáb: 9:00 - 14:00</p>
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
                    <div className="flex justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3732.9231309389825!2d-103.4209521!3d20.6727061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae9063727195%3A0xb658138b4ecc912b!2sMOLEET%20DENTAL%20UNIT%20(Dentistas%20Especializados)!5e0!3m2!1ses-419!2smx!4v1754328402650!5m2!1ses-419!2smx"
                        width="750"
                        height="478"
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
                ? "Conoce a nuestro equipo especializado en Guadalajara"
                : "Meet our specialized team in Guadalajara"
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
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en la sucursal de Guadalajara.`);
                      window.open(`https://wa.me/523312345678?text=${message}`, '_blank');
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

export default Guadalajara;