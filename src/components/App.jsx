import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem('contactList');
    const parsedContacts = JSON.parse(contactsFromLocalStorage);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
    console.log(contacts)
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };
  

  const handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (
      contactsLists.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is alredy in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
      e.name = '';
      e.number = '';
    }

    setContacts(contactsLists);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
      />
      <h2> Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts}
        handleDelete={handleDelete}
      />
    </div>
  );

}

export default App;
