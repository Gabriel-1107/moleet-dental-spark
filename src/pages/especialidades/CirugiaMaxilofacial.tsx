import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';

const CirugiaMaxilofacial = () => {
  const specialtyData = {
    title: "Cirugía Maxilofacial",
    titleEn: "Oral Surgery",
    description: "Cirugía oral y maxilofacial avanzada para tratar condiciones complejas de boca, cara y mandíbulas.",
    descriptionEn: "Advanced oral and maxillofacial surgery to treat complex conditions of the mouth, face, and jaws.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop",
    features: [
      "Extracciones Complejas",
      "Cirugía de Muelas del Juicio",
      "Implantes Dentales",
      "Cirugía Pre-protésica",
      "Quistes y Tumores",
      "Trauma Facial",
      "Cirugía Ortognática",
      "Sedación Consciente"
    ],
    featuresEn: [
      "Complex Extractions",
      "Wisdom Tooth Surgery",
      "Dental Implants",
      "Pre-prosthetic Surgery",
      "Cysts and Tumors",
      "Facial Trauma",
      "Orthognathic Surgery",
      "Conscious Sedation"
    ],
    testimonials: [
      {
        name: "David Herrera",
        text: "La extracción de mis muelas del juicio fue mucho más fácil de lo que pensé. Dr. Morales fue excelente.",
        textEn: "The extraction of my wisdom teeth was much easier than I thought. Dr. Morales was excellent.",
        rating: 5,
        treatment: "Extracción de cordales",
        treatmentEn: "Wisdom tooth extraction"
      },
      {
        name: "Sofía Ramírez",
        text: "El implante dental quedó perfecto. Profesionalismo y cuidado excepcional durante todo el proceso.",
        textEn: "The dental implant turned out perfect. Exceptional professionalism and care throughout the process.",
        rating: 5,
        treatment: "Implante dental",
        treatmentEn: "Dental implant"
      },
      {
        name: "Alejandro Torres",
        text: "Cirugía maxilofacial exitosa. El equipo es muy profesional y las instalaciones de primera calidad.",
        textEn: "Successful maxillofacial surgery. The team is very professional and the facilities are first-class.",
        rating: 5,
        treatment: "Cirugía maxilofacial",
        treatmentEn: "Maxillofacial surgery"
      }
    ],
    doctors: [
      {
        name: "Dr. Fernando Morales",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
        experience: 25,
        description: "Cirujano maxilofacial con formación internacional. Especialista en implantología y cirugía reconstructiva.",
        descriptionEn: "Maxillofacial surgeon with international training. Specialist in implantology and reconstructive surgery.",
        location: "Guadalajara"
      },
      {
        name: "Dra. Mónica Cruz",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 19,
        description: "Especialista en cirugía oral y trauma facial. Experta en sedación consciente y cirugía ambulatoria.",
        descriptionEn: "Specialist in oral surgery and facial trauma. Expert in conscious sedation and outpatient surgery.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default CirugiaMaxilofacial;