import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import {
  getAllContacts,
  getFilterContact,
} from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import css from './phone-book.module.css';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilterContact);
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      return alert(`This contact ${name} or ${number} is already in contacts`);
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const isDublicate = (name, number) => {
    const normalizedName = name.toLocaleLowerCase();
    const normalizedNumber = number.toLocaleLowerCase();
    const findContact = allContacts.find(({ name, number }) => {
      return (
        name.toLocaleLowerCase() === normalizedName ||
        number.toLocaleLowerCase() === normalizedNumber
      );
    });
    return Boolean(findContact);
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
