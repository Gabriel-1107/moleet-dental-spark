import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.specialties': 'Specialties',
    'nav.locations': 'Locations',
    'nav.prices': 'Prices',
    'nav.doctors': 'Doctors',
    'nav.transport': 'Airport Transport',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Perfect Smile',
    'hero.subtitle': 'Awaits You',
    'hero.description': 'Professional dental services with advanced technology in Guadalajara and Chapala. Specialists committed to your oral health.',
    'hero.cta': 'Schedule Your Appointment',
    'hero.viewServices': 'View Services',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.patients': 'Satisfied Patients',
    'hero.stats.locations': 'Locations',
    
    // Contact Form
    'contact.title': 'Schedule Your Appointment',
    'contact.subtitle': 'We are here to help you achieve the smile you have always dreamed of',
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.phone': 'Phone number',
    'contact.message': 'Message',
    'contact.location': 'Select your preferred location',
    'contact.branch': 'Branch',
    'contact.guadalajara': 'Guadalajara',
    'contact.chapala': 'Chapala',
    'contact.newPatient': 'Are you a new patient?',
    'contact.yes': 'Yes',
    'contact.no': 'No',
    'contact.submit': 'Send Inquiry',
    'contact.sending': 'Sending...',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'An error occurred sending your message.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete dental treatments with the highest quality standards',
    'services.badge': 'Professional Excellence',
    'services.popular': 'Popular',
    'services.learnMore': 'Learn More',
    
    // Service Categories
    'services.general.title': 'General Dentistry',
    'services.general.description': 'Comprehensive dental care with preventive and curative treatments.',
    'services.general.feature1': 'Professional cleanings',
    'services.general.feature2': 'Composite fillings',
    'services.general.feature3': 'Tooth extractions',
    'services.general.feature4': 'Regular checkups',
    
    'services.aesthetic.title': 'Cosmetic Dentistry',
    'services.aesthetic.description': 'Transform your smile with cutting-edge aesthetic treatments.',
    'services.aesthetic.feature1': 'Teeth whitening',
    'services.aesthetic.feature2': 'Porcelain veneers',
    'services.aesthetic.feature3': 'Dental crowns',
    'services.aesthetic.feature4': 'Smile design',
    
    'services.endodontics.title': 'Endodontics',
    'services.endodontics.description': 'Root canal specialists to save your natural teeth.',
    'services.endodontics.feature1': 'Root canal therapy',
    'services.endodontics.feature2': 'Retreatments',
    'services.endodontics.feature3': 'Apicoectomies',
    'services.endodontics.feature4': 'Pulpotomies',
    
    'services.periodontics.title': 'Periodontics',
    'services.periodontics.description': 'Specialized gum and dental support care.',
    'services.periodontics.feature1': 'Gingivitis treatment',
    'services.periodontics.feature2': 'Periodontal surgery',
    'services.periodontics.feature3': 'Dental implants',
    'services.periodontics.feature4': 'Maintenance programs',
    
    'services.surgery.title': 'Oral Surgery',
    'services.surgery.description': 'Specialized surgical procedures for mouth and jaw.',
    'services.surgery.feature1': 'Complex extractions',
    'services.surgery.feature2': 'Dental implants',
    'services.surgery.feature3': 'Orthognathic surgery',
    'services.surgery.feature4': 'Trauma surgery',
    
    'services.pediatric.title': 'Pediatric Dentistry',
    'services.pediatric.description': 'Specialized dental care for the little ones in the family.',
    'services.pediatric.feature1': 'Children\'s checkups',
    'services.pediatric.feature2': 'Dental sealants',
    'services.pediatric.feature3': 'Preventive treatments',
    'services.pediatric.feature4': 'Early orthodontics',
    
    // Advanced Services
    'services.advanced.title': 'Advanced Technology & Care',
    'services.advanced.subtitle': 'State-of-the-art equipment and personalized attention',
    'services.technology.title': 'Latest Technology',
    'services.technology.description': 'Digital equipment and advanced techniques',
    'services.safety.title': 'Safety Standards',
    'services.safety.description': 'Strict protocols and sterilization',
    'services.care.title': 'Personalized Care',
    'services.care.description': 'Individual treatment plans',
    
    // Services CTA
    'services.cta.title': 'Ready to Transform Your Smile?',
    'services.cta.description': 'Schedule a consultation and discover how we can help you achieve the perfect smile you\'ve always wanted.',
    'services.cta.contact': 'Schedule Consultation',
    'services.cta.prices': 'View Prices',
    
    // Testimonials
    'testimonials.title': 'What Our Patients Say',
    'testimonials.subtitle': 'Real stories of transformed smiles',
    
    // Gallery
    'gallery.title': 'Our Facilities',
    'gallery.subtitle': 'Discover our modern offices equipped with the latest dental technology',
    
    // Transport
    'transport.title': 'Airport Transportation Service',
    'transport.subtitle': 'Comfortable and reliable transport from/to the airport',
    'transport.description': 'We offer professional transportation service to make your visit as comfortable as possible. We pick you up at the airport and take you to your accommodation or directly to our clinic.',
    'transport.features.title': 'What We Offer',
    'transport.features.comfortable': 'Comfortable vehicles',
    'transport.features.punctual': 'Punctual service',
    'transport.features.professional': 'Professional drivers',
    'transport.features.safe': 'Safe and reliable',
    'transport.booking.title': 'Book Your Transport',
    'transport.booking.description': 'Contact us to coordinate your pickup',
    
    // Prices
    'prices.title': 'Price List',
    'prices.subtitle': 'Transparent and competitive prices for all our dental treatments',
    'prices.currency.mxn': 'Mexican Pesos (MXN)',
    'prices.currency.usd': 'US Dollars (USD)',
    'prices.treatment': 'Treatment',
    'prices.price': 'Price',
    'prices.status': 'Status',
    'prices.popular': 'Popular',
    'prices.notes.title': 'Important Information',
    'prices.notes.included.title': 'Included in all treatments:',
    'prices.notes.included.1': 'Consultation and diagnosis',
    'prices.notes.included.2': 'Necessary X-rays',
    'prices.notes.included.3': 'Local anesthesia',
    'prices.notes.included.4': 'Post-treatment follow-up',
    'prices.notes.included.5': 'Treatment guarantee',
    'prices.notes.financing.title': 'Financing plans:',
    'prices.notes.financing.1': '3, 6 and 12 months interest-free payments',
    'prices.notes.financing.2': 'Cash payment discounts',
    'prices.notes.financing.3': 'Family packages available',
    'prices.notes.financing.4': 'Dental insurance accepted',
    'prices.notes.financing.5': 'Free quote without commitment',
    'prices.cta.title': 'Need a personalized quote?',
    'prices.cta.description': 'Each case is unique. Schedule a free consultation to get a personalized treatment plan.',
    'prices.cta.button': 'Schedule Free Consultation',
    
    // Price Categories
    'prices.general': 'General Dentistry',
    'prices.aesthetic': 'Cosmetic Dentistry', 
    'prices.endodontics': 'Endodontics',
    'prices.prosthetics': 'Prosthetics and Dentures',
    'prices.implantology': 'Implantology',
    'prices.surgery': 'Oral Surgery',
    
    // Treatments
    'treatment.consultation': 'General Consultation',
    'treatment.cleaning': 'Dental Cleaning',
    'treatment.filling': 'Composite Filling',
    'treatment.extraction.simple': 'Simple Extraction',
    'treatment.extraction.complex': 'Complex Extraction',
    'treatment.whitening': 'Teeth Whitening',
    'treatment.veneer': 'Porcelain Veneer',
    'treatment.crown': 'Porcelain Crown',
    'treatment.smile.design': 'Smile Design',
    'treatment.inlay': 'Aesthetic Inlay',
    'treatment.root.canal.1': 'Root Canal Treatment 1 Root',
    'treatment.root.canal.2': 'Root Canal Treatment 2 Roots',
    'treatment.root.canal.3': 'Root Canal Treatment 3 Roots',
    'treatment.retreatment': 'Root Canal Retreatment',
    'treatment.apicoectomy': 'Apicoectomy',
    'treatment.partial.denture': 'Partial Metal Denture',
    'treatment.full.denture': 'Full Porcelain Denture',
    'treatment.flexible.denture': 'Flexible Denture',
    'treatment.implant.prosthesis': 'Implant-Supported Prosthesis',
    'treatment.denture.repair': 'Denture Repair',
    'treatment.single.implant': 'Single Dental Implant',
    'treatment.implant.crown': 'Crown on Implant',
    'treatment.all.on.4': 'All-on-4 (Full Arch)',
    'treatment.all.on.6': 'All-on-6 (Full Arch)',
    'treatment.bone.graft': 'Bone Graft',
    'treatment.wisdom.tooth': 'Wisdom Tooth Extraction',
    'treatment.cyst.surgery': 'Cyst Surgery',
    'treatment.frenectomy': 'Frenectomy',
    'treatment.oral.biopsy': 'Oral Biopsy',
    'treatment.periodontal.surgery': 'Periodontal Surgery',
    
    // Branches
    'branches.title': 'Our Branches',
    'branches.subtitle': 'Visit our modern facilities',
    'branches.guadalajara.name': 'Guadalajara Branch',
    'branches.chapala.name': 'Chapala Branch',
    'branches.ourDoctors': 'Meet our doctors',
    'branches.contactInfo': 'Contact information',
    'branches.schedule': 'Office hours',
    'branches.phone': 'Phone',
    'branches.email': 'Email',
    'branches.website': 'Website',
    'branches.whatsapp': 'WhatsApp',
    'branches.call': 'Call',

    // Blog
    'blog.title': 'Dental Blog',
    'blog.subtitle': 'Updated information about dental health and treatments',
    'blog.post1.title': 'The Importance of Daily Dental Hygiene',
    'blog.post1.excerpt': 'Discover how to maintain an effective dental hygiene routine to prevent diseases and keep your smile healthy.',
    'blog.post1.date': 'January 15, 2024',
    'blog.post1.author': 'Dr. María González',
    'blog.post2.title': 'Teeth Whitening: Everything You Need to Know',
    'blog.post2.excerpt': 'Learn about the different types of teeth whitening available at our clinics in Chapala and Guadalajara.',
    'blog.post2.date': 'January 8, 2024',
    'blog.post2.author': 'Dr. Ana Martínez',
    'blog.post3.title': 'Invisible Orthodontics: The Revolution at Moleet Dental',
    'blog.post3.excerpt': 'Learn about the advantages of invisible orthodontics and how it can transform your smile without compromising your lifestyle.',
    'blog.post3.date': 'January 2, 2024',
    'blog.post3.author': 'Dr. Carlos López',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View all articles',

    // Footer
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.services': 'Services',
    'footer.followUs': 'Follow Us',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.specialties': 'Especialidades',
    'nav.locations': 'Ubicaciones',
    'nav.prices': 'Precios',
    'nav.doctors': 'Doctores',
    'nav.transport': 'Transporte Aeropuerto',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Tu Sonrisa Perfecta',
    'hero.subtitle': 'Te Espera',
    'hero.description': 'Servicios dentales profesionales con tecnología avanzada en Guadalajara y Chapala. Especialistas comprometidos con tu salud oral.',
    'hero.cta': 'Agenda tu Consulta',
    'hero.viewServices': 'Ver Servicios',
    'hero.stats.experience': 'Años de Experiencia',
    'hero.stats.patients': 'Pacientes Satisfechos',
    'hero.stats.locations': 'Ubicaciones',
    
    // Contact Form
    'contact.title': 'Agenda tu Consulta',
    'contact.subtitle': 'Estamos aquí para ayudarte a lograr la sonrisa que siempre has soñado',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Número de teléfono',
    'contact.message': 'Mensaje',
    'contact.location': 'Selecciona tu ubicación preferida',
    'contact.branch': 'Sucursal',
    'contact.guadalajara': 'Guadalajara',
    'contact.chapala': 'Chapala',
    'contact.newPatient': '¿Eres nuevo paciente?',
    'contact.yes': 'Sí',
    'contact.no': 'No',
    'contact.submit': 'Enviar Consulta',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Tu mensaje ha sido enviado exitosamente!',
    'contact.error': 'Ocurrió un error al enviar tu mensaje.',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Tratamientos dentales completos con los más altos estándares de calidad',
    'services.badge': 'Excelencia Profesional',
    'services.popular': 'Popular',
    'services.learnMore': 'Conoce Más',
    
    // Service Categories
    'services.general.title': 'Odontología General',
    'services.general.description': 'Cuidado integral de tu salud dental con tratamientos preventivos y curativos.',
    'services.general.feature1': 'Limpiezas profesionales',
    'services.general.feature2': 'Empastes de resina',
    'services.general.feature3': 'Extracciones dentales',
    'services.general.feature4': 'Revisiones regulares',
    
    'services.aesthetic.title': 'Estética Dental',
    'services.aesthetic.description': 'Transforma tu sonrisa con tratamientos estéticos de última generación.',
    'services.aesthetic.feature1': 'Blanqueamiento dental',
    'services.aesthetic.feature2': 'Carillas de porcelana',
    'services.aesthetic.feature3': 'Coronas dentales',
    'services.aesthetic.feature4': 'Diseño de sonrisa',
    
    'services.endodontics.title': 'Endodoncia',
    'services.endodontics.description': 'Especialistas en tratamientos de conducto para salvar tus dientes naturales.',
    'services.endodontics.feature1': 'Tratamientos de conducto',
    'services.endodontics.feature2': 'Retratamientos',
    'services.endodontics.feature3': 'Apicectomías',
    'services.endodontics.feature4': 'Pulpotomías',
    
    'services.periodontics.title': 'Periodoncia',
    'services.periodontics.description': 'Cuidado especializado de encías y soporte dental.',
    'services.periodontics.feature1': 'Tratamiento de gingivitis',
    'services.periodontics.feature2': 'Cirugía periodontal',
    'services.periodontics.feature3': 'Implantes dentales',
    'services.periodontics.feature4': 'Programas de mantenimiento',
    
    'services.surgery.title': 'Cirugía Maxilofacial',
    'services.surgery.description': 'Procedimientos quirúrgicos especializados en boca y mandíbula.',
    'services.surgery.feature1': 'Extracciones complejas',
    'services.surgery.feature2': 'Implantes dentales',
    'services.surgery.feature3': 'Cirugía ortognática',
    'services.surgery.feature4': 'Cirugía de trauma',
    
    'services.pediatric.title': 'Odontopediatría',
    'services.pediatric.description': 'Cuidado dental especializado para los más pequeños de la familia.',
    'services.pediatric.feature1': 'Revisiones infantiles',
    'services.pediatric.feature2': 'Selladores dentales',
    'services.pediatric.feature3': 'Tratamientos preventivos',
    'services.pediatric.feature4': 'Ortodoncia temprana',
    
    // Advanced Services
    'services.advanced.title': 'Tecnología Avanzada y Cuidado',
    'services.advanced.subtitle': 'Equipos de última generación y atención personalizada',
    'services.technology.title': 'Última Tecnología',
    'services.technology.description': 'Equipos digitales y técnicas avanzadas',
    'services.safety.title': 'Estándares de Seguridad',
    'services.safety.description': 'Protocolos estrictos y esterilización',
    'services.care.title': 'Atención Personalizada',
    'services.care.description': 'Planes de tratamiento individuales',
    
    // Services CTA
    'services.cta.title': '¿Listo para Transformar tu Sonrisa?',
    'services.cta.description': 'Agenda una consulta y descubre cómo podemos ayudarte a lograr la sonrisa perfecta que siempre has deseado.',
    'services.cta.contact': 'Agendar Consulta',
    'services.cta.prices': 'Ver Precios',
    
    // Testimonials
    'testimonials.title': 'Lo que Dicen Nuestros Pacientes',
    'testimonials.subtitle': 'Historias reales de sonrisas transformadas',
    
    // Gallery
    'gallery.title': 'Nuestras Instalaciones',
    'gallery.subtitle': 'Conoce nuestros modernos consultorios equipados con la última tecnología dental',
    
    // Transport
    'transport.title': 'Servicio de Transporte al Aeropuerto',
    'transport.subtitle': 'Transporte cómodo y confiable desde/hacia el aeropuerto',
    'transport.description': 'Ofrecemos servicio de transporte profesional para hacer tu visita lo más cómoda posible. Te recogemos en el aeropuerto y te llevamos a tu hospedaje o directamente a nuestra clínica.',
    'transport.features.title': 'Lo que Ofrecemos',
    'transport.features.comfortable': 'Vehículos cómodos',
    'transport.features.punctual': 'Servicio puntual',
    'transport.features.professional': 'Conductores profesionales',
    'transport.features.safe': 'Seguro y confiable',
    'transport.booking.title': 'Reserva tu Transporte',
    'transport.booking.description': 'Contáctanos para coordinar tu recogida',
    
    // Prices
    'prices.title': 'Lista de Precios',
    'prices.subtitle': 'Precios transparentes y competitivos para todos nuestros tratamientos dentales',
    'prices.currency.mxn': 'Pesos Mexicanos (MXN)',
    'prices.currency.usd': 'Dólares Americanos (USD)',
    'prices.treatment': 'Tratamiento',
    'prices.price': 'Precio',
    'prices.status': 'Estatus',
    'prices.popular': 'Popular',
    'prices.notes.title': 'Información Importante',
    'prices.notes.included.title': 'Incluido en todos los tratamientos:',
    'prices.notes.included.1': 'Consulta y diagnóstico',
    'prices.notes.included.2': 'Radiografías necesarias',
    'prices.notes.included.3': 'Anestesia local',
    'prices.notes.included.4': 'Seguimiento post-tratamiento',
    'prices.notes.included.5': 'Garantía según el tratamiento',
    'prices.notes.financing.title': 'Planes de financiamiento:',
    'prices.notes.financing.1': 'Pagos a 3, 6 y 12 meses sin intereses',
    'prices.notes.financing.2': 'Descuentos por pago de contado',
    'prices.notes.financing.3': 'Paquetes familiares disponibles',
    'prices.notes.financing.4': 'Seguros dentales aceptados',
    'prices.notes.financing.5': 'Cotización gratuita sin compromiso',
    'prices.cta.title': '¿Necesitas una cotización personalizada?',
    'prices.cta.description': 'Cada caso es único. Agenda una consulta gratuita para obtener un plan de tratamiento personalizado.',
    'prices.cta.button': 'Agendar Consulta Gratuita',
    
    // Price Categories
    'prices.general': 'Odontología General',
    'prices.aesthetic': 'Estética Dental',
    'prices.endodontics': 'Endodoncia',
    'prices.prosthetics': 'Prótesis y Dentaduras',
    'prices.implantology': 'Implantología',
    'prices.surgery': 'Cirugía Maxilofacial',
    
    // Treatments
    'treatment.consultation': 'Consulta General',
    'treatment.cleaning': 'Limpieza Dental',
    'treatment.filling': 'Empaste Resina',
    'treatment.extraction.simple': 'Extracción Simple',
    'treatment.extraction.complex': 'Extracción Compleja',
    'treatment.whitening': 'Blanqueamiento Dental',
    'treatment.veneer': 'Carilla de Porcelana',
    'treatment.crown': 'Corona de Porcelana',
    'treatment.smile.design': 'Diseño de Sonrisa',
    'treatment.inlay': 'Incrustación Estética',
    'treatment.root.canal.1': 'Tratamiento de Conducto 1 Raíz',
    'treatment.root.canal.2': 'Tratamiento de Conducto 2 Raíces',
    'treatment.root.canal.3': 'Tratamiento de Conducto 3 Raíces',
    'treatment.retreatment': 'Retratamiento de Conducto',
    'treatment.apicoectomy': 'Apicectomía',
    'treatment.partial.denture': 'Dentadura Parcial Metal',
    'treatment.full.denture': 'Dentadura Completa Porcelana',
    'treatment.flexible.denture': 'Dentadura Flexible',
    'treatment.implant.prosthesis': 'Prótesis sobre Implantes',
    'treatment.denture.repair': 'Reparación de Dentadura',
    'treatment.single.implant': 'Implante Dental Individual',
    'treatment.implant.crown': 'Corona sobre Implante',
    'treatment.all.on.4': 'All-on-4 (Arcada Completa)',
    'treatment.all.on.6': 'All-on-6 (Arcada Completa)',
    'treatment.bone.graft': 'Injerto de Hueso',
    'treatment.wisdom.tooth': 'Extracción de Muela del Juicio',
    'treatment.cyst.surgery': 'Cirugía de Quiste',
    'treatment.frenectomy': 'Frenectomía',
    'treatment.oral.biopsy': 'Biopsia Oral',
    'treatment.periodontal.surgery': 'Cirugía Periodontal',
    
    // Branches
    'branches.title': 'Nuestras Sucursales',
    'branches.subtitle': 'Visita nuestras modernas instalaciones',
    'branches.guadalajara.name': 'Sucursal Guadalajara',
    'branches.chapala.name': 'Sucursal Chapala',
    'branches.ourDoctors': 'Conoce a nuestros doctores',
    'branches.contactInfo': 'Información de contacto',
    'branches.schedule': 'Horarios de atención',
    'branches.phone': 'Teléfono',
    'branches.email': 'Email',
    'branches.website': 'Sitio web',
    'branches.whatsapp': 'WhatsApp',
    'branches.call': 'Llamar',

    // Blog
    'blog.title': 'Blog Dental',
    'blog.subtitle': 'Información actualizada sobre salud dental y tratamientos',
    'blog.post1.title': 'La Importancia de la Higiene Dental Diaria',
    'blog.post1.excerpt': 'Descubre cómo mantener una rutina de higiene dental efectiva para prevenir enfermedades y mantener tu sonrisa saludable.',
    'blog.post1.date': '15 de Enero, 2024',
    'blog.post1.author': 'Dr. María González',
    'blog.post2.title': 'Blanqueamiento Dental: Todo lo que Necesitas Saber',
    'blog.post2.excerpt': 'Conoce los diferentes tipos de blanqueamiento dental disponibles en nuestras clínicas de Chapala y Guadalajara.',
    'blog.post2.date': '8 de Enero, 2024',
    'blog.post2.author': 'Dra. Ana Martínez',
    'blog.post3.title': 'Ortodoncia Invisible: La Revolución en Moleet Dental',
    'blog.post3.excerpt': 'Aprende sobre las ventajas de la ortodoncia invisible y cómo puede transformar tu sonrisa sin comprometer tu estilo de vida.',
    'blog.post3.date': '2 de Enero, 2024',
    'blog.post3.author': 'Dr. Carlos López',
    'blog.readMore': 'Leer más',
    'blog.viewAll': 'Ver todos los artículos',

    // Footer
    'footer.contact': 'Contacto',
    'footer.hours': 'Horarios',
    'footer.services': 'Servicios',
    'footer.followUs': 'Síguenos',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};