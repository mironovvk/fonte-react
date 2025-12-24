import './ValueCard.scss';

const ValueCard = ({ title, text, image }) => {
  return (
    <article className="team-card">
      <div className="team-card__content">
        <img
          src={image}
          class="team-card__image"
          alt={title}
        />
        <div className='team-card__inner'>
          <h3 className="team-card__title">{title}</h3>
          <p className="team-card__text">{text}</p>
        </div>
      </div>
    </article>
  );
};

export default ValueCard;
