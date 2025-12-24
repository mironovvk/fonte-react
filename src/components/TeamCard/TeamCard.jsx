import './TeamCard.scss';

const TeamCard = ({ title, text, image }) => {
  return (
    <article className="team-card">
      <div className="team-card__content">
        <img
          src={image}
          class="team-card__image"
          alt={title}
        />
        <h3 className="team-card__title">{title}</h3>
        <p className="team-card__text">{text}</p>
      </div>
    </article>
  );
};

export default TeamCard;
