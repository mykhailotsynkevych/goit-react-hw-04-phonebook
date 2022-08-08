import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsEl from './ContactsEl'

const ContactsList = ({ contactsList, onDeleteContact}) => {
  return (
    <div className={s.wrap}>
      <ul className={s.list} >
        {contactsList.map(contactEl => (
            <ContactsEl
            key={contactEl.id}
            id={contactEl.id}
            name={contactEl.name}
            number={contactEl.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
