import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Gallery from '@/components/home/Gallery';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Home;