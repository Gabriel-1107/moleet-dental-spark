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
    'services.subtitle': 'Complete dental treatments with the highest quality',
    
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
    
    // Footer
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.services': 'Services',
    'footer.followUs': 'Follow Us',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
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
    'services.subtitle': 'Tratamientos dentales completos con la más alta calidad',
    
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