import './Hero.scss';
import { useState } from 'react';
import { productsMock } from '@/mocks/product.mock.js';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { image, title, text } = productsMock[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? productsMock.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === productsMock.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${image})` }} />
      <button className="hero__button hero__button--prev" type="button" onClick={handlePrev}>
        Стрелка назад
      </button>

      <button className="hero__button hero__button--next" type="button" onClick={handleNext}>
        Стрелка вперед
      </button>
      <div className="hero__content">
        <h3 className="hero__title">{title}</h3>
        <p className="hero__text">{text}</p>
      </div>
    </section>
  );
};

export default Hero;
