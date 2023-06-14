import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const ContactsEl = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.discription}>{name}</p>
      <p className={s.discription}>{number}</p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsEl;
