import './SliderButton.scss';
import IconArrow from '@/assets/icons/slider_arrows/arrow.svg?react';
import classNames from 'classnames';

const SliderButton = ({ className }) => {
  return (
    <button className={classNames(className, 'slider-button')}>
      <IconArrow />
    </button>
  );
};

export default SliderButton;
