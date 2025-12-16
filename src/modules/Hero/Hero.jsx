import './Hero.scss';
import { useState } from 'react';
import { heroMock } from '@/mocks/hero.mock.js';
import SliderButton from '@/ui/SliderButton';
import Button from '@/ui/Button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { image, title, text } = heroMock[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroMock.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroMock.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero__inner container">
        <div className="hero__actions">
          <SliderButton onClick={handlePrev} />
          <SliderButton directionRight onClick={handleNext} />
        </div>

        <div className="hero__content">
          <h3 className="hero__title">{title}</h3>
          <p className="hero__text">{text}</p>
          <Button className="hero__content-button" title="Подробнее" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
