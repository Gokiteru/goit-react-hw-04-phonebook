import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      name: '',
      number: '',
    });
  };

  const { name, number } = formData;

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name </label>
      <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleFormChange}
      />
      <label className={css.formLabel}>Number </label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleFormChange}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
