import './SliderButton.scss';
import IconArrow from '@/assets/icons/slider_arrows/arrow.svg?react';
import classNames from 'classnames';

const SliderButton = ({ className, directionRight = false, ...props }) => {
  return (
    <button
      className={classNames(className, 'slider-button', {
        'direction-right': directionRight,
      })}
      {...props}
    >
      <IconArrow />
    </button>
  );
};

export default SliderButton;
