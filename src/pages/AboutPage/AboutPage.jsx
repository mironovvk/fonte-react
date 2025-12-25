import './AboutPage.scss';
import ValueList from '@/modules/ValueList';
import AboutSection from '@/modules/AboutSection';
import { valueMock } from '@/mocks/value.mock.js';
import Section from '@/components/Section';

const AboutPage = () => {
  return (
    <>
      <AboutSection />
      <Section title="Наши ценности">
        <ValueList cards={valueMock} />
      </Section>
    </>
  );
};

export default AboutPage;
