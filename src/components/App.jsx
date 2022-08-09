import React from 'react';
import { useState, useEffect } from 'react';

import Form from './Form/Form';
import Filtr from './Filtr/Filtr';
import ContactsList from './ContactsList/ContactsList';


export const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);


  const addContact = (newContact) => {
        if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    )
      return alert(`${newContact.name} is already in contacts.`);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

    const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

    useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const filterTodosByPriority = () => {
    if (filter === "") return contacts;
    const normalizedFiltr = filter.toLowerCase();
    return contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normalizedFiltr)
    );
  };

    return (
      <>
        <h1>Phonebook</h1>
        <Form addContact={addContact}/>
        <h2>Contacts</h2>
        <Filtr value={filter} onChange={changeFilter} />
        <ContactsList contactsList={filterTodosByPriority()} onDeleteContact={deleteContact} />
      </>
    );
};
