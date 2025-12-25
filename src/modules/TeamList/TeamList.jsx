import './TeamList.scss';
import classNames from 'classnames';
import TeamCard from '@/components/TeamCard';

const TeamList = ({ className, cards }) => {
  return (
    <div className={classNames('team-list', className)}>
      {cards.map(({ id, image, title, text }) => (
        <TeamCard image={image} title={title} text={text} key={id} />
      ))}
    </div>
  );
};

export default TeamList;
