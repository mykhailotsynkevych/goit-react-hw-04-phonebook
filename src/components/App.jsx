import React from 'react';

import Form from './Form/Form';
import Filtr from './Filtr/Filtr';
import ContactsList from './ContactsList/ContactsList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert("This name is already as contact")
    }
      
    this.setState(prevState =>
      ({ contacts: [...prevState.contacts, data] }));
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFiltr = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normalizedFiltr)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filtr value={this.filter} onChange={this.changeFilter} />
        <ContactsList contactsList={visibleContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
