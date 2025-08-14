import { useLanguage } from '@/contexts/LanguageContext';
interface MissionVisionItem {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  image: string;
  orientation?: 'left' | 'right';
}
const MissionVisionSection = () => {
  const { t } = useLanguage();
  const sections: MissionVisionItem[] = [
    {
      title: t('missionVision.mission.title'),
      subtitle: t('missionVision.mission.subtitle'),
      problem: t('missionVision.mission.problem'),
      solution: t('missionVision.mission.solution'),
      image: '/lovable-uploads/instalations.png',
      orientation: 'left'
    },
    {
      title: t('missionVision.vision.title'),
      subtitle: t('missionVision.vision.subtitle'),
      problem: t('missionVision.vision.problem'),
      solution: t('missionVision.vision.solution'),
      image: '/lovable-uploads/instalations.png',
      orientation: 'right'
    }
  ];
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('missionVision.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('missionVision.subtitle')}
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-20">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${section.orientation === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}
            >
              {/* Imagen: Reemplazamos el div por una etiqueta img */}
              <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={section.image} 
                  alt={`${section.title} image`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contenido */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
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
                      <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400">•</span>
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
    </section>
  );
};
export default MissionVisionSection;