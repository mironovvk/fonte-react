import './ValueSection.scss';
import ValueList from '@/modules/ValueList';
import Section from '@/components/Section';
import { valueMock } from '@/mocks/value.mock.js';

const ValueSection = () => {
  return (
    <Section className="value-section" title="Наши ценности">
      <ValueList cards={valueMock} />
    </Section>
  );
};

export default ValueSection;
