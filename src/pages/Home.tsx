import Hero from '@/components/home/Hero';
import BranchesSection from '@/components/home/BranchesSection';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import VideoCarousel from '@/components/home/VideoCarousel';
import SEOHead from '@/components/common/SEOHead';

const Home = () => {
  return (
    <>
      <SEOHead />
      <main>
        <Hero />
        <BranchesSection />
        <Services />
        <BlogSection />
        <TestimonialsCarousel />
        <VideoCarousel />
      </main>
    </>
  );
};

export default Home;