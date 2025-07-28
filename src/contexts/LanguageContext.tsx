import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.locations': 'Ubicaciones',
    'nav.prices': 'Precios',
    'nav.doctors': 'Doctores',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Tu Sonrisa Perfecta',
    'hero.subtitle': 'Nos Espera',
    'hero.description': 'Servicios dentales profesionales con tecnología avanzada en Guadalajara y Chapala. Especialistas comprometidos con tu salud oral.',
    'hero.cta': 'Agenda tu Consulta',
    
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
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Tratamientos dentales completos con la más alta calidad',
    
    // Testimonials
    'testimonials.title': 'Lo que Dicen Nuestros Pacientes',
    'testimonials.subtitle': 'Historias reales de sonrisas transformadas',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.hours': 'Horarios',
    'footer.services': 'Servicios',
    'footer.followUs': 'Síguenos',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.locations': 'Locations',
    'nav.prices': 'Prices',
    'nav.doctors': 'Doctors',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Perfect Smile',
    'hero.subtitle': 'Awaits You',
    'hero.description': 'Professional dental services with advanced technology in Guadalajara and Chapala. Specialists committed to your oral health.',
    'hero.cta': 'Schedule Your Appointment',
    
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
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete dental treatments with the highest quality',
    
    // Testimonials
    'testimonials.title': 'What Our Patients Say',
    'testimonials.subtitle': 'Real stories of transformed smiles',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.services': 'Services',
    'footer.followUs': 'Follow Us',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

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