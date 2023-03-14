import React from 'react';
import PropTypes from 'prop-types';

import css from './contactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        <p className={css.contact}>
          {name}: {phone}
        </p>
        <button className={css.btn} type="button" onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
