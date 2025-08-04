import SpecialtyTemplate from '@/components/specialty/SpecialtyTemplate';

const Ortodoncia = () => {
  const specialtyData = {
    title: "Ortodoncia",
    titleEn: "Orthodontics",
    description: "Corrección de la alineación dental con tratamientos modernos y personalizados para todas las edades.",
    descriptionEn: "Dental alignment correction with modern and personalized treatments for all ages.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop",
    features: [
      "Brackets Metálicos",
      "Brackets Estéticos",
      "Ortodoncia Invisible",
      "Invisalign",
      "Aparatos Removibles",
      "Retención Post-tratamiento",
      "Ortodoncia Infantil",
      "Planificación Digital"
    ],
    featuresEn: [
      "Metal Braces",
      "Aesthetic Braces",
      "Invisible Orthodontics",
      "Invisalign",
      "Removable Appliances",
      "Post-treatment Retention",
      "Children's Orthodontics",
      "Digital Planning"
    ],
    testimonials: [
      {
        name: "Andrea López",
        text: "Mi tratamiento con Invisalign fue perfecto. Nadie notaba que llevaba aparatos y los resultados son increíbles.",
        textEn: "My Invisalign treatment was perfect. No one noticed I was wearing braces and the results are incredible.",
        rating: 5,
        treatment: "Invisalign",
        treatmentEn: "Invisalign"
      },
      {
        name: "Mateo Vargas",
        text: "Los brackets estéticos fueron una excelente opción. Tratamiento cómodo y resultados espectaculares.",
        textEn: "The aesthetic braces were an excellent option. Comfortable treatment and spectacular results.",
        rating: 5,
        treatment: "Brackets estéticos",
        treatmentEn: "Aesthetic braces"
      },
      {
        name: "Natalia Ruiz",
        text: "Dra. Romero es excepcional. Mi hijo está encantado con su nuevo aparato y los dientes se ven geniales.",
        textEn: "Dr. Romero is exceptional. My son is delighted with his new appliance and his teeth look great.",
        rating: 5,
        treatment: "Ortodoncia infantil",
        treatmentEn: "Children's orthodontics"
      }
    ],
    doctors: [
      {
        name: "Dra. Patricia Romero",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        experience: 20,
        description: "Ortodoncista certificada con especialización en Invisalign y ortodoncia digital. Experta en casos complejos.",
        descriptionEn: "Certified orthodontist specialized in Invisalign and digital orthodontics. Expert in complex cases.",
        location: "Guadalajara"
      },
      {
        name: "Dr. Eduardo Campos",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        experience: 15,
        description: "Especialista en ortodoncia para todas las edades. Enfoque personalizado en cada tratamiento ortodóntico.",
        descriptionEn: "Specialist in orthodontics for all ages. Personalized approach to each orthodontic treatment.",
        location: "Chapala"
      }
    ]
  };

  return <SpecialtyTemplate {...specialtyData} />;
};

export default Ortodoncia;