import './Hero.scss';
import { heroMock } from '@/mocks/hero.mock.js';
import SliderButton from '@/ui/SliderButton';
import Button from '@/ui/Button';
import SliderPagination from '@/ui/SliderPagination';
import useSlider from '@/hooks/useSlider.js';

const Hero = () => {
  const { currentSlide, setCurrentSlide, handlePrev, handleNext, image, title, text } =
    useSlider(heroMock);

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
        <SliderPagination
          className="hero__pagination"
          count={heroMock.length}
          activeIndex={currentSlide}
          onChange={setCurrentSlide}
        />
      </div>
    </section>
  );
};

export default Hero;
