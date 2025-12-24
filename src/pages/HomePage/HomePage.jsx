import './HomePage.scss';
import Hero from '@/modules/Hero';
import BlogSection from '@/modules/BlogSection';
import TeamSection from '@/modules/TeamSection';
import ValueSection from '@/modules/ValueSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ValueSection />
      <TeamSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
