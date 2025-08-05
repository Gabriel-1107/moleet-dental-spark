import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';

const OdontologiaGeneral = () => {
  const specialtyData = {
    title: "Odontología General",
    titleEn: "General Dentistry",
    description: "Cuidado integral de tu salud dental con tratamientos preventivos y curativos de la más alta calidad.",
    descriptionEn: "Comprehensive dental health care with preventive and curative treatments of the highest quality.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop",
    features: [
      "Limpiezas Profesionales",
      "Empastes de Resina",
      "Extracciones Dentales", 
      "Revisiones Regulares",
      "Prevención de Caries",
      "Tratamiento de Gingivitis",
      "Radiografías Digitales",
      "Diagnóstico Integral"
    ],
    featuresEn: [
      "Professional Cleanings",
      "Resin Fillings",
      "Dental Extractions",
      "Regular Check-ups",
      "Cavity Prevention",
      "Gingivitis Treatment",
      "Digital X-rays",
      "Comprehensive Diagnosis"
    ],
    testimonials: [
      {
        name: "María González",
        text: "La atención es excelente, muy profesional y el consultorio está súper limpio. Mi familia y yo venimos aquí desde hace años.",
        textEn: "The care is excellent, very professional and the office is super clean. My family and I have been coming here for years.",
        rating: 5,
        treatment: "Limpieza dental",
        treatmentEn: "Dental cleaning"
      },
      {
        name: "Carlos López",
        text: "El Dr. Torres es muy cuidadoso y explica todo el procedimiento. Me sentí muy cómodo durante toda la consulta.",
        textEn: "Dr. Torres is very careful and explains the entire procedure. I felt very comfortable throughout the consultation.",
        rating: 5,
        treatment: "Empaste dental",
        treatmentEn: "Dental filling"
      },
      {
        name: "Ana Rodríguez",
        text: "Excelente servicio desde la recepción hasta el tratamiento. Definitivamente los recomiendo para cuidado dental general.",
        textEn: "Excellent service from reception to treatment. I definitely recommend them for general dental care.",
        rating: 5,
        treatment: "Revisión general",
        treatmentEn: "General check-up"
      }
    ],
    doctors: [
      {
        name: "Dr. Miguel Ángel Torres",
        image: 'lovable-uploads/chapala.png',
        experience: 20,
        description: "Odontólogo general con dos décadas de experiencia. Especializado en rehabilitación oral integral y prótesis.",
        descriptionEn: "General dentist with two decades of experience. Specialized in comprehensive oral rehabilitation and prosthetics.",
        location: "Guadalajara"
      },
      {
        name: "Dra. Patricia Hernández",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 15,
        description: "Especialista en odontología general preventiva con enfoque en cuidado familiar integral.",
        descriptionEn: "Specialist in preventive general dentistry with a focus on comprehensive family care.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default OdontologiaGeneral;