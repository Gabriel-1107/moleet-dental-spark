import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const Endodoncia = () => {
  const { t } = useLanguage();
  const specialtyData = {
   title: t('endodoncia.name'),          // 'endodoncia.name': 'Endodoncia'
  titleEn: t('endodoncia.name'),      // 'endodoncia.nameEn': 'Endodontics'
  description: t('endodoncia.description'),      // 'endodoncia.description': 'Tratamientos de conducto especializados...'
  descriptionEn: t('endodoncia.description'),  // 'endodoncia.descriptionEn': 'Specialized root canal treatments...'
  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop",
  features: [
    t('endodoncia.feature1'),  // 'endodoncia.feature1': 'Tratamientos de Conducto'
    t('endodoncia.feature2'),  // 'endodoncia.feature2': 'Microscopía Dental'
    t('endodoncia.feature3'),  // 'endodoncia.feature3': 'Retratamientos'
    t('endodoncia.feature4'),  // 'endodoncia.feature4': 'Pulpotomías'
    t('endodoncia.feature5'),  // 'endodoncia.feature5': 'Apicectomías'
    t('endodoncia.feature6'),  // 'endodoncia.feature6': 'Blanqueamiento Interno'
    t('endodoncia.feature7'),  // 'endodoncia.feature7': 'Urgencias Dentales'
    t('endodoncia.feature8')   // 'endodoncia.feature8': 'Diagnóstico Digital'
  ],
  featuresEn: [
    t('endodoncia.feature1'),  // 'endodoncia.feature1': 'Root Canal Treatments'
    t('endodoncia.feature2'),  // 'endodoncia.feature2': 'Dental Microscopy'
    t('endodoncia.feature3'),  // 'endodoncia.feature3': 'Retreatments'
    t('endodoncia.feature4'),  // 'endodoncia.feature4': 'Pulpotomies'
    t('endodoncia.feature5'),  // 'endodoncia.feature5': 'Apicoectomies'
    t('endodoncia.feature6'),  // 'endodoncia.feature6': 'Internal Bleaching'
    t('endodoncia.feature7'),  // 'endodoncia.feature7': 'Dental Emergencies'
    t('endodoncia.feature8')   // 'endodoncia.feature8': 'Digital Diagnosis'
  ],
    testimonials: [
      {
        name: "Roberto Martínez",
        text: "Pensé que iba a perder mi muela, pero el tratamiento de conducto fue increíble. Sin dolor y salvé mi diente.",
        textEn: "I thought I was going to lose my tooth, but the root canal treatment was incredible. No pain and I saved my tooth.",
        rating: 5,
        treatment: "Tratamiento de conducto",
        treatmentEn: "Root canal treatment"
      },
      {
        name: "Carmen Flores",
        text: "La Dra. Sánchez fue muy cuidadosa durante todo el procedimiento. Excelente atención y resultados.",
        textEn: "Dr. Sánchez was very careful throughout the procedure. Excellent care and results.",
        rating: 5,
        treatment: "Endodoncia",
        treatmentEn: "Endodontics"
      },
      {
        name: "Fernando Ruiz",
        text: "Profesionales de primera. El tratamiento fue rápido y sin complicaciones. Muy recomendable.",
        textEn: "First-class professionals. The treatment was quick and without complications. Highly recommended.",
        rating: 5,
        treatment: "Retratamiento",
        treatmentEn: "Retreatment"
      }
    ],
    doctors: [
      {
        name: "Dra. Elena Sánchez",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        experience: 18,
        description: "Especialista en endodoncia con certificación internacional. Experta en tratamientos complejos y microscopía dental.",
        descriptionEn: "Endodontics specialist with international certification. Expert in complex treatments and dental microscopy.",
        location: "Guadalajara"
      },
      {
        name: "Dr. Carlos Mendoza",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
        experience: 12,
        description: "Endodoncista dedicado a la preservación dental. Especializado en casos de urgencias y retratamientos.",
        descriptionEn: "Endodontist dedicated to dental preservation. Specialized in emergency cases and retreatments.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default Endodoncia;