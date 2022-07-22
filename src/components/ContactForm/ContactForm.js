import React from "react";
import contactFormSryles from "./ContactForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/operation";
import { getIsAdded } from "../../redux/selectors";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName("");
    setNumber("");
  };

  return (
    <form className={contactFormSryles.form}  onSubmit={handleSubmit}>
      <label className={contactFormSryles.labelForm}>
        Name
        <input
          className={contactFormSryles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={contactFormSryles.labelForm}>
        Number
        <input
          className={contactFormSryles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button className="button-form" type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
