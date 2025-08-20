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
    'nav.transport': 'Dental Tourism',
    'nav.contact': 'Contact',
    'nav.especialities': 'Specialties',
    'nav.blog': 'Blog',
    'nav.videos': 'Videos',
    'sucursal.desc': 'View Branch',
    'branches.guadalajara.name': 'Zapopan Branch',
    'branches.chapala.name': 'Chapala Branch',
    'branches.title': 'Our Locations',
    'branches.subtitle': 'Visit our modern dental clinics in Guadalajara and Chapala',
    'services.advanced.title': 'Featured Services',
    'services.advanced.subtitle': 'Discover our most popular and effective services',
    'services.technology.title': 'Advanced Technology',
    'services.technology.description': 'We use cutting-edge technology to provide precise and effective dental treatments.',
    'services.safety.title': 'Safety and Hygiene',
    'services.safety.description': 'We are committed to maintaining the highest standards of safety and hygiene in all our facilities and procedures.',
    'services.care.title': 'Dental Care',
    'services.care.description': 'We offer comprehensive dental care for the whole family, from regular check-ups to specialized treatments.',
    'services.cta.contact': 'Schedule Your Appointment',
    'services.cta.prices': 'View Prices',
    'branches.phone': 'Phone',
    'branches.email': 'Email',
    'branches.schedule': 'Hours',
    'branches.whatsapp': 'WhatsApp',
    'branches.call': 'Call',
    'implants.title': 'Implants Placed',
    // sectionprices
    'prices.general': 'General Dentistry',
    'prices.aesthetic': 'Aesthetic Dentistry',
    'prices.endodontics': 'Endodontics',
    'prices.prosthetics': 'Prosthodontics',
    'prices.implantology': 'Implantology',
    'prices.surgery': 'Oral Surgery',

    // Treatments (General)
    'treatment.consultation': 'Dental Consultation',
    'treatment.cleaning': 'Professional Cleaning',
    'treatment.filling': 'Dental Filling',
    'treatment.extraction.simple': 'Simple Extraction',
    'treatment.extraction.complex': 'Complex Extraction',

    // Treatments (Aesthetic)
    'treatment.whitening': 'Teeth Whitening',
    'treatment.veneer': 'Dental Veneer',
    'treatment.crown': 'Dental Crown',
    'treatment.smile.design': 'Smile Design',
    'treatment.inlay': 'Dental Inlay',

    // Treatments (Endodontics)
    'treatment.root.canal.1': 'Root Canal (1 canal)',
    'treatment.root.canal.2': 'Root Canal (2 canals)',
    'treatment.root.canal.3': 'Root Canal (3 canals)',
    'treatment.retreatment': 'Endodontic Retreatment',
    'treatment.apicoectomy': 'Apicoectomy',

    // Treatments (Prosthetics)
    'treatment.partial.denture': 'Partial Denture',
    'treatment.full.denture': 'Complete Denture',
    'treatment.flexible.denture': 'Flexible Denture',
    'treatment.implant.prosthesis': 'Implant Prosthesis',
    'treatment.denture.repair': 'Denture Repair',

    // Treatments (Implantology)
    'treatment.single.implant': 'Single Dental Implant',
    'treatment.implant.crown': 'Implant Crown',
    'treatment.all.on.4': 'All-on-4®',
    'treatment.all.on.6': 'All-on-6®',
    'treatment.bone.graft': 'Bone Graft',

    // Treatments (Surgery)
    'treatment.wisdom.tooth': 'Wisdom Tooth Extraction',
    'treatment.cyst.surgery': 'Cyst Surgery',
    'treatment.frenectomy': 'Frenectomy',
    'treatment.oral.biopsy': 'Oral Biopsy',
    'treatment.periodontal.surgery': 'Periodontal Surgery',
    
    
    // Common
    'common.back': 'Back',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    
    // Hero Section
    'hero.title': 'Smile with',
    'hero.subtitle': 'pleasure',
    'hero.description': 'Professional dental services with advanced technology in Guadalajara and Chapala. Specialists committed to your oral health.',
    'hero.cta': 'Schedule Your Appointment',
    'hero.viewServices': 'View Services',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.patients': 'Satisfied Patients',
    'hero.stats.locations': 'Locations',
    "hero.oral": 'rehabilitacion oral',
    'services.back': 'Explore Our Services',
    "hero.descri": 'rehabilitacion oral',


  


// Videos
    'videos.title': 'Educational Videos',
    'videos.subtitle': 'Discover our treatments and learn more about our services',
    'videos.tour.title': 'Virtual Clinic Tour',
    'videos.tour.description': 'Explore our modern facilities',
    'videos.implants.title': 'Dental Implant Process',
    'videos.implants.description': 'Discover how we perform implants',
    'videos.testimonials.title': 'Patient Testimonials',
    'videos.testimonials.description': 'Real transformation stories',
    'videos.technology.title': 'Advanced Technology',
    'videos.technology.description': 'State-of-the-art equipment',
    'videos.whitening.title': 'Teeth Whitening',
    'videos.whitening.description': 'Step-by-step process',
    
  


    






    'services.guadalajara.name': 'Dental clinic in Chapala, with more experience and cutting-edge technology.',
    'services.chapala.name': 'Dental clinic in Zapopan, with more than 17 years of experience and the best technology.',
    
    // SEO
    'seo.home.title': 'Moleet Dental Unit - Professional Dental Services in Guadalajara and Chapala',
    'seo.home.description': 'Quality dental services with advanced technology. Dental clinic in Guadalajara and Chapala with specialists in general dentistry, orthodontics, endodontics and cosmetic dentistry.',
    'seo.home.keywords': 'dentist Guadalajara, dentist Chapala, dental clinic, dental whitening, dental implants, orthodontics, endodontics',
    
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
    
    // Specialties dropdown (basic info)
    'specialties.dropdown.odontologia-general.name': 'General Dentistry',
    'specialties.dropdown.odontologia-general.description': 'Comprehensive care for the whole family',
    'specialties.dropdown.endodoncia.name': 'Endodontics',
    'specialties.dropdown.endodoncia.description': 'Specialized root canal treatments',
    'specialties.dropdown.periodoncia.name': 'Periodontics', 
    'specialties.dropdown.periodoncia.description': 'Gum and supporting tissue care',
    'specialties.dropdown.cirugia-maxilofacial.name': 'Oral Surgery',
    'specialties.dropdown.cirugia-maxilofacial.description': 'Advanced oral and maxillofacial surgery',
    'specialties.dropdown.estetica-dental.name': 'Cosmetic Dentistry',
    'specialties.dropdown.estetica-dental.description': 'Smile design and aesthetics',
    'specialties.dropdown.ortodoncia.name': 'Orthodontics',
    'specialties.dropdown.ortodoncia.description': 'Dental alignment correction',
    'specialties.dropdown.odontopediatria.name': 'Pediatric Dentistry',
    'specialties.dropdown.odontopediatria.description': 'Specialized dentistry for children',

    // Prices
    'prices.more.treatments': 'more treatments',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete dental treatments with the highest quality standards',
    'services.badge': 'Professional Excellence',
    'services.popular': 'Popular',
    'services.learnMore': 'Learn More',
    'services.moreInfo': 'More Information',
    'services.cta.title': 'Ready to Transform Your Smile?',
    'services.cta.description': 'Contact us today and discover how we can help you achieve the perfect smile.',
    'testimonials.title': 'Patient Testimonials',
    'testimonials.subtitle': 'Real stories of dental transformation',

    // Specialties section
    'specialties.title': 'Our Specialties',
    'specialties.subtitle': 'Discover our comprehensive dental specialties designed to care for your oral health at every stage of life',
    'specialties.badge': 'Complete Care',
    'specialties.learnMore': 'Learn More',
    'specialties.odontologia-general.name': 'General Dentistry',
    'specialties.odontologia-general.description': 'Comprehensive dental health care with preventive and curative treatments of the highest quality',
    'specialties.odontologia-general.feature1': 'Professional cleanings',
    'specialties.odontologia-general.feature2': 'Resin fillings',
    'specialties.odontologia-general.feature3': 'Regular check-ups',
    'specialties.odontologia-general.feature4': 'Digital X-rays',
    'specialties.endodoncia.name': 'Endodontics',
    'specialties.endodoncia.description': 'Specialized root canal treatments to save your natural teeth with advanced techniques',
    'specialties.endodoncia.feature1': 'Root canal treatments',
    'specialties.endodoncia.feature2': 'Dental microscopy',
    'specialties.endodoncia.feature3': 'Retreatments',
    'specialties.endodoncia.feature4': 'Digital diagnosis',
    'specialties.periodoncia.name': 'Periodontics',
    'specialties.periodoncia.description': 'Specialized treatment of gums and supporting tissues to maintain a solid foundation',
    'specialties.periodoncia.feature1': 'Deep cleaning',
    'specialties.periodoncia.feature2': 'Scaling and root planing',
    'specialties.periodoncia.feature3': 'Gum grafts',
    'specialties.periodoncia.feature4': 'Periodontal maintenance',
    'specialties.cirugia-maxilofacial.name': 'Oral Surgery',
    'specialties.cirugia-maxilofacial.description': 'Advanced oral and maxillofacial surgery to treat complex conditions',
    'specialties.cirugia-maxilofacial.feature1': 'Complex extractions',
    'specialties.cirugia-maxilofacial.feature2': 'Dental implants',
    'specialties.cirugia-maxilofacial.feature3': 'Wisdom tooth surgery',
    'specialties.cirugia-maxilofacial.feature4': 'Conscious sedation',
    'specialties.estetica-dental.name': 'Cosmetic Dentistry',
    'specialties.estetica-dental.description': 'Smile design and aesthetic treatments to achieve the perfect smile you\'ve always wanted',
    'specialties.estetica-dental.feature1': 'Smile design',
    'specialties.estetica-dental.feature2': 'Porcelain veneers',
    'specialties.estetica-dental.feature3': 'Teeth whitening',
    'specialties.estetica-dental.feature4': 'Aesthetic composite',
    'specialties.ortodoncia.name': 'Orthodontics',
    'specialties.ortodoncia.description': 'Dental alignment correction with modern and personalized treatments for all ages',
    'specialties.ortodoncia.feature1': 'Metal braces',
    'specialties.ortodoncia.feature2': 'Aesthetic braces',
    'specialties.ortodoncia.feature3': 'Invisalign',
    'specialties.ortodoncia.feature4': 'Digital planning',
    'specialties.odontopediatria.name': 'Pediatric Dentistry',
    'specialties.odontopediatria.description': 'Specialized dentistry for children with a warm environment and adapted techniques',
    'specialties.odontopediatria.feature1': 'First dental visit',
    'specialties.odontopediatria.feature2': 'Children\'s cleaning',
    'specialties.odontopediatria.feature3': 'Dental sealants',
    'specialties.odontopediatria.feature4': 'Dental education',
    'specialties.rehabilitacion-oral.name': 'Oral Rehabilitation',
    'specialties.rehabilitacion-oral.description': 'Comprehensive restoration of dental function and aesthetics through advanced prosthetic solutions',
    'specialties.rehabilitacion-oral.feature1': 'Dental crowns and bridges',
    'specialties.rehabilitacion-oral.feature2': 'Complete and partial dentures',
    'specialties.rehabilitacion-oral.feature3': 'Dental implants restoration',
    'specialties.rehabilitacion-oral.feature4': 'Bite reconstruction',

    'oralRehabilitation.title': 'Oral Rehabilitation',
    'oralRehabilitation.subtitle': 'Specialized dentistry for comprehensive oral restoration with advanced techniques and customized solutions.',
    'oralRehabilitation.ctaButton': 'Schedule Your Appointment',
    'oralRehabilitation.treatmentsHeader': 'Our Treatments',
    'oralRehabilitation.treatmentsDescription': 'We offer a complete range of prosthetic solutions to restore function and aesthetics. From single teeth to full mouth rehabilitation, our team of specialists is here to help you recover your smile and quality of life.',
    'oralRehabilitation.treatment1': 'Dental Crowns and Bridges',
    'oralRehabilitation.treatment2': 'Complete and Partial Dentures',
    'oralRehabilitation.treatment3': 'Dental Implants Restoration',
    'oralRehabilitation.treatment4': 'Bite Reconstruction',
    'oralRehabilitation.treatment5': 'Porcelain Veneers and Inlays',
    'oralRehabilitation.treatment6': 'Zirconium Prosthetics',
    'oralRehabilitation.treatment7': 'Implant-Supported Dentures',
    'oralRehabilitation.treatment8': 'Full Mouth Rehabilitation',

    'implantology.title': 'Dental Implantology',
    'implantology.subtitle': 'Specialized in permanent dental solutions with state-of-the-art implants that restore function and aesthetics naturally.',
    'implantology.ctaButton': 'Schedule Your Appointment',
    'implantology.treatmentsHeader': 'Our Implant Solutions',
    'implantology.treatmentsDescription': 'We offer comprehensive implant treatments from single tooth replacement to full arch restorations, using the highest quality materials and advanced technology.',
    'implantology.treatment1': 'Single Dental Implants',
    'implantology.treatment2': 'Multiple Dental Implants',
    'implantology.treatment3': 'Full Arch Implants',
    'implantology.treatment4': 'Immediate Loading Implants',
    'implantology.treatment5': 'Bone Grafting and Regeneration',
    'implantology.treatment6': 'Sinus Lifts',
    'implantology.treatment7': 'All-on 4® and All on 6®',
    'implantology.treatment8': 'Implant-Supported Dentures',

    // Doctors section
    'doctors.title': 'Our Specialists',
    'doctors.subtitle': 'Meet our team of highly qualified specialists, committed to your oral health',
    'doctors.filter.all': 'All',
    'doctors.filter.general': 'General Dentistry',
    'doctors.filter.endodontics': 'Endodontics',
    'doctors.filter.periodontics': 'Periodontics',
    'doctors.filter.surgery': 'Oral Surgery',
    'doctors.filter.aesthetics': 'Cosmetic Dentistry',
    'doctors.filter.orthodontics': 'Orthodontics',
    'doctors.filter.pediatrics': 'Pediatric Dentistry',
    'doctors.filter.rehabilitation': 'Oral Rehabilitation',
    'doctors.experience': 'years',
    'doctors.education': 'Education',
    'doctors.certifications': 'Certifications',
    'doctors.languages': 'Languages',
    'doctors.schedule': 'Expercience',
    'doctors.cta.title': 'Don\'t know which specialist you need?',
    'doctors.cta.description': 'Schedule a general consultation and we\'ll help you determine the ideal treatment for you.',
    'doctors.cta.button': 'General Consultation',
    
    // Service Categories
    'services.general.title': 'General Dentistry',
    'services.general.description': 'Comprehensive dental care with preventive and curative treatments.',
    'services.general.fullDescription': 'Our general dentistry services include cleanings, fillings, and regular check-ups to maintain your oral health.',
    'services.general.feature1': 'Professional cleanings',
    'services.general.feature2': 'Composite fillings',
    'services.general.feature3': 'Tooth extractions',
    'services.general.feature4': 'Regular checkups',
    
    'services.aesthetic.title': 'Cosmetic Dentistry',
    'services.aesthetic.description': 'Transform your smile with cutting-edge aesthetic treatments.',
    'services.aesthetic.fullDescription': 'We offer a wide range of aesthetic treatments including whitening, veneers, and smile design to enhance the appearance of your smile.',
    'services.aesthetic.feature1': 'Teeth whitening',
    'services.aesthetic.feature2': 'Porcelain veneers',
    'services.aesthetic.feature3': 'Dental crowns',
    'services.aesthetic.feature4': 'Smile design',
    
    'services.endodontics.title': 'Endodontics',
    'services.endodontics.description': 'Root canal specialists to save your natural teeth.',
    'services.endodontics.fullDescription': 'Specialists in root canal treatments using advanced techniques to save your natural teeth and relieve pain.',
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

    'services.rehabilitacionoral.title': 'Oral rehabilitacion',
    'services.rehabilitacionoral.description': 'It is a dental specialty focused on restoring the function, aesthetics, and oral health of patients who have lost teeth or have bite problems.',
    'services.rehabilitacionoral.feature1': 'Dental implants',
    'services.rehabilitacionoral.feature2': 'Crowns',
    'services.rehabilitacionoral.feature3': 'Dental bridges',
    'services.rehabilitacionoral.feature4': 'Veneers',
    // Doctors
    'Periodoncia.tt': 'Periodontics',
    // Blog
    'blog.title': 'Dental Blog',
    'blog.subtitle': 'Updated information about dental health and treatments',
    'blog.featured': 'Featured',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Articles',
    'blog.cta.title': 'Need a Dental Consultation?',
    'blog.cta.description': 'Contact us today to schedule your appointment and start your journey to a perfect smile.',
    'blog.cta.button': 'Schedule Consultation',
    
    // Blog Posts
    'blog.post1.title': 'Teeth Whitening in Chapala and Guadalajara: Complete Guide',
    'blog.post1.excerpt': 'Discover everything about professional teeth whitening, types of treatments, benefits and why choose our dental clinic.',
    'blog.post1.content': 'Professional teeth whitening has become one of the most requested treatments in our dental clinics in Chapala and Guadalajara. At Moleet Dental Unit, we offer different whitening techniques adapted to each patient\'s needs.',
    'blog.post1.author': 'Dr. María González',
    'blog.post1.date': 'January 15, 2024',
    'blog.post1.readTime': '5 min read',
    'blog.post1.category': 'Cosmetic Dentistry',
    
    'blog.post2.title': 'Dental Implants in Guadalajara: Prices and Complete Process',
    'blog.post2.excerpt': 'Learn about dental implant treatment, recovery process, costs and benefits of choosing our clinic in Guadalajara.',
    'blog.post2.content': 'Dental implants represent the best solution for replacing lost teeth. In our Guadalajara clinic, we use the latest technology to guarantee successful and long-lasting results.',
    'blog.post2.author': 'Dr. Ana Martínez',
    'blog.post2.date': 'January 8, 2024',
    'blog.post2.readTime': '7 min read',
    'blog.post2.category': 'Implantology',
    
    'blog.post3.title': 'Invisible Orthodontics in Chapala: The Modern Solution',
    'blog.post3.excerpt': 'Discover the advantages of invisible orthodontics and how it can transform your smile without affecting your daily life.',
    'blog.post3.content': 'Invisible orthodontics has revolutionized dental treatment. At our Chapala clinic, we offer this innovative solution for patients seeking discretion and comfort.',
    'blog.post3.author': 'Dr. Carlos López',
    'blog.post3.date': 'January 2, 2024',
    'blog.post3.readTime': '6 min read',
    'blog.post3.category': 'Orthodontics',
    
    // Blog SEO
    'blog.seo.title': 'Dental Blog - Moleet Dental Unit | Information and Tips',
    'blog.seo.description': 'Dental blog with updated information about treatments, oral health, dental implants, whitening and orthodontics in Guadalajara and Chapala.',
    'blog.seo.keywords': 'dental blog, oral health, dental treatments, dentist Guadalajara, dentist Chapala, dental information',
    'blog.share': 'Share Article',
    'blog.author.bio': 'Dental specialist at Moleet Dental Unit',
    
    // Videos
   
    'videos.seo.title': 'Dental Videos - Moleet Dental Unit | Procedures and Facilities',
    'videos.seo.description': 'Watch videos of our dental procedures, modern facilities and patient testimonials in Guadalajara and Chapala.',
    'videos.seo.keywords': 'dental videos, dental procedures, dental clinic Guadalajara, dental clinic Chapala, patient testimonials',
    
    'videos.categories.all': 'All Videos',
    'videos.categories.aesthetic': 'Aesthetic Dentistry',
    'videos.categories.surgery': 'Dental Surgery',
    'videos.categories.technology': 'Technology',
    'videos.categories.testimonials': 'Testimonials',
    'videos.categories.facilities': 'Our Facilities',
    
    'videos.blanqueamiento.title': 'Professional Teeth Whitening',
    'videos.blanqueamiento.description': 'Discover our professional teeth whitening procedure and achieve a brighter smile.',
    'videos.implantes.title': 'Dental Implant Procedure',
    'videos.implantes.description': 'Learn about our advanced dental implant procedures with state-of-the-art technology.',
    'videos.tecnologia.title': 'Advanced Dental Technology',
    'videos.tecnologia.description': 'Tour our modern facilities and cutting-edge dental equipment.',
    'videos.testimonios.title': 'Patient Testimonials',
    'videos.testimonios.description': 'Real stories from satisfied patients who transformed their smiles with us.',
    
    
    'videos.cta.title': 'Ready to Start Your Dental Journey?',
    'videos.cta.description': 'Contact us today to schedule your appointment and experience our professional care.',
    'videos.cta.button': 'Schedule Appointment',
    
    // Transport
    'transport.title': 'Airport Transportation Service',
    'transport.subtitle': 'Comfortable and reliable transport from/to the airport',
    'transport.description': 'Dental tourism is a trend in which people travel to tourist destinations to receive high-quality dental treatments at affordable prices, combining oral health care with a relaxing and recreational experience. The goal is to offer a convenient and attractive alternative for patients, especially foreigners, seeking specialized care while enjoying their stay in a charming place like Chapala.',
    'transport.features.title': 'What We Offer',
    'transport.features.comfortable': 'Comfortable vehicles',
    'transport.features.punctual': 'Punctual service',
    'transport.features.professional': 'Professional drivers',
    'transport.features.safe': 'Safe and reliable',
    'transport.booking.title': 'Book Your Transport',
    'transport.booking.description': 'Contact us to coordinate your pickup',
    'transport.routes.title': 'Available Routes',
    'transport.routes.subtitle': 'Comfortable transportation to make your visit seamless',
    'transport.pickup.title': 'Airport Pickup',
    'transport.pickup.description': 'We pick you up directly at the airport',
    'transport.comfort.title': 'Comfortable Vehicles',
    'transport.comfort.description': 'Modern, air-conditioned vehicles for your comfort',
    'transport.hotel.title': 'Hotel Transfer',
    'transport.hotel.description': 'Direct transfer to your accommodation',

    // English
    'language.1': 'Strategic collaboration',
    'language.2': 'Chapala Branch in partnership with Red Dentalia',
    'language.3': 'We are proud to be part of the network of clinics associated with Dentalia, the largest dental services chain in Mexico. This alliance allows us to offer you the best of both worlds: the warmth and personalized attention of a local clinic with the quality standards, technology, and backing of the most important dental network in the country.',
    'language.4': 'Advanced technology',
    'language.5': 'Access to state-of-the-art equipment',
    'language.6': 'Certified protocols',
    'language.7': 'Following international standards',
    'language.8': 'Quality guarantee',
    'language.9': 'Backed by the largest network in Mexico',

    // Doctorssections
    'doctors.descriptions.dr_ramon': 'Specialist in preventive general dentistry with a focus on comprehensive family care.',
    'doctors.descriptions.dr_silverio': 'Endodontist dedicated to dental preservation. Specialized in emergency cases and retreatments.',
    'doctors.descriptions.dr_jong': 'Specialist in preventive and aesthetic periodontics. Comprehensive approach to gingival and periodontal health.',
    'doctors.descriptions.dra_andrea': 'Specialist in oral surgery and facial trauma. Expert in conscious sedation and outpatient surgery.',
    'doctors.descriptions.dr_sebastian': 'Expert in comprehensive aesthetic rehabilitation. Specialized in veneers and facial harmonization.',
    
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
    
    // Specialties
    'specialties.general.title': 'General Dentistry',
    'specialties.endodontics.title': 'Endodontics',   
    'specialties.periodontics.title': 'Periodontics',
    'specialties.oral_surgery.title': 'Oral and Maxillofacial Surgery',
    'specialties.cosmetic.title': 'Cosmetic Dentistry',
    'specialties.orthodontics.title': 'Orthodontics',
    'specialties.pediatric.title': 'Pediatric Dentistry',
    
    // MisionYvision
    "missionVision.title": "Our Purpose",
    "missionVision.subtitle": "What drives us every day",
    "missionVision.mission.title": "Mission",
    "missionVision.mission.subtitle": "Our Commitment",
    "missionVision.mission.problem": "Finding quality dental care with a personal touch can be challenging.",
    "missionVision.mission.solution": "At Moleet Medical Unit, we are dedicated to transforming smiles with professionalism and passion. We provide high-quality dental care in Zapopan/Chapala, Jalisco, offering our patients a team of highly trained specialists in every area of dentistry.",
    "missionVision.vision.title": "Vision",
    "missionVision.vision.subtitle": "Our Aspiration",
    "missionVision.vision.problem": "Dental clinics often lack the combination of excellence, comfort and personalized care.",
    "missionVision.vision.solution": "To be the most prestigious dental clinic in Zapopan and Chapala, recognized for our excellence in care, quality of treatment, and a team of specialists committed to the health and well-being of our patients.",
    'historia': 'It began in 2008 in Zapopan, Jalisco, when some dentist friends we met during dental school got together and decided to open a dental clinic. The goal was to do what we loved most: helping people with dental problems, while also working as part of a team of dentists capable of solving the challenges of the profession in different dental specialties. After 17 years, we expanded to Chapala to continue helping people smile with gusto.',
    'historia.title': 'History of Moleet Dental Unit',
    'about.brandDescription': 'Moleet Dental Unit are multi-specialty dental clinics and offices for patients of all ages and diagnoses, located in the Chapala area, Jalisco',
    'brand.values.title': 'Brand Essentials (Values)',
    'brand.values.profesionalidad.title': 'PROFESSIONALISM',
    'brand.values.profesionalidad.description': 'Because every patient deserves to be treated with experience, ethics and commitment.',
    'brand.values.calidad.title': 'QUALITY',
    'brand.values.calidad.description': 'We work with the best materials, techniques and specialists.',
    'brand.values.honestidad.title': 'HONESTY',
    'brand.values.honestidad.description': 'Trust is built through clear diagnoses and fair treatments.',
    'brand.values.pasion.title': 'PASSION',
    'brand.values.pasion.description': 'Because we love what we do and it shows in every smile we transform.',


    // Footer
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.services': 'Services',
    'footer.followUs': 'Follow Us',
    'context.footer.text': 'Committed to your oral health, we offer quality dental services with advanced technology and a team of highly qualified specialists.',
    'branches.ourDoctors': 'Our Doctors',
    'branches.contactInfo': 'Contact Information',

    // Espacialidades
    'odontologia.general.name': 'General Dentistry',  
    'odontologia.general.description': 'Comprehensive dental health care with the highest quality preventive and curative treatments',  
    'odontologia.general.feature1': 'Professional cleanings',  
    'odontologia.general.feature2': 'Resin fillings',  
    'odontologia.general.feature3': 'Regular check-ups',  
    'odontologia.general.feature4': 'Digital X-rays',  
    'odontologia.general.feature5': 'Emergency treatments',  
    'endodoncia.name': 'Endodontics',
    'endodoncia.description': 'Specialized root canal treatments to save your natural teeth with advanced techniques and minimal discomfort.',
    'endodoncia.feature1': 'Root Canal Treatments',
    'endodoncia.feature2': 'Dental Microscopy',
    'endodoncia.feature3': 'Retreatments',
    'endodoncia.feature4': 'Pulpotomies',
    'endodoncia.feature5': 'Apicoectomies',
    'endodoncia.feature6': 'Internal Bleaching',
    'endodoncia.feature7': 'Dental Emergencies',
    'endodoncia.feature8': 'Digital Diagnosis',

    'periodoncia.name': 'Periodontics',
    'periodoncia.description': 'Specialized treatment of gums and dental supporting tissues to maintain a solid foundation for your teeth.',
    'periodoncia.feature1': 'Deep Cleaning',
    'periodoncia.feature2': 'Scaling and Root Planing',
    'periodoncia.feature3': 'Periodontal Surgery',
    'periodoncia.feature4': 'Gum Grafts',
    'periodoncia.feature5': 'Tissue Regeneration',
    'periodoncia.feature6': 'Periodontal Maintenance',
    'periodoncia.feature7': 'Gingivitis Treatment',
    'periodoncia.feature8': 'Plaque Control',

    'cirugia_maxilofacial.name': 'Oral Surgery',
    'cirugia_maxilofacial.description': 'Advanced oral and maxillofacial surgery to treat complex conditions of the mouth, face, and jaws.',
    'cirugia_maxilofacial.feature1': 'Complex Extractions',
    'cirugia_maxilofacial.feature2': 'Wisdom Teeth Surgery',
    'cirugia_maxilofacial.feature3': 'Dental Implants',
    'cirugia_maxilofacial.feature4': 'Pre-Prosthetic Surgery',
    'cirugia_maxilofacial.feature5': 'Cysts and Tumors',
    'cirugia_maxilofacial.feature6': 'Facial Trauma',
    'cirugia_maxilofacial.feature7': 'Orthognathic Surgery',
    'cirugia_maxilofacial.feature8': 'Conscious Sedation',

    // Cosmetic Dentistry
    'estetica_dental.name': 'Cosmetic Dentistry',
    'estetica_dental.description': 'Smile design and aesthetic treatments to achieve the perfect smile you\'ve always wanted.',
    'estetica_dental.feature1': 'Smile Design',
    'estetica_dental.feature2': 'Porcelain Veneers',
    'estetica_dental.feature3': 'Teeth Whitening',
    'estetica_dental.feature4': 'Aesthetic Inlays',
    'estetica_dental.feature5': 'Porcelain Crowns',
    'estetica_dental.feature6': 'Dental Reshaping',
    'estetica_dental.feature7': 'Composite Bonding',
    'estetica_dental.feature8': 'Facial Harmonization',

    // Orthodontics
    'ortodoncia.name': 'Orthodontics',
    'ortodoncia.description': 'Dental alignment correction with modern and personalized treatments for all ages.',
    'ortodoncia.feature1': 'Metal Braces',
    'ortodoncia.feature2': 'Ceramic Braces',
    'ortodoncia.feature3': 'Clear Aligners',
    'ortodoncia.feature4': 'Invisalign',
    'ortodoncia.feature5': 'Removable Appliances',
    'ortodoncia.feature6': 'Post-Treatment Retention',
    'ortodoncia.feature7': 'Pediatric Orthodontics',
    'ortodoncia.feature8': 'Digital Planning',

    // Pediatric Dentistry
    'odontopediatria.name': 'Pediatric Dentistry',
    'odontopediatria.description': 'Specialized dentistry for children with a warm environment and techniques adapted for the little ones.',
    'odontopediatria.feature1': 'First Dental Visit',
    'odontopediatria.feature2': 'Children\'s Cleaning',
    'odontopediatria.feature3': 'Dental Sealants',
    'odontopediatria.feature4': 'Pediatric Fillings',
    'odontopediatria.feature5': 'Pulpotomies',
    'odontopediatria.feature6': 'Children\'s Crowns',
    'odontopediatria.feature7': 'Dental Education',
    'odontopediatria.feature8': 'Cavity Prevention',

    // trataments
    'ours.tratamients': 'Our Treatments',
    'ours.tratamients.description': 'We offer a wide range of dental treatments to meet all your needs. From general dentistry to specialized treatments, our team of experts is here to help you achieve the smile you deserve.',

    // Sucursal
    'sucursal': 'Dont know which branch to choose?',
    'contactanos': 'Contact us and well help you choose the most convenient location for you.',

    
   
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.specialties': 'Especialidades',
    'nav.locations': 'Ubicaciones',
    'nav.prices': 'Precios',
    'nav.doctors': 'Doctores',
    'nav.transport': 'Turismo dental',
    'nav.contact': 'Contacto',
    'nav.especialities': 'Especialidades',
    'nav.blog': 'Blog',
    'nav.videos': 'Videos',
    'sucursal.desc': 'Conocer Sucursal',
    'branches.guadalajara.name': 'Sucursal Zapopan',
    'branches.chapala.name': 'Sucursal Chapala',

    // sectionprices
    'prices.general': 'Odontología General',
    'prices.aesthetic': 'Odontología Estética',
    'prices.endodontics': 'Endodoncia',
    'prices.prosthetics': 'Prótesis Dental',
    'prices.implantology': 'Implantología',
    'prices.surgery': 'Cirugía Oral',

    // Treatments (General)
    'treatment.consultation': 'Consulta Dental',
    'treatment.cleaning': 'Limpieza Profesional',
    'treatment.filling': 'Resina/Obturación',
    'treatment.extraction.simple': 'Extracción Simple',
    'treatment.extraction.complex': 'Extracción Compleja',

    // Treatments (Aesthetic)
    'treatment.whitening': 'Blanqueamiento Dental',
    'treatment.veneer': 'Carilla Dental',
    'treatment.crown': 'Corona Dental',
    'treatment.smile.design': 'Diseño de Sonrisa',
    'treatment.inlay': 'Incrustación Dental',

    // Treatments (Endodontics)
    'treatment.root.canal.1': 'Endodoncia (1 conducto)',
    'treatment.root.canal.2': 'Endodoncia (2 conductos)',
    'treatment.root.canal.3': 'Endodoncia (3 conductos)',
    'treatment.retreatment': 'Retratamiento',
    'treatment.apicoectomy': 'Apicectomía',

    // Treatments (Prosthetics)
    'treatment.partial.denture': 'Prótesis Parcial',
    'treatment.full.denture': 'Prótesis Completa',
    'treatment.flexible.denture': 'Prótesis Flexible',
    'treatment.implant.prosthesis': 'Prótesis sobre Implantes',
    'treatment.denture.repair': 'Reparación de Prótesis',

    // Treatments (Implantology)
    'treatment.single.implant': 'Implante Dental Unitario',
    'treatment.implant.crown': 'Corona sobre Implante',
    'treatment.all.on.4': 'All-on-4®',
    'treatment.all.on.6': 'All-on-6®',
    'treatment.bone.graft': 'Injerto Óseo',

    // Treatments (Surgery)
    'treatment.wisdom.tooth': 'Extracción de Muela del Juicio',
    'treatment.cyst.surgery': 'Cirugía de Quiste',
    'treatment.frenectomy': 'Frenectomía',
    'treatment.oral.biopsy': 'Biopsia Oral',
    'treatment.periodontal.surgery': 'Cirugía Periodontal',

    'branches.title': 'Nuestras Sucursales',
    'branches.subtitle': 'Visita nuestras modernas clínicas dentales en Guadalajara y Chapala',
    'services.advanced.title': 'Servicios destacados',
    'services.advanced.subtitle': 'Conoce nuestros servicios más populares y efectivos',
    'services.technology.title': 'Tecnología Avanzada',
    'services.technology.description': 'Utilizamos tecnología de vanguardia para ofrecer tratamientos dentales precisos y efectivos.',
    'services.safety.title': 'Seguridad e Higiene',
    'services.safety.description': 'Nos comprometemos a mantener los más altos estándares de seguridad e higiene en todas nuestras instalaciones y procedimientos.',
    'services.care.title': 'Cuidado Dental',
    'services.care.description': 'Ofrecemos atención dental integral para toda la familia, desde chequeos regulares hasta tratamientos especializados.',
    'services.cta.contact': 'Agenda tu cita',
    'services.cta.prices': 'Ver Precios',
    'branches.phone': 'Teléfono',
    'branches.email': 'Correo',
    'branches.schedule': 'Horarios',
    'branches.whatsapp': 'WhatsApp',
    'branches.call': 'Llamar',
    'implants.title': 'Implantes Colocados',

    
    // Common
    'common.back': 'Volver',
    'common.close': 'Cerrar',
    'common.loading': 'Cargando...',
    
    // Hero Section
    'hero.title': 'Sonrie',
    'hero.subtitle': 'con ganas',
    'hero.description': 'Servicios dentales profesionales con tecnología avanzada en Guadalajara y Chapala. Especialistas comprometidos con tu salud oral.',
    'hero.cta': 'Agenda tu Consulta',
    "hero.oral": 'rehabilitacion Oral',
    'hero.viewServices': 'Ver Servicios',
    'hero.stats.experience': 'Años de Experiencia',
    'hero.stats.patients': 'Pacientes Satisfechos',
    'hero.stats.locations': 'Ubicaciones',
    'services.back': 'Conoce nuestros servicios',


    // Videos
    'videos.title': 'Videos Informativos',
    'videos.subtitle': 'Descubre nuestros tratamientos y conoce mejor nuestros servicios',
    'videos.tour.title': 'Tour Virtual de la Clínica',
    'videos.tour.description': 'Conoce nuestras modernas instalaciones',
    'videos.implants.title': 'Proceso de Implantes Dentales',
    'videos.implants.description': 'Descubre cómo realizamos los implantes',
    'videos.testimonials.title': 'Testimonios de Pacientes',
    'videos.testimonials.description': 'Historias reales de transformación',
    'videos.technology.title': 'Tecnología Avanzada',
    'videos.technology.description': 'Equipos de última generación',
    'videos.whitening.title': 'Blanqueamiento Dental',
    'videos.whitening.description': 'Proceso paso a paso',
    

    
    'services.chapala.name': 'Clínica dental en Chapala, con más experiencia y tecnología de vanguardia.',
    'services.guadalajara.name': 'Clínica dental en Zapopan, con más de 17 años de experiencia y la mejor tecnología.',

  

    // Doctorssections
    'doctors.descriptions.dr_ramon': 'Especialista en odontología general preventiva con enfoque en cuidado familiar integral.',
    'doctors.descriptions.dr_silverio': 'Endodoncista dedicado a la preservación dental. Especializado en casos de urgencias y retratamientos.',
    'doctors.descriptions.dr_jong': 'Especialista en periodoncia preventiva y estética. Enfoque integral en la salud gingival y periodontal.',
    'doctors.descriptions.dra_andrea': 'Especialista en cirugía oral y trauma facial. Experta en sedación consciente y cirugía ambulatoria.',
    'doctors.descriptions.dr_sebastian': 'Experto en rehabilitación estética integral. Especializado en carillas y armonización facial.',
        
    // SEO
    'seo.home.title': 'Moleet Dental Unit - Servicios Dentales Profesionales en Guadalajara y Chapala',
    'seo.home.description': 'Servicios dentales de calidad con tecnología avanzada. Clínica dental en Guadalajara y Chapala con especialistas en odontología general, ortodoncia, endodoncia y estética dental.',
    'seo.home.keywords': 'dentista Guadalajara, dentista Chapala, clínica dental, blanqueamiento dental, implantes dentales, ortodoncia, endodoncia',
    
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
    
    // Specialties dropdown  
    

    // Prices
    'prices.more.treatments': 'tratamientos más',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Tratamientos dentales completos con los más altos estándares de calidad',
    'services.badge': 'Excelencia Profesional',
    'services.popular': 'Popular',
    'services.learnMore': 'Conoce Más',
    'services.moreInfo': 'Más Información',
    'services.cta.title': '¿Listo para Transformar tu Sonrisa?',
    'services.cta.description': 'Contáctanos hoy y descubre cómo podemos ayudarte a lograr la sonrisa perfecta.',
    'testimonials.title': 'Testimonios de Pacientes',
    'testimonials.subtitle': 'Historias reales de transformación dental',

    // Specialties section
    'specialties.title': 'Nuestras Especialidades',
    'specialties.subtitle': 'Descubre nuestras especialidades dentales integrales diseñadas para cuidar tu salud bucal en cada etapa de la vida',
    'specialties.badge': 'Cuidado Completo',
    'specialties.learnMore': 'Más información',

    'specialties.odontologia-general.name': 'Odontología General',
    'specialties.odontologia-general.description': 'Atención integral de salud dental con tratamientos preventivos y curativos de la más alta calidad',
    'specialties.odontologia-general.feature1': 'Limpiezas profesionales',
    'specialties.odontologia-general.feature2': 'Empastes de resina',
    'specialties.odontologia-general.feature3': 'Revisiones periódicas',
    'specialties.odontologia-general.feature4': 'Radiografías digitales',

    'specialties.endodoncia.name': 'Endodoncia',
    'specialties.endodoncia.description': 'Tratamientos de conductos especializados para salvar tus dientes naturales con técnicas avanzadas',
    'specialties.endodoncia.feature1': 'Tratamientos de conducto',
    'specialties.endodoncia.feature2': 'Microscopía dental',
    'specialties.endodoncia.feature3': 'Retratamientos',
    'specialties.endodoncia.feature4': 'Diagnóstico digital',

    'specialties.periodoncia.name': 'Periodoncia',
    'specialties.periodoncia.description': 'Tratamiento especializado de encías y tejidos de soporte para mantener una base sólida',
    'specialties.periodoncia.feature1': 'Limpieza profunda',
    'specialties.periodoncia.feature2': 'Raspado y alisado radicular',
    'specialties.periodoncia.feature3': 'Injertos de encía',
    'specialties.periodoncia.feature4': 'Mantenimiento periodontal',

    'specialties.cirugia-maxilofacial.name': 'Cirugía Oral',
    'specialties.cirugia-maxilofacial.description': 'Cirugía oral y maxilofacial avanzada para tratar condiciones complejas',
    'specialties.cirugia-maxilofacial.feature1': 'Extracciones complejas',
    'specialties.cirugia-maxilofacial.feature2': 'Implantes dentales',
    'specialties.cirugia-maxilofacial.feature3': 'Cirugía de muelas del juicio',
    'specialties.cirugia-maxilofacial.feature4': 'Sedación consciente',

    'specialties.estetica-dental.name': 'Odontología Estética',
    'specialties.estetica-dental.description': 'Diseño de sonrisa y tratamientos estéticos para lograr la sonrisa perfecta que siempre has deseado',
    'specialties.estetica-dental.feature1': 'Diseño de sonrisa',
    'specialties.estetica-dental.feature2': 'Carillas de porcelana',
    'specialties.estetica-dental.feature3': 'Blanqueamiento dental',
    'specialties.estetica-dental.feature4': 'Composite estético',

    'specialties.ortodoncia.name': 'Ortodoncia',
    'specialties.ortodoncia.description': 'Corrección de alineación dental con tratamientos modernos y personalizados para todas las edades',
    'specialties.ortodoncia.feature1': 'Brackets metálicos',
    'specialties.ortodoncia.feature2': 'Brackets estéticos',
    'specialties.ortodoncia.feature3': 'Invisalign',
    'specialties.ortodoncia.feature4': 'Planificación digital',

    'specialties.odontopediatria.name': 'Odontopediatría',
    'specialties.odontopediatria.description': 'Odontología especializada para niños con un ambiente cálido y técnicas adaptadas',
    'specialties.odontopediatria.feature1': 'Primera visita dental',
    'specialties.odontopediatria.feature2': 'Limpieza infantil',
    'specialties.odontopediatria.feature3': 'Sellantes dentales',
    'specialties.odontopediatria.feature4': 'Educación dental',

    'specialties.rehabilitacion-oral.name': 'Rehabilitación Oral',
    'specialties.rehabilitacion-oral.description': 'Restauración integral de la función y estética dental mediante soluciones protésicas avanzadas',
    'specialties.rehabilitacion-oral.feature1': 'Coronas y puentes dentales',
    'specialties.rehabilitacion-oral.feature2': 'Prótesis completas y parciales',
    'specialties.rehabilitacion-oral.feature3': 'Restauración sobre implantes dentales',
    'specialties.rehabilitacion-oral.feature4': 'Reconstrucción de mordida',

    'oralRehabilitation.title': 'Rehabilitación Oral',
    'oralRehabilitation.subtitle': 'Odontología especializada en restauración oral integral con técnicas avanzadas y soluciones personalizadas.',
    'oralRehabilitation.ctaButton': 'Agendar Cita',
    'oralRehabilitation.treatmentsHeader': 'Nuestros Tratamientos',
    'oralRehabilitation.treatmentsDescription': 'Ofrecemos un completo rango de soluciones protésicas para restaurar función y estética. Desde dientes individuales hasta rehabilitación oral completa, nuestro equipo de especialistas está aquí para ayudarte a recuperar tu sonrisa y calidad de vida.',
    'oralRehabilitation.treatment1': 'Coronas y Puentes Dentales',
    'oralRehabilitation.treatment2': 'Prótesis Completas y Parciales',
    'oralRehabilitation.treatment3': 'Restauración sobre Implantes Dentales',
    'oralRehabilitation.treatment4': 'Reconstrucción de Mordida',
    'oralRehabilitation.treatment5': 'Carillas e Incrustaciones de Porcelana',
    'oralRehabilitation.treatment6': 'Prótesis de Zirconio',
    'oralRehabilitation.treatment7': 'Prótesis sobre Implantes',
    'oralRehabilitation.treatment8': 'Rehabilitación Oral Completa', 

    'implantology.title': 'Implantología Dental',
    'implantology.subtitle': 'Especializados en soluciones dentales permanentes con implantes de última generación que restauran la función y estética de forma natural.',
    'implantology.ctaButton': 'Agendar Cita',
    'implantology.treatmentsHeader': 'Nuestras Soluciones de Implantes',
    'implantology.treatmentsDescription': 'Ofrecemos tratamientos de implantes integrales desde reposición de dientes individuales hasta restauraciones completas, utilizando materiales de la más alta calidad y tecnología avanzada.',
    'implantology.treatment1': 'Implantes Dentales Unitarios',
    'implantology.treatment2': 'Implantes Dentales Múltiples',
    'implantology.treatment3': 'Implantes de Arcada Completa',
    'implantology.treatment4': 'Implantes de Carga Inmediata',
    'implantology.treatment5': 'Injertos Óseos y Regeneración',
    'implantology.treatment6': 'Elevación de Seno Maxilar',
    'implantology.treatment7': 'All-on 4® y All on 6®',
    'implantology.treatment8': 'Prótesis sobre Implantes',

    

        
    // Service Categories
    'services.general.title': 'Odontología General',
    'services.general.description': 'Cuidado integral de tu salud dental con tratamientos preventivos y curativos.',
    'services.general.fullDescription': 'Nuestros servicios de odontología general incluyen limpiezas, empastes y revisiones regulares para mantener tu salud oral.',
    'services.general.feature1': 'Limpiezas profesionales',
    'services.general.feature2': 'Empastes de resina',
    'services.general.feature3': 'Extracciones dentales',
    'services.general.feature4': 'Revisiones regulares',
    
    'services.aesthetic.title': 'Estética Dental',
    'services.aesthetic.description': 'Transforma tu sonrisa con tratamientos estéticos de última generación.',
    'services.aesthetic.fullDescription': 'Ofrecemos una amplia gama de tratamientos estéticos incluyendo blanqueamiento, carillas y diseño de sonrisa para mejorar la apariencia de tu sonrisa.',
    'services.aesthetic.feature1': 'Blanqueamiento dental',
    'services.aesthetic.feature2': 'Carillas de porcelana',
    'services.aesthetic.feature3': 'Coronas dentales',
    'services.aesthetic.feature4': 'Diseño de sonrisa',
    
    'services.endodontics.title': 'Endodoncia',
    'services.endodontics.description': 'Especialistas en tratamientos de conducto para salvar tus dientes naturales.',
    'services.endodontics.fullDescription': 'Especialistas en tratamientos de conducto utilizando técnicas avanzadas para salvar tus dientes naturales y aliviar el dolor.',
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

    'services.rehabilitacionoral.title': 'Rehabilitacion oral',
    'services.rehabilitacionoral.description': 'Es una especialidad odontológica enfocada en restaurar la función, estética y salud bucal de pacientes que han perdido dientes o tienen problemas de mordida.',
    'services.rehabilitacionoral.feature1': 'Implantes dentales',
    'services.rehabilitacionoral.feature2': 'Coronas',
    'services.rehabilitacionoral.feature3': 'Puentes',
    'services.rehabilitacionoral.feature4': 'Carillas',
    'branches.ourDoctors': 'Nuestros Doctores',


    // Doctors
    'Periodoncia.tt': 'Periodoncia',


    


  


  

    

    
    
    // Blog
    'blog.title': 'Blog Dental',
    'blog.subtitle': 'Información actualizada sobre salud dental y tratamientos',
    'blog.featured': 'Destacado',
    'blog.readMore': 'Leer Más',
    'blog.viewAll': 'Ver Todos los Artículos',
    'blog.cta.title': '¿Necesitas una Consulta Dental?',
    'blog.cta.description': 'Contáctanos hoy para agendar tu cita y comenzar tu camino hacia una sonrisa perfecta.',
    'blog.cta.button': 'Agendar Consulta',
    
    // Blog Posts
    'blog.post1.title': 'Blanqueamiento Dental en Chapala y Guadalajara: Guía Completa',
    'blog.post1.excerpt': 'Descubre todo sobre el blanqueamiento dental profesional, tipos de tratamientos, beneficios y por qué elegir nuestra clínica dental.',
    'blog.post1.content': 'El blanqueamiento dental profesional se ha convertido en uno de los tratamientos más solicitados en nuestras clínicas dentales de Chapala y Guadalajara. En Moleet Dental Unit, ofrecemos diferentes técnicas de blanqueamiento adaptadas a las necesidades de cada paciente.',
    'blog.post1.author': 'Dra. María González',
    'blog.post1.date': '15 de Enero, 2024',
    'blog.post1.readTime': '5 min de lectura',
    'blog.post1.category': 'Estética Dental',
    
    'blog.post2.title': 'Implantes Dentales en Guadalajara: Precios y Proceso Completo',
    'blog.post2.excerpt': 'Conoce sobre el tratamiento de implantes dentales, proceso de recuperación, costos y beneficios de elegir nuestra clínica en Guadalajara.',
    'blog.post2.content': 'Los implantes dentales representan la mejor solución para reemplazar dientes perdidos. En nuestra clínica de Guadalajara, utilizamos la tecnología más avanzada para garantizar resultados exitosos y duraderos.',
    'blog.post2.author': 'Dra. Ana Martínez',
    'blog.post2.date': '8 de Enero, 2024',
    'blog.post2.readTime': '7 min de lectura',
    'blog.post2.category': 'Implantología',
    
    'blog.post3.title': 'Ortodoncia Invisible en Chapala: La Solución Moderna',
    'blog.post3.excerpt': 'Descubre las ventajas de la ortodoncia invisible y cómo puede transformar tu sonrisa sin afectar tu vida diaria.',
    'blog.post3.content': 'La ortodoncia invisible ha revolucionado el tratamiento dental. En nuestra clínica de Chapala, ofrecemos esta solución innovadora para pacientes que buscan discreción y comodidad.',
    'blog.post3.author': 'Dr. Carlos López',
    'blog.post3.date': '2 de Enero, 2024',
    'blog.post3.readTime': '6 min de lectura',
    'blog.post3.category': 'Ortodoncia',


    // Doctors section
    'doctors.title': 'Nuestros Especialistas',
    'doctors.subtitle': 'Conoce a nuestro equipo de especialistas altamente calificados, comprometidos con tu salud bucal',
    'doctors.filter.all': 'Todos',
    'doctors.filter.general': 'Odontología General',
    'doctors.filter.endodontics': 'Endodoncia',
    'doctors.filter.periodontics': 'Periodoncia',
    'doctors.filter.surgery': 'Cirugía Oral',
    'doctors.filter.aesthetics': 'Odontología Estética',
    'doctors.filter.orthodontics': 'Ortodoncia',
    'doctors.filter.pediatrics': 'Odontopediatría',
    'doctors.filter.rehabilitation': 'Rehabilitación Oral',
    'doctors.experience': 'años',
    'doctors.education': 'Formación',
    'doctors.certifications': 'Certificaciones',
    'doctors.languages': 'Idiomas',
    'doctors.schedule': 'Experiencia',
    'doctors.cta.title': '¿No sabes qué especialista necesitas?',
    'doctors.cta.description': 'Agenda una consulta general y te ayudaremos a determinar el tratamiento ideal para ti.',
    'doctors.cta.button': 'Consulta General',
    
    // Blog SEO
    'blog.seo.title': 'Blog Dental - Moleet Dental Unit | Información y Consejos',
    'blog.seo.description': 'Blog dental con información actualizada sobre tratamientos, salud oral, implantes dentales, blanqueamiento y ortodoncia en Guadalajara y Chapala.',
    'blog.seo.keywords': 'blog dental, salud oral, tratamientos dentales, dentista Guadalajara, dentista Chapala, información dental',
    'blog.share': 'Compartir Artículo',
    'blog.author.bio': 'Especialista dental en Moleet Dental Unit',
    
    // Videos
   
    'videos.seo.title': 'Videos Dentales - Moleet Dental Unit | Procedimientos e Instalaciones',
    'videos.seo.description': 'Mira videos de nuestros procedimientos dentales, instalaciones modernas y testimonios de pacientes en Guadalajara y Chapala.',
    'videos.seo.keywords': 'videos dentales, procedimientos dentales, clínica dental Guadalajara, clínica dental Chapala, testimonios pacientes',
    
    'videos.categories.all': 'Todos los Videos',
    'videos.categories.aesthetic': 'Estética Dental',
    'videos.categories.surgery': 'Cirugía Dental',
    'videos.categories.technology': 'Tecnología',
    'videos.categories.testimonials': 'Testimonios',
    'videos.categories.facilities': 'Nuestras Instalaciones',
    
    'videos.blanqueamiento.title': 'Blanqueamiento Dental Profesional',
    'videos.blanqueamiento.description': 'Descubre nuestro procedimiento de blanqueamiento dental profesional y logra una sonrisa más brillante.',
    'videos.implantes.title': 'Procedimiento de Implantes Dentales',
    'videos.implantes.description': 'Conoce nuestros avanzados procedimientos de implantes dentales con tecnología de vanguardia.',
    'videos.tecnologia.title': 'Tecnología Dental Avanzada',
    'videos.tecnologia.description': 'Recorre nuestras modernas instalaciones y equipos dentales de última generación.',
    'videos.testimonios.title': 'Testimonios de Pacientes',
    'videos.testimonios.description': 'Historias reales de pacientes satisfechos que transformaron su sonrisa con nosotros.',
   
    
    'videos.cta.title': '¿Listo para Comenzar tu Viaje Dental?',
    'videos.cta.description': 'Contáctanos hoy para agendar tu cita y experimentar nuestro cuidado profesional.',
    'videos.cta.button': 'Agendar Cita',
    
    // Transport
    'transport.title': 'Servicio de Transporte al Aeropuerto',
    'transport.subtitle': 'Transporte cómodo y confiable desde/hacia el aeropuerto',
    'transport.description': 'Turismo dental es una tendencia en la que las personas viajan a destinos turísticos para recibir tratamientos odontológicos de alta calidad a precios accesibles, combinando el cuidado de su salud bucal con una experiencia de descanso y recreación. El objetivo es una alternativa conveniente y atractiva para pacientes, especialmente extranjeros, que buscan atención especializada mientras disfrutan de su estancia en un lugar con encanto, como Chapala.',
    'transport.features.title': 'Lo que Ofrecemos',
    'transport.features.comfortable': 'Vehículos cómodos',
    'transport.features.punctual': 'Servicio puntual',
    'transport.features.professional': 'Conductores profesionales',
    'transport.features.safe': 'Seguro y confiable',
    'transport.booking.title': 'Reserva tu Transporte',
    'transport.booking.description': 'Contáctanos para coordinar tu recogida',
    'transport.routes.title': 'Rutas Disponibles',
    'transport.routes.subtitle': 'Transporte cómodo para hacer tu visita perfecta',
    'transport.pickup.title': 'Recogida en Aeropuerto',
    'transport.pickup.description': 'Te recogemos directamente en el aeropuerto',
    'transport.comfort.title': 'Vehículos Cómodos',
    'transport.comfort.description': 'Vehículos modernos y climatizados para tu comodidad',
    'transport.hotel.title': 'Traslado a Hotel',
    'transport.hotel.description': 'Traslado directo a tu hospedaje',

    // language
    'language.1' : 'Colaboración estratégica',
    'language.2': 'Sucursal Chapala de la mano con Red Dentalia',
    'language.3': 'Nos enorgullece formar parte de la red de clínicas asociadas a Dentalia, la cadena de servicios dentales más grande de México. Esta alianza nos permite ofrecerte lo mejor de ambos mundos: la calidez y atención personalizada de una clínica local con los estándares de calidad, tecnología y respaldo de la red dental más importante del país.',
    'language.4': 'Tecnología avanzada',
    'language.5': 'Acceso a equipos de última generación',
    'language.6': 'Protocolos certificados',
    'language.7': 'Seguimiento de estándares internacionales',
    'language.8': 'Garantía de calidad',
    'language.9': 'Respaldados por la red más grande de México',
    
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
    
    // Specialties
    'specialties.general.title': 'Odontología General',
    'specialties.endodontics.title': 'Endodoncia',
    'specialties.periodontics.title': 'Periodoncia',
    'specialties.oral_surgery.title': 'Cirugía Maxilofacial',
    'specialties.cosmetic.title': 'Estética Dental',
    'specialties.orthodontics.title': 'Ortodoncia',
    'specialties.pediatric.title': 'Odontopediatría',
    


    // MisionyVision
    "missionVision.title": "Nuestro Propósito",
    "missionVision.subtitle": "Lo que nos impulsa cada día",
    "missionVision.mission.title": "Misión",
    "missionVision.mission.subtitle": "Nuestro Compromiso",
    "missionVision.mission.problem": "Encontrar atención dental de calidad con un toque personal puede ser un desafío.",
    "missionVision.mission.solution": "En Moleet Medical Unit, nos dedicamos a transformar sonrisas con profesionalismo y pasión. Brindamos atención odontológica de alta calidad en Zapopan/Chapala, Jalisco, acercando a nuestros pacientes a un equipo de especialistas altamente capacitados en cada área de la odontología.",
    "missionVision.vision.title": "Visión",
    "missionVision.vision.subtitle": "Nuestra Aspiración",
    "missionVision.vision.problem": "Las clínicas dentales a menudo carecen de la combinación de excelencia, comodidad y atención personalizada.",
    "missionVision.vision.solution": "Ser las clínicas de odontológica de mayor prestigio en Zapopan y Chapala, reconocida por nuestra excelencia en atención, calidad en los tratamientos y un equipo de especialistas comprometidos con la salud y bienestar de nuestros pacientes.",
    'historia': 'Comenzó en 2008 en Zapopan Jalisco al reunirnos amigos dentistas que nos conocimos en la carrera de odontología y decidimos poner una clínica dental. El objetivo era hacer lo que más nos gustaba, ayudar a la gente con los problemas dentales, pero al mismo tiempo trabajar en un equipo de odontólogos capaces de resolver los desafíos de la profesión en distintas especialidades dentales. Después de 17 años nos extendermos a Chapala, para seguir ayudando a la gente a sonreír con ganas.',
    'historia.title': 'Historia de Moleet Dental Unit',
    'about.brandDescription': 'Moleet Dental Unit son clínicas odontológicas y consultorios dentales multi especialidad para pacientes de todas las edades y diagnósticos, ubicados en la zona de Chapala, Jalisco',
    'brand.values.title': 'Esencial de marca (valores)',
    'brand.values.profesionalidad.title': 'PROFESIONALIDAD',
    'brand.values.profesionalidad.description': 'Porque cada paciente merece ser atendido con experiencia, ética y compromiso.',
    'brand.values.calidad.title': 'CALIDAD',
    'brand.values.calidad.description': 'Trabajamos con los mejores materiales, técnicas y especialistas.',
    'brand.values.honestidad.title': 'HONESTIDAD',
    'brand.values.honestidad.description': 'La confianza se construye con diagnósticos claros y tratamientos justos.',
    'brand.values.pasion.title': 'PASIÓN',
    'brand.values.pasion.description': 'Porque amamos lo que hacemos y eso se nota en cada sonrisa que transformamos.',



    'branches.contactInfo': 'Información de Contacto',
    

    // Footer
    'footer.contact': 'Contacto',
    'footer.hours': 'Horarios',
    'footer.services': 'Servicios',
    'footer.followUs': 'Síguenos',
    'context.footer.text': 'Comprometidos con tu salud oral, ofrecemos servicios dentales de calidad con tecnología avanzada y un equipo de especialistas altamente calificados.',

     // Espacialidades
    'odontologia.general.name': 'Odontología General',
    'odontologia.general.description': 'Atención integral de salud dental con tratamientos preventivos y curativos de la más alta calidad',
    'odontologia.general.feature1': 'Limpiezas profesionales',
    'odontologia.general.feature2': 'Empastes de resina',
    'odontologia.general.feature3': 'Revisiones periódicas',
    'odontologia.general.feature4': 'Radiografías digitales',
    'odontologia.general.feature5': 'Tratamientos de urgencia',
    'endodoncia.name': 'Endodoncia',
    'endodoncia.nameEn': 'Endodoncia', // Opcional: para consistencia en español
    'endodoncia.description': 'Tratamientos de conducto especializados para salvar tus dientes naturales con técnicas avanzadas y mínimas molestias.',
    'endodoncia.feature1': 'Tratamientos de Conducto',
    'endodoncia.feature2': 'Microscopía Dental',
    'endodoncia.feature3': 'Retratamientos',
    'endodoncia.feature4': 'Pulpotomías',
    'endodoncia.feature5': 'Apicectomías',
    'endodoncia.feature6': 'Blanqueamiento Interno',
    'endodoncia.feature7': 'Urgencias Dentales',
    'endodoncia.feature8': 'Diagnóstico Digital',

    'periodoncia.name': 'Periodoncia',
    'periodoncia.description': 'Tratamiento especializado de encías y tejidos de soporte dental para mantener una base sólida para tus dientes.',
    'periodoncia.feature1': 'Limpieza Profunda',
    'periodoncia.feature2': 'Raspado y Alisado',
    'periodoncia.feature3': 'Cirugía Periodontal',
    'periodoncia.feature4': 'Injertos de Encía',
    'periodoncia.feature5': 'Regeneración Tisular',
    'periodoncia.feature6': 'Mantenimiento Periodontal',
    'periodoncia.feature7': 'Tratamiento de Gingivitis',
    'periodoncia.feature8': 'Control de Placa',

    'cirugia_maxilofacial.name': 'Cirugía Maxilofacial',
    'cirugia_maxilofacial.description': 'Cirugía oral y maxilofacial avanzada para tratar condiciones complejas de boca, cara y mandíbulas.',
    'cirugia_maxilofacial.feature1': 'Extracciones Complejas',
    'cirugia_maxilofacial.feature2': 'Cirugía de Muelas del Juicio',
    'cirugia_maxilofacial.feature3': 'Implantes Dentales',
    'cirugia_maxilofacial.feature4': 'Cirugía Pre-protésica',
    'cirugia_maxilofacial.feature5': 'Quistes y Tumores',
    'cirugia_maxilofacial.feature6': 'Trauma Facial',
    'cirugia_maxilofacial.feature7': 'Cirugía Ortognática',
    'cirugia_maxilofacial.feature8': 'Sedación Consciente',

    // Estética Dental
    'estetica_dental.name': 'Estética Dental',
    'estetica_dental.description': 'Diseño de sonrisa y tratamientos estéticos para lograr la sonrisa perfecta que siempre has deseado.',
    'estetica_dental.feature1': 'Diseño de Sonrisa',
    'estetica_dental.feature2': 'Carillas de Porcelana',
    'estetica_dental.feature3': 'Blanqueamiento Dental',
    'estetica_dental.feature4': 'Incrustaciones Estéticas',
    'estetica_dental.feature5': 'Coronas de Porcelana',
    'estetica_dental.feature6': 'Remodelado Dental',
    'estetica_dental.feature7': 'Composite Estético',
    'estetica_dental.feature8': 'Armonización Facial',

    // Ortodoncia
    'ortodoncia.name': 'Ortodoncia',
    'ortodoncia.description': 'Corrección de la alineación dental con tratamientos modernos y personalizados para todas las edades.',
    'ortodoncia.feature1': 'Brackets Metálicos',
    'ortodoncia.feature2': 'Brackets Estéticos',
    'ortodoncia.feature3': 'Ortodoncia Invisible',
    'ortodoncia.feature4': 'Invisalign',
    'ortodoncia.feature5': 'Aparatos Removibles',
    'ortodoncia.feature6': 'Retención Post-tratamiento',
    'ortodoncia.feature7': 'Ortodoncia Infantil',
    'ortodoncia.feature8': 'Planificación Digital',

    // Odontopediatría
    'odontopediatria.name': 'Odontopediatría',
    'odontopediatria.description': 'Odontología especializada para niños con un ambiente cálido y técnicas adaptadas para los más pequeños.',
    'odontopediatria.feature1': 'Primera Consulta Dental',
    'odontopediatria.feature2': 'Limpieza Infantil',
    'odontopediatria.feature3': 'Selladores de Fosas',
    'odontopediatria.feature4': 'Empastes Pediátricos',
    'odontopediatria.feature5': 'Pulpotomías',
    'odontopediatria.feature6': 'Coronas Infantiles',
    'odontopediatria.feature7': 'Educación Dental',
    'odontopediatria.feature8': 'Prevención de Caries',

    'ours.tratamients': 'Nuestros Tratamientos',
    'ours.tratamients.description': 'Ofrecemos una amplia gama de tratamientos dentales para satisfacer todas tus necesidades. Desde odontología general hasta tratamientos especializados, nuestro equipo de expertos está aquí para ayudarte a lograr la sonrisa que mereces.',

    // Sucursal
    'sucursal': '¿No sabes cuál sucursal elegir?',
    'contactanos': 'Contáctanos y te ayudaremos a elegir la ubicación más conveniente para ti.',
    
   
    

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