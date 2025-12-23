import './ContactsList.scss';
import classNames from 'classnames';

const ContactsList = ({ className, cards = [] }) => {
  return (
    <ul className={classNames('contacts-list', className)}>
      {cards.map(({ id, label, value }) => (
        <li className="contacts-list__item" key={id}>
          <h2 className="contacts-list__title">{label}</h2>
          <p className="contacts-list__value" dangerouslySetInnerHTML={{ __html: value }} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
