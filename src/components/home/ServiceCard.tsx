import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<any>;
    titleKey: string;
    descriptionKey: string;
    fullDescriptionKey: string;
    color: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-80 perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center h-full flex flex-col justify-between">
            <div>
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </div>
            <Button
              onClick={() => setIsFlipped(true)}
              className="mt-6 bg-gradient-to-r from-primary to-dental-blue text-white hover:opacity-90 rounded-2xl"
            >
              {t('services.learnMore')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 border-0 bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center h-full flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {t(service.fullDescriptionKey)}
              </p>
            </div>
            <Button
              onClick={() => window.location.href = '/servicios'}
              variant="secondary"
              className="mt-6 bg-white text-primary hover:bg-white/90 rounded-2xl"
            >
              <X className="h-4 w-4 mr-2" />
              {t('services.back')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;