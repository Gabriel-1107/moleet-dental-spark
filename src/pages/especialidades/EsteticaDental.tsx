import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const EsteticaDental = () => {
  const { t } = useLanguage();
  const specialtyData = {
    title: t('estetica_dental.name'),
  titleEn: t('estetica_dental.name',),
  description: t('estetica_dental.description'),
  descriptionEn: t('estetica_dental.description',),
  image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&h=1080&fit=crop",
  features: [
    t('estetica_dental.feature1'),
    t('estetica_dental.feature2'),
    t('estetica_dental.feature3'),
    t('estetica_dental.feature4'),
    t('estetica_dental.feature5'),
    t('estetica_dental.feature6'),
    t('estetica_dental.feature7'),
    t('estetica_dental.feature8'),
  ],
    testimonials: [
      {
        name: "Valentina Castillo",
        text: "Mi nueva sonrisa es espectacular. Las carillas quedaron perfectas y naturales. Estoy encantada.",
        textEn: "My new smile is spectacular. The veneers turned out perfect and natural. I'm delighted.",
        rating: 5,
        treatment: "Carillas de porcelana",
        treatmentEn: "Porcelain veneers"
      },
      {
        name: "Ricardo Peña",
        text: "El blanqueamiento superó mis expectativas. Sonrisa más blanca y natural que nunca había tenido.",
        textEn: "The whitening exceeded my expectations. Whiter and more natural smile than I had ever had.",
        rating: 5,
        treatment: "Blanqueamiento dental",
        treatmentEn: "Teeth whitening"
      },
      {
        name: "Camila Ortiz",
        text: "El diseño de sonrisa cambió completamente mi vida. Ahora sonrío con total confianza.",
        textEn: "The smile design completely changed my life. Now I smile with total confidence.",
        rating: 5,
        treatment: "Diseño de sonrisa",
        treatmentEn: "Smile design"
      }
    ],
    doctors: [
      {
        name: "Dra. Gabriela Silva",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 14,
        description: "Especialista en estética dental y diseño de sonrisa. Certificada en técnicas de vanguardia en odontología cosmética.",
        descriptionEn: "Specialist in dental aesthetics and smile design. Certified in cutting-edge cosmetic dentistry techniques.",
        location: "Guadalajara"
      },
      {
        name: "Dr. Sebastián Luna",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        experience: 17,
        description: "Experto en rehabilitación estética integral. Especializado en carillas y armonización facial.",
        descriptionEn: "Expert in comprehensive aesthetic rehabilitation. Specialized in veneers and facial harmonization.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default EsteticaDental;