import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogSection = () => {
  const { t } = useLanguage();

  // const blogPosts = [
  //   {
  //     titleKey: 'blog.post1.title',
  //     excerptKey: 'blog.post1.excerpt',
  //     dateKey: 'blog.post1.date',
  //     authorKey: 'blog.post1.author',
  //     image: '/lovable-uploads/dental-blog-1.jpg',
  //     slug: 'importancia-higiene-dental-diaria'
  //   },
  //   {
  //     titleKey: 'blog.post2.title',
  //     excerptKey: 'blog.post2.excerpt',
  //     dateKey: 'blog.post2.date',
  //     authorKey: 'blog.post2.author',
  //     image: '/lovable-uploads/dental-blog-2.jpg',
  //     slug: 'blanqueamiento-dental-chapala-guadalajara'
  //   },
  //   {
  //     titleKey: 'blog.post3.title',
  //     excerptKey: 'blog.post3.excerpt',
  //     dateKey: 'blog.post3.date',
  //     authorKey: 'blog.post3.author',
  //     image: '/lovable-uploads/dental-blog-3.jpg',
  //     slug: 'ortodoncia-invisible-moleet-dental'
  //   }
  // ];

  return (
    <section className="py-20 bg-background">
      {/* <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-dental-blue/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{t(post.dateKey)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{t(post.authorKey)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-display font-bold text-primary group-hover:text-dental-blue transition-colors">
                  {t(post.titleKey)}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t(post.excerptKey)}
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-2xl transition-all duration-300"
                >
                  {t('blog.readMore')}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white rounded-2xl px-8 py-4"
          >
            {t('blog.viewAll')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div> */}
    </section>
  );
};

export default BlogSection;