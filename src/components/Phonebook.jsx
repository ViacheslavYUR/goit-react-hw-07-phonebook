import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilterContact } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import css from './phone-book.module.css';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilterContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, phone }) => {
    // console.log({name, phone}); - тут отримую об'єкт
    dispatch(fetchAddContact({ name, phone }));
  };

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilter} value={filter} />
      <ContactList removeContact={removeContact} contacts={filteredContacts} />
    </div>
  );
};
export default Phonebook;
