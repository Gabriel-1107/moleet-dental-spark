import { useLanguage } from '@/contexts/LanguageContext';

interface ContentItem {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  image: string;
  orientation?: 'left' | 'right';
}

interface BrandValueItem {
  title: string;
  description: string;
}

const AboutClinicSection = () => {
  const { t } = useLanguage();
  
  // Historia y giro del negocio (textos exactos)
  const historyContent = {
    title:t('historia.title'),
    content: t('historia'),
    businessNature: t('about.brandDescription'),
  };

  // Valores de la marca (textos exactos)
  const values: BrandValueItem[] = [
    {
      title: t('brand.values.profesionalidad.title'),
      description: t('brand.values.profesionalidad.description'),
    },
    {
      title:  t('brand.values.calidad.title'),
      description:  t('brand.values.calidad.description'),
    },
    {
      title:  t('brand.values.honestidad.title'),
      description:  t('brand.values.honestidad.description'),
    },
    {
      title:  t('brand.values.pasion.title'),
      description:  t('brand.values.pasion.description'),
    }
  ];

  // Misión y Visión (con soporte de traducción)
  const missionVisionSections: ContentItem[] = [
    {
      title: t('missionVision.mission.title'),
      subtitle: t('missionVision.mission.subtitle'),
      problem: t('missionVision.mission.problem'),
      solution: t('missionVision.mission.solution'),
      image: '/lovable-uploads/dentistas-chapala.png',
      orientation: 'left'
    },
    {
      title: t('missionVision.vision.title'),
      subtitle: t('missionVision.vision.subtitle'),
      problem: t('missionVision.vision.problem'),
      solution: t('missionVision.vision.solution'),
      image: '/lovable-uploads/dentistas-guadalajara.png',
      orientation: 'right'
    }
  ];
  

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 space-y-20">
        {/* Sección de Historia - Textos exactos */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {historyContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-md mb-8 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-200/20 dark:bg-blue-500/10"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-blue-300/20 dark:bg-blue-600/10"></div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative z-10">
              {historyContent.content}
            </p>
            <div className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm relative z-10">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {historyContent.businessNature}
              </p>
            </div>
          </div>
        </div>
       


        {/* Sección de Misión y Visión - Con traducción */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-200/80 dark:from-blue-900/70 dark:via-gray-800/90 dark:to-blue-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-blue-300/30 dark:border-blue-600/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group"></div>
              {t('missionVision.title')}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('missionVision.subtitle')}
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-20 ">
            {missionVisionSections.map((section, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${section.orientation === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-200/80 dark:from-blue-900/70 dark:via-gray-800/90 dark:to-blue-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-blue-300/30 dark:border-blue-600/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group"></div>
                
                
                <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-xl shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={section.image} 
                    alt={`${section.title} image`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {section.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {section.problem}
                    </p>
                    
                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 text-blue-500 dark:text-blue-400">•</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
                      {section.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Valores - Textos exactos */}
        <div className="relative py-20 overflow-hidden">
          {/* Fondo con gradiente azul */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/40 via-white/20 to-blue-100/30 dark:from-blue-900/20 dark:via-gray-800/30 dark:to-blue-900/20"></div>
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-700/10"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-600/10"></div>

          {/* Contenido */}
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('brand.values.title') || "Esencial de marca (valores)"}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Círculo grande con gradiente y efecto de vidrio */}
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-200/80 dark:from-blue-900/70 dark:via-gray-800/90 dark:to-blue-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-blue-300/30 dark:border-blue-600/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                    {/* Efecto de iluminación al hacer hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-blue-400/10 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Elemento decorativo */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-blue-300/20 dark:bg-blue-600/20"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-blue-400/20 dark:bg-blue-700/20"></div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tight relative z-10">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinicSection;