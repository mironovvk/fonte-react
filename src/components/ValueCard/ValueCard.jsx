import './ValueCard.scss';

const ValueCard = ({ title, text, image }) => {
  return (
    <div className="value-card">
      <div className="value-card__content">
        <img
          src={image}
          class="value-card__image"
          alt={title}
        />
        <div className='value-card__inner'>
          <h3 className="value-card__title">{title}</h3>
          <p className="value-card__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
