import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-dental-navy/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-white/15"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                {t('hero.title')}
                <span className="block text-dental-accent text-4xl lg:text-6xl">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-dental-navy hover:bg-white/90 font-semibold text-lg px-8 py-4 group"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-blue-900 hover:bg-white/90 font-semibold text-lg px-8 py-4 group"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.viewServices')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-accent">15+</div>
                <div className="text-sm text-white/80">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-accent">5000+</div>
                <div className="text-sm text-white/80">{t('hero.stats.patients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dental-accent">2</div>
                <div className="text-sm text-white/80">{t('hero.stats.locations')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;