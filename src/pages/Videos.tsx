import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/common/SEOHead';

const Videos = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      titleKey: 'videos.tour.title',
      descriptionKey: 'videos.tour.description',
      thumbnail: 'lovable-uploads/instalations.png',
      src: '/lovable-uploads/tour-virtual.mp4',
      category: 'facilities'
    },
    {
      id: 2,
      titleKey: 'videos.blanqueamiento.title',
      descriptionKey: 'videos.blanqueamiento.description',
      thumbnail: 'https://images.pexels.com/photos/6812499/pexels-photo-6812499.jpeg',
      src: '/lovable-uploads/blanqueamiento.mp4',
      category: 'aesthetic'
    },
    {
      id: 3,
      titleKey: 'videos.implantes.title',
      descriptionKey: 'videos.implantes.description',
      thumbnail: 'https://images.pexels.com/photos/6529111/pexels-photo-6529111.jpeg',
      src: '/lovable-uploads/implantes.mp4',
      category: 'surgery'
    },
    {
      id: 4,
      titleKey: 'videos.tecnologia.title',
      descriptionKey: 'videos.tecnologia.description',
      thumbnail: 'https://images.pexels.com/photos/4971514/pexels-photo-4971514.jpeg',
      src: '/lovable-uploads/tecnologia.mp4',
      category: 'technology'
    },
    {
      id: 5,
      titleKey: 'videos.testimonios.title',
      descriptionKey: 'videos.testimonios.description',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      src: '/lovable-uploads/testimonios.mp4',
      category: 'testimonials'
    },
    {
      id: 5,
      titleKey: 'videos.tour.title',
      descriptionKey: 'videos.tour.description',
      thumbnail: 'lovable-uploads/instalations.png',
      src: '/lovable-uploads/tour-virtual.mp4',
      category: 'facilities'
    }
  ];

  const categories = [
    { key: 'all', labelKey: 'videos.categories.all' },
    { key: 'aesthetic', labelKey: 'videos.categories.aesthetic' },
    { key: 'surgery', labelKey: 'videos.categories.surgery' },
    { key: 'technology', labelKey: 'videos.categories.technology' },
    { key: 'testimonials', labelKey: 'videos.categories.testimonials' },
    { key: 'facilities', labelKey: 'videos.categories.facilities' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <>
      <SEOHead 
        title={t('videos.seo.title')}
        description={t('videos.seo.description')}
        keywords={t('videos.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gradient-subtle pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
              {t('videos.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('videos.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-full ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-primary to-dental-blue text-white'
                    : 'hover:bg-primary/10'
                }`}
              >
                {t(category.labelKey)}
              </Button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm rounded-3xl"
                onClick={() => setSelectedVideo(video.src)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    poster={video.thumbnail}
                    muted
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary fill-current" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-dental-blue transition-colors">
                    {t(video.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(video.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white max-w-4xl mx-auto rounded-3xl border-0 shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-display font-bold mb-6">{t('videos.cta.title')}</h3>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  {t('videos.cta.description')}
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl shadow-lg"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('videos.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {selectedVideo && (
                <video
                  className="w-full aspect-video"
                  controls
                  autoPlay
                >
                  <source src={selectedVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Videos;