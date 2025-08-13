import { useState } from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Doctores = () => {
  const { t } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todos');

  const specialties = [
    'Todos',
    'Odontología General',
    'Endodoncia',
    'Periodoncia',
    'Cirugía Maxilofacial',
    'Estética Dental',
    'Ortodoncia',
    'Odontopediatría',
    'Rehabilitación Oral'
  ];

  const doctors = [
    {
      name: 'Dr. Carlos Mendoza',
      specialty: 'Endodoncia',
      location: 'Guadalajara',
      experience: 15,
      education: ['Universidad de Guadalajara', 'Especialidad en Endodoncia - UNAM'],
      certifications: ['Consejo Mexicano de Endodoncia', 'American Association of Endodontists'],
      image: 'lovable-uploads/doctors/dr-1.jpg',
      languages: ['Español', 'Inglés'],
      description: 'Especialista en tratamientos de conducto con más de 15 años de experiencia. Pionero en técnicas de endodoncia microscópica.'
    },
    {
      name: 'Dr. Roberto García',
      specialty: 'Periodoncia',
      location: 'Chapala',
      experience: 12,
      education: ['Universidad Autónoma de Guadalajara', 'Maestría en Periodoncia - Universidad de Barcelona'],
      certifications: ['Sociedad Mexicana de Periodoncia', 'European Federation of Periodontology'],
      image: 'lovable-uploads/doctors/dr-2.jpg',
      languages: ['Español', 'Inglés', 'Francés'],
      description: 'Experta en tratamientos periodontales y cirugía de encías. Especializada en implantes dentales y regeneración ósea.'
    },
    {
      name: 'Dr. Jong kwan Lee',
      specialty: 'Rehabilitación Oral',
      location: 'Guadalajara',
      experience: 10,
      education: ['Universidad de Guadalajara', 'Diplomado en Estética Dental - Universidad de São Paulo'],
      certifications: ['American Academy of Cosmetic Dentistry', 'International Association for Dental Aesthetics'],
      image: 'lovable-uploads/doctors/dr-5.jpg',
      languages: ['Español', 'Inglés', 'Portugués'],
      description: 'Especialista en diseño de sonrisa y estética dental. Pionera en técnicas de carillas ultra delgadas y blanqueamiento avanzado.'
    },
    {
      name: 'Dr. Ramón Alejandro Monroy Salcedo ',
      specialty: 'Odontología General',
      location: 'Chapala',
      experience: 20,
      education: ['Universidad Nacional Autónoma de México', 'Diplomado en Rehabilitación Oral'],
      certifications: ['Colegio Nacional de Cirujanos Dentistas', 'Academy of General Dentistry'],
      image: 'lovable-uploads/doctors/dr-4.jpg',
      languages: ['Español', 'Inglés'],
      description: 'Odontólogo general con dos décadas de experiencia. Especializado en rehabilitación oral integral y prótesis.'
    },
    {
      name: 'Dra. Ana Torres',
      specialty: 'Cirugía Maxilofacial',
      location: 'Guadalajara',
      experience: 18,
      education: ['Universidad Nacional Autónoma de México', 'Residencia en Cirugía Maxilofacial - Hospital General'],
      certifications: ['Consejo Mexicano de Cirugía Maxilofacial', 'International Association of Oral and Maxillofacial Surgeons'],
      image: 'lovable-uploads/doctors/dr-3.jpg',
      languages: ['Español', 'Inglés'],
      description: 'Cirujano maxilofacial con amplia experiencia en cirugía reconstructiva, implantes complejos y traumatología facial.'
    },
    {
      name: 'Dr. Fernando López',
      specialty: 'Ortodoncia',
      location: 'Chapala',
      experience: 14,
      education: ['Universidad Autónoma de Guadalajara', 'Especialidad en Ortodoncia - Universidad de Michoacán'],
      certifications: ['Asociación Mexicana de Ortodoncia', 'World Federation of Orthodontists'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      languages: ['Español', 'Inglés'],
      description: 'Ortodoncista especializado en ortodoncia invisible y técnicas de corrección rápida. Experto en casos complejos.'
    },
    {
      name: 'Dra. Lucía Hernández',
      specialty: 'Odontopediatría',
      location: 'Guadalajara',
      experience: 8,
      education: ['Universidad de Guadalajara', 'Especialidad en Odontopediatría - Universidad Iberoamericana'],
      certifications: ['Academia Mexicana de Odontopediatría', 'International Association of Paediatric Dentistry'],
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
      languages: ['Español', 'Inglés'],
      description: 'Especialista en odontología infantil con enfoque en técnicas de manejo conductual y prevención en niños.'
    },
    {
      name: 'Dra. Sofia Vega',
      specialty: 'Estética Dental',
      location: 'Guadalajara',
      experience: 9,
      education: ['Universidad Autónoma de Guadalajara', 'Certificación en DSD - Digital Smile Design'],
      certifications: ['Digital Smile Design Certified', 'International Federation of Esthetic Dentistry'],
      image: 'https://images.unsplash.com/photo-1627922851687-efd91b60da2f?w=400&h=400&fit=crop&crop=face',
      languages: ['Español', 'Inglés', 'Italiano'],
      description: 'Especialista en diseño digital de sonrisa y tecnología CAD/CAM. Experta en rehabilitaciones estéticas complejas.'
    }
  ];

  const filteredDoctors = selectedSpecialty === 'Todos' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            Nuestros Especialistas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce a nuestro equipo de especialistas altamente calificados, comprometidos con tu salud oral
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty) => (
            <Button
              key={specialty}
              variant={selectedSpecialty === specialty ? 'default' : 'outline'}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`${
                selectedSpecialty === specialty 
                  ? 'bg-dental-navy hover:bg-dental-navy/90' 
                  : 'border-dental-blue text-dental-blue hover:bg-dental-light/20'
              }`}
            >
              {specialty}
            </Button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-dental transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-dental-navy text-white">
                    {doctor.experience} años
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

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {doctor.description}
                </p>

                {/* Education */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-4 w-4 text-dental-blue" />
                    <span className="text-sm font-medium text-dental-navy">Educación</span>
                  </div>
                  <div className="space-y-1">
                    {doctor.education.slice(0, 2).map((edu, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground">• {edu}</p>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-dental-blue" />
                    <span className="text-sm font-medium text-dental-navy">Certificaciones</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {doctor.certifications.slice(0, 2).map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert.split(' ')[0]}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-dental-navy">Idiomas: </span>
                  <span className="text-sm text-muted-foreground">
                    {doctor.languages.join(', ')}
                  </span>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-dental hover:opacity-90 text-white"
                  onClick={() => {
                    const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en ${doctor.location}.`);
                    window.open(`https://wa.me/523312345678?text=${message}`, '_blank');
                  }}
                >
                  Agendar Cita
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-dental text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿No sabes qué especialista necesitas?</h3>
              <p className="text-white/90 mb-6">
                Agenda una consulta general y te ayudaremos a determinar el tratamiento ideal para ti.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consulta General
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Doctores;