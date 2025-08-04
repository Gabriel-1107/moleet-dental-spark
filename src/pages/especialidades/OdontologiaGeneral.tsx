import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';

const OdontologiaGeneral = () => {
  const specialtyData = {
    title: "Odontología General",
    description: "Cuidado integral de tu salud dental con tratamientos preventivos y curativos de la más alta calidad.",
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
    testimonials: [
      {
        name: "María González",
        text: "La atención es excelente, muy profesional y el consultorio está súper limpio. Mi familia y yo venimos aquí desde hace años.",
        rating: 5,
        treatment: "Limpieza dental"
      },
      {
        name: "Carlos López",
        text: "El Dr. Torres es muy cuidadoso y explica todo el procedimiento. Me sentí muy cómodo durante toda la consulta.",
        rating: 5,
        treatment: "Empaste dental"
      },
      {
        name: "Ana Rodríguez",
        text: "Excelente servicio desde la recepción hasta el tratamiento. Definitivamente los recomiendo para cuidado dental general.",
        rating: 5,
        treatment: "Revisión general"
      }
    ],
    doctors: [
      {
        name: "Dr. Miguel Ángel Torres",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
        experience: 20,
        description: "Odontólogo general con dos décadas de experiencia. Especializado en rehabilitación oral integral y prótesis.",
        location: "Chapala"
      },
      {
        name: "Dra. Patricia Hernández",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 15,
        description: "Especialista en odontología general preventiva con enfoque en cuidado familiar integral.",
        location: "Guadalajara"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default OdontologiaGeneral;