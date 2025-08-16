import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const Periodoncia = () => {
  const { t } = useLanguage();
  const specialtyData = {
    title: t('periodoncia.name'),
  titleEn: t('periodoncia.name',),
  description: t('periodoncia.description'),
  descriptionEn: t('periodoncia.description',),
  image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&h=1080&fit=crop",
  features: [
    t('periodoncia.feature1'),
    t('periodoncia.feature2'),
    t('periodoncia.feature3'),
    t('periodoncia.feature4'),
    t('periodoncia.feature5'),
    t('periodoncia.feature6'),
    t('periodoncia.feature7'),
    t('periodoncia.feature8'),
  ],
    testimonials: [
      {
        name: "Lucía Morales",
        text: "Mi problema de encías se solucionó completamente. El Dr. Vega es muy profesional y explica todo muy bien.",
        textEn: "My gum problem was completely solved. Dr. Vega is very professional and explains everything very well.",
        rating: 5,
        treatment: "Tratamiento periodontal",
        treatmentEn: "Periodontal treatment"
      },
      {
        name: "Miguel Santos",
        text: "Excelente atención en el tratamiento de mis encías. Ya no tengo sangrado y me siento mucho mejor.",
        textEn: "Excellent care in treating my gums. I no longer have bleeding and feel much better.",
        rating: 5,
        treatment: "Limpieza profunda",
        treatmentEn: "Deep cleaning"
      },
      {
        name: "Isabella García",
        text: "El injerto de encía fue todo un éxito. Recuperé la sonrisa que había perdido por la retracción.",
        textEn: "The gum graft was a complete success. I recovered the smile I had lost due to recession.",
        rating: 5,
        treatment: "Injerto de encía",
        treatmentEn: "Gum graft"
      }
    ],
    doctors: [
      {
        name: "Dr. Ricardo Vega",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        experience: 22,
        description: "Periodoncista con amplia experiencia en cirugía regenerativa. Especialista en casos complejos de enfermedad periodontal.",
        descriptionEn: "Periodontist with extensive experience in regenerative surgery. Specialist in complex periodontal disease cases.",
        location: "Guadalajara"
      },
      {
        name: "Dra. Ana Jiménez",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 16,
        description: "Especialista en periodoncia preventiva y estética. Enfoque integral en la salud gingival y periodontal.",
        descriptionEn: "Specialist in preventive and aesthetic periodontics. Comprehensive approach to gingival and periodontal health.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default Periodoncia;