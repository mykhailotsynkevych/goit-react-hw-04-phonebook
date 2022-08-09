import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

let initialForm = {
  name: '',
  number: '',
  id: '',
};

export default function Form({ addContact }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      ...form,
      id: nanoid(),
    };
    addContact(formData);
    setForm({ name: '', number: '', id: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.form}>
          <span> Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className={s.form}>
          <span> Number </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={form.number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
