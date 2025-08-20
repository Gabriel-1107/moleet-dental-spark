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
    { key: 'all', label: t('doctors.filter.all'), value: 'Todos' },
    { key: 'general', label: t('doctors.filter.general'), value: 'Odontología General' },
    { key: 'endodontics', label: t('doctors.filter.endodontics'), value: 'Endodoncia' },
    { key: 'periodontics', label: t('doctors.filter.periodontics'), value: 'Periodoncia' },
    { key: 'surgery', label: t('doctors.filter.surgery'), value: 'Cirugía Maxilofacial' },
    { key: 'aesthetics', label: t('doctors.filter.aesthetics'), value: 'Estética Dental' },
    { key: 'orthodontics', label: t('doctors.filter.orthodontics'), value: 'Ortodoncia' },
    { key: 'pediatrics', label: t('doctors.filter.pediatrics'), value: 'Odontopediatría' },
    { key: 'rehabilitation', label: t('doctors.filter.rehabilitation'), value: 'Rehabilitación Oral' }
  ];

  const doctors = [
    {
      name: 'Dr. Silverio Jafet Vazquez Alcaraz',
      specialty: t('doctors.filter.endodontics'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Silverio.pdf',
      location: 'Zapopan/Chapala',
      experience: 18,
      image: 'lovable-uploads/doctors/dr-1.jpg',
    },
    {
      name: 'Dr. Ivan Sanches Salazar',
      specialty: t('doctors.filter.general'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Ivan.pdf',
      location: 'Chapala',
      experience: 2,
      image: 'lovable-uploads/doctors/dr-2.jpg',
    },
    {
      name: 'Dr. Jong kwan Lee',
      specialty: t('doctors.filter.rehabilitation'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Jong.pdf',
      location: 'Zapopan',
      experience: 18,
      image: 'lovable-uploads/doctors/dr-5.jpg',
    },
    {
      name: 'Dr. Ramón Alejandro Monroy Salcedo ',
      specialty: t('doctors.filter.general'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Ramon.pdf',
      location: 'Chapala',
      experience: 18,
      image: 'lovable-uploads/doctors/dr-4.jpg',
    },
    {
      name: 'Dra. Sara Cruz Delgadillo',
      specialty: t('doctors.filter.surgery'),
      curriculumPdf: '/lovable-uploads/curriculum/curriculum-Sara.pdf',
      location: 'Zapopan',
      experience: 18,
      image: 'lovable-uploads/doctors/dr-3.jpg',
    }
  ];

  const filteredDoctors = selectedSpecialty === 'Todos' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  // Función para abrir el PDF
  const openCurriculumPdf = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            {t('doctors.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('doctors.subtitle')}
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty) => (
            <Button
              key={specialty.key}
              variant={selectedSpecialty === specialty.value ? 'default' : 'outline'}
              onClick={() => setSelectedSpecialty(specialty.value)}
              className={`${
                selectedSpecialty === specialty.value 
                  ? 'bg-dental-navy hover:bg-dental-navy/90' 
                  : 'border-dental-blue text-dental-blue hover:bg-dental-light/20'
              }`}
            >
              {specialty.label}
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
                    {doctor.experience} {t('doctors.experience')}
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

                {/* CTA Button - Ahora abre el PDF */}
                <Button 
                  className="w-full bg-gradient-dental hover:opacity-90 text-white"
                  onClick={() => {
                    if (doctor.curriculumPdf) {
                      openCurriculumPdf(doctor.curriculumPdf);
                    } else {
                      // Si no hay PDF, mantener el comportamiento original de WhatsApp
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en ${doctor.location}.`);
                      window.open(`https://wa.me/523310235792?text=${message}`, '_blank');
                    }
                  }}
                >
                  {t('doctors.schedule')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-dental text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('doctors.cta.title')}</h3>
              <p className="text-white/90 mb-6">
                {t('doctors.cta.description')}
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('doctors.cta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Doctores;