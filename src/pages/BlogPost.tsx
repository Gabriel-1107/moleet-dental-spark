import { useParams, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/common/SEOHead';

const BlogPost = () => {
  const { slug } = useParams();
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

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t(post.titleKey),
        text: t(post.excerptKey),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <SEOHead 
        title={`${t(post.titleKey)} - Moleet Dental Unit`}
        description={t(post.excerptKey)}
        keywords={`${t(post.categoryKey)}, dentista, Guadalajara, Chapala`}
      />
      
      <div className="min-h-screen bg-gradient-subtle pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-8 hover:bg-primary/10 rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('common.back')}
          </Button>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 rounded-full">
                {t(post.categoryKey)}
              </Badge>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                {t(post.titleKey)}
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t(post.authorKey)}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t(post.dateKey)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {t(post.readTimeKey)}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="rounded-full"
              >
                <Share2 className="h-4 w-4 mr-2" />
                {t('blog.share')}
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={post.image}
                alt={t(post.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="text-lg leading-relaxed text-muted-foreground">
                    {t(post.contentKey)}
                  </div>
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-dental-blue rounded-full flex items-center justify-center text-white font-bold">
                        {t(post.authorKey).charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{t(post.authorKey)}</p>
                        <p className="text-sm text-muted-foreground">{t('blog.author.bio')}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleShare}
                      className="rounded-full"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      {t('blog.share')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-16">
              <Card className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white rounded-3xl border-0 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <h3 className="text-3xl font-display font-bold mb-6">{t('blog.cta.title')}</h3>
                  <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                    {t('blog.cta.description')}
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl shadow-lg"
                    onClick={() => window.location.href = '/#contacto'}
                  >
                    {t('blog.cta.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;