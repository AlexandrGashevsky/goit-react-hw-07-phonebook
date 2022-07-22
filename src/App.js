import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operation";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import appStyles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={appStyles.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={appStyles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
