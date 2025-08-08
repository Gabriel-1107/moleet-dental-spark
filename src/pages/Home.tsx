import Hero from '@/components/home/Hero';
import BranchesSection from '@/components/home/BranchesSection';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import VideoCarousel from '@/components/home/VideoCarousel';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import SEOHead from '@/components/common/SEOHead';
import ContactForm from '@/components/home/ContactForm';

const Home = () => {
  return (
    <>
      <SEOHead />
      <main>
        <Hero />
        <BranchesSection />
        <Services />
        <VideoCarousel />
        <TestimonialsCarousel />
        <BlogSection />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;