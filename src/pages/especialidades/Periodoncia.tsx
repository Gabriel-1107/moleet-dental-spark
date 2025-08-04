import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';

const Periodoncia = () => {
  const specialtyData = {
    title: "Periodoncia",
    titleEn: "Periodontics",
    description: "Tratamiento especializado de encías y tejidos de soporte dental para mantener una base sólida para tus dientes.",
    descriptionEn: "Specialized treatment of gums and dental supporting tissues to maintain a solid foundation for your teeth.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&h=1080&fit=crop",
    features: [
      "Limpieza Profunda",
      "Raspado y Alisado",
      "Cirugía Periodontal",
      "Injertos de Encía",
      "Regeneración Tisular",
      "Mantenimiento Periodontal",
      "Tratamiento de Gingivitis",
      "Control de Placa"
    ],
    featuresEn: [
      "Deep Cleaning",
      "Scaling and Root Planing",
      "Periodontal Surgery",
      "Gum Grafts",
      "Tissue Regeneration",
      "Periodontal Maintenance",
      "Gingivitis Treatment",
      "Plaque Control"
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