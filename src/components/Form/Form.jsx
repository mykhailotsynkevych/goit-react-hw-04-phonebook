import PropTypes from 'prop-types';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const { name, number } = this.state;
    this.props.onSubmit({ name, number, id: nanoid() });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
            <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.form}>
            <span> Name </span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.button}>Add contact</button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
