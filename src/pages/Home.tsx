import Hero from '@/components/home/Hero';
import BranchesSection from '@/components/home/BranchesSection';
import Services from '@/components/home/Services';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import VideoCarousel from '@/components/home/VideoCarousel';

const Home = () => {
  return (
    <main>
      <Hero />
      <BranchesSection />
      <Services />
      <TestimonialsCarousel />
      <VideoCarousel />
    </main>
  );
};

export default Home;