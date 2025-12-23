import './HomePage.scss';
import Hero from '@/modules/Hero';
import BlogSection from '@/modules/BlogSection';
import AboutSection from '@/modules/AboutSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
