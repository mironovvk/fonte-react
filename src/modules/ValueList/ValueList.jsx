import './ValueList.scss';
import classNames from 'classnames';
import ValueCard from '@/components/ValueCard';

const ValueList = ({ className, cards }) => {
  return (
    <div className={classNames('value-list', className)}>
      {cards.map(({ id, image, title, text }) => (
        <ValueCard image={image} title={title} text={text} key={id} />
      ))}
    </div>
  );
};

export default ValueList;
