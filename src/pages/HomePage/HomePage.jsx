import './HomePage.scss';
import Hero from '@/modules/Hero';
import BlogSection from '@/modules/BlogSection';
import TeamSection from '@/modules/TeamSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TeamSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
