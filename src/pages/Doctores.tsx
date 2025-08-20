import { useState } from 'react';
import { MapPin, X, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Doctores = () => {
  const { t } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todos');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

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

  const openCurriculumModal = (pdfUrl: string, doctorName: string) => {
    setSelectedPdf(pdfUrl);
    setSelectedDoctor(doctorName);
  };

  const closeModal = () => {
    setSelectedPdf(null);
    setSelectedDoctor(null);
  };

  const downloadPdf = (pdfUrl: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'curriculum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dental-navy mb-3 sm:mb-4">
            {t('doctors.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('doctors.subtitle')}
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {specialties.map((specialty) => (
            <Button
              key={specialty.key}
              size="sm"
              variant={selectedSpecialty === specialty.value ? 'default' : 'outline'}
              onClick={() => setSelectedSpecialty(specialty.value)}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 ${
                selectedSpecialty === specialty.value 
                  ? 'bg-dental-navy hover:bg-dental-navy/90 text-white' 
                  : 'border-dental-blue text-dental-blue hover:bg-dental-light/20'
              }`}
            >
              {specialty.label}
            </Button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-dental transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Doctor Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <Badge className="bg-dental-navy text-white text-xs sm:text-sm">
                    {doctor.experience} {t('doctors.experience')}
                  </Badge>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <h3 className="font-bold text-dental-navy text-base sm:text-lg">{doctor.name}</h3>
                    <p className="text-dental-blue font-medium text-sm sm:text-base">{doctor.specialty}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                {/* Location */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <MapPin className="h-4 w-4 text-dental-blue flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{doctor.location}</span>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-dental hover:opacity-90 text-white text-sm sm:text-base"
                  onClick={() => {
                    if (doctor.curriculumPdf) {
                      openCurriculumModal(doctor.curriculumPdf, doctor.name);
                    } else {
                      const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctor.name} en ${doctor.location}.`);
                      window.open(`https://wa.me/523310235792?text=${message}`, '_blank');
                    }
                  }}
                >
                  {doctor.curriculumPdf ? "Ver Currículum" : t('doctors.schedule')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="bg-gradient-dental text-white max-w-lg sm:max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('doctors.cta.title')}</h3>
              <p className="text-white/90 text-sm sm:text-base mb-5 sm:mb-6">
                {t('doctors.cta.description')}
              </p>
              <Button
                size="sm"
                className="sm:size-md"
                variant="secondary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('doctors.cta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4" onClick={closeModal}>
            <div className="bg-white rounded-lg w-full max-w-2xl sm:max-w-4xl h-[80vh] sm:h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-3 sm:p-4 border-b">
                <h3 className="font-semibold text-sm sm:text-lg">Curriculum - {selectedDoctor}</h3>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadPdf(selectedPdf)}
                    className="flex items-center gap-1 text-xs sm:text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Descargar
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={closeModal}
                    className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:text-dental-navy dark:text-white dark:hover:text-dental-blue"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <iframe 
                  src={selectedPdf} 
                  className="w-full h-full" 
                  title="Curriculum PDF"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Doctores;
