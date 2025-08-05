import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/lovable-uploads/c806f455-7ab9-4e65-9742-bd63755e4558.png',
  url,
  type = 'website'
}: SEOHeadProps) => {
  const { t, language } = useLanguage();
  
  const siteName = 'Moleet Dental Unit';
  const defaultTitle = t('seo.home.title');
  const defaultDescription = t('seo.home.description');
  const defaultKeywords = t('seo.home.keywords');
  
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalUrl = url || 'https://dentalmoleet.com';
  const finalImage = image.startsWith('http') ? image : `https://dentalmoleet.com${image}`;

  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic SEO */}
        <title>{fullTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <meta name="author" content="Moleet Dental Unit" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language} />
        <link rel="canonical" href={finalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:image" content={finalImage} />
        <meta property="og:url" content={finalUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={language === 'es' ? 'es_MX' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={finalDescription} />
        <meta name="twitter:image" content={finalImage} />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DentalClinic",
            "name": siteName,
            "description": finalDescription,
            "url": finalUrl,
            "logo": finalImage,
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. López Mateos Sur 2077",
                "addressLocality": "Guadalajara",
                "addressRegion": "Jalisco",
                "postalCode": "44140",
                "addressCountry": "MX"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. Madero 232",
                "addressLocality": "Chapala",
                "addressRegion": "Jalisco",
                "postalCode": "45900",
                "addressCountry": "MX"
              }
            ],
            "telephone": ["+52 33 2631 2137", "+52 33 2797 1426"],
            "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],
            "priceRange": "$$",
            "medicalSpecialty": ["Dentistry", "Orthodontics", "Endodontics", "Periodontics", "Oral Surgery"]
          })}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEOHead;