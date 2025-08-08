import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/common/SEOHead';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post1.title',
      excerptKey: 'blog.post1.excerpt',
      contentKey: 'blog.post1.content',
      authorKey: 'blog.post1.author',
      dateKey: 'blog.post1.date',
      readTimeKey: 'blog.post1.readTime',
      categoryKey: 'blog.post1.category',
      image: '/lovable-uploads/dental-blog-1.jpg',
      slug: 'blanqueamiento-dental-chapala-guadalajara',
      featured: true
    },
    {
      id: 2,
      titleKey: 'blog.post2.title',
      excerptKey: 'blog.post2.excerpt',
      contentKey: 'blog.post2.content',
      authorKey: 'blog.post2.author',
      dateKey: 'blog.post2.date',
      readTimeKey: 'blog.post2.readTime',
      categoryKey: 'blog.post2.category',
      image: '/lovable-uploads/dental-blog-2.jpg',
      slug: 'implantes-dentales-guadalajara-precio',
      featured: false
    },
    {
      id: 3,
      titleKey: 'blog.post3.title',
      excerptKey: 'blog.post3.excerpt',
      contentKey: 'blog.post3.content',
      authorKey: 'blog.post3.author',
      dateKey: 'blog.post3.date',
      readTimeKey: 'blog.post3.readTime',
      categoryKey: 'blog.post3.category',
      image: '/lovable-uploads/dental-blog-3.jpg',
      slug: 'ortodoncia-invisible-chapala',
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead 
        title={t('blog.seo.title')}
        description={t('blog.seo.description')}
        keywords={t('blog.seo.keywords')}
      />
      
      <div className="min-h-screen bg-gradient-subtle pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Card className="overflow-hidden shadow-2xl rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={t(featuredPost.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-primary to-dental-blue text-white border-0 rounded-full px-4 py-1">
                        {t('blog.featured')}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 rounded-full">
                      {t(featuredPost.categoryKey)}
                    </Badge>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
                      {t(featuredPost.titleKey)}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {t(featuredPost.excerptKey)}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {t(featuredPost.authorKey)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {t(featuredPost.dateKey)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {t(featuredPost.readTimeKey)}
                      </div>
                    </div>
                    <Button 
                      className="w-fit bg-gradient-to-r from-primary to-dental-blue text-white hover:opacity-90 rounded-2xl"
                      onClick={() => window.location.href = `/blog/${featuredPost.slug}`}
                    >
                      {t('blog.readMore')}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm rounded-3xl"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary border-0 rounded-full">
                      {t(post.categoryKey)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-dental-blue transition-colors">
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t(post.excerptKey)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t(post.dateKey)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {t(post.readTimeKey)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {t(post.authorKey)}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-dental-blue group-hover:translate-x-1 transition-all"
                    >
                      {t('blog.readMore')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white max-w-4xl mx-auto rounded-3xl border-0 shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-display font-bold mb-6">{t('blog.cta.title')}</h3>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  {t('blog.cta.description')}
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl shadow-lg"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('blog.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;