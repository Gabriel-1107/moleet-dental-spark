import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const rehabilitacionOral = () => {
    const { t } = useLanguage();  
  const specialtyData = {
     title: t('implantology.title'),
  titleEn: t('implantology.title'),
  description: t('implantology.subtitle'),
  descriptionEn: t('implantology.subtitle'),
  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop",
  features: [
    t('implantology.treatment1'),
    t('implantology.treatment2'),
    t('implantology.treatment3'),
    t('implantology.treatment4'),
    t('implantology.treatment5'),
    t('implantology.treatment6'),
    t('implantology.treatment7'),
    t('implantology.treatment8'),
  ],
    testimonials: [
      {
        name: "María Fernández",
        text: "Mi hija está encantada con la Dra. Morales. Ya no le da miedo ir al dentista y sus dientes están perfectos.",
        textEn: "My daughter is delighted with Dr. Morales. She's no longer afraid to go to the dentist and her teeth are perfect.",
        rating: 5,
        treatment: "Limpieza infantil",
        treatmentEn: "Children's cleaning"
      },
      {
        name: "Carlos González",
        text: "Excelente atención para niños. El ambiente es muy amigable y mi hijo siempre sale contento de la consulta.",
        textEn: "Excellent care for children. The environment is very friendly and my son always leaves the appointment happy.",
        rating: 5,
        treatment: "Selladores dentales",
        treatmentEn: "Dental sealants"
      },
      {
        name: "Ana Martín",
        text: "Profesionales especializados en niños. Mi bebé tuvo su primera cita y fue una experiencia muy positiva.",
        textEn: "Professionals specialized in children. My baby had her first appointment and it was a very positive experience.",
        rating: 5,
        treatment: "Primera consulta",
        treatmentEn: "First visit"
      }
    ],
    doctors: [
      {
        name: "Dra. Carmen Morales",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 18,
        description: "Odontopediatra con amplia experiencia en manejo conductual infantil. Especialista en sedación consciente pediátrica.",
        descriptionEn: "Pediatric dentist with extensive experience in child behavioral management. Specialist in pediatric conscious sedation.",
        location: "Guadalajara"
      },
      {
        name: "Dr. José Herrera",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        experience: 13,
        description: "Especialista en odontología preventiva infantil. Enfoque lúdico y educativo para crear experiencias positivas.",
        descriptionEn: "Specialist in preventive pediatric dentistry. Playful and educational approach to create positive experiences.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default rehabilitacionOral;