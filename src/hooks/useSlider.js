import { useState } from 'react';

const useSlider = (items = []) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentItem = items[currentSlide] ?? {};

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return {
    currentSlide,
    setCurrentSlide,
    handlePrev,
    handleNext,
    ...currentItem,
  };
};

export default useSlider;
