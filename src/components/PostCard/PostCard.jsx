import './PostCard.scss';
import classNames from 'classnames';
import IconArrowLink from '@/assets/icons/arrowLink.svg?react';

const PostCard = ({ className = '', theme, image, title, date, text, onSlider = false }) => {
  return (
    <article
      className={classNames('card', className, {
        'on-slider': onSlider,
      })}
    >
      <img className="card__image" src={image} alt={title} />
      {onSlider ? (
        <div className="card__content">
          <h3 className="card__title h5">{title}</h3>
          <a className="card__link" href="/">
            Подробнее <IconArrowLink />
          </a>
        </div>
      ) : (
        <div className="card__content">
          <span>{theme}</span>
          <h3 className="h4">{title}</h3>
          <span>{date}</span>
          <p className="card__text">{text}</p>
          <a className="card__link" href="/">
            Подробнее <IconArrowLink />
          </a>
        </div>
      )}
    </article>
  );
};

export default PostCard;
