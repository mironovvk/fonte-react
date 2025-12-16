import './SliderPagination.scss'
import classNames from 'classnames';

const SliderPagination = ({count, activeIndex, onChange, className}) => {
  return (
    <div className={classNames('slider-pagination', className)}>
      {Array.from({length: count}).map((_, index) => (
        <button
          key={index}
          type="button"
          className={classNames('slider-pagination__dot', {
            'is-active': index === activeIndex,
          })}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default SliderPagination