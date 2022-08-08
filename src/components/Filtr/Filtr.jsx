import PropTypes from 'prop-types';
import React from "react";
import s from './Filtr.module.css';

const Filtr = ({value, onChange}) => {
    return (
      <>
          <label className={s.filtr}>
            <span> Filtr by Name </span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={value}
            onChange={onChange}
            />
          </label>
      </>
    );
  }

Filtr.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filtr;