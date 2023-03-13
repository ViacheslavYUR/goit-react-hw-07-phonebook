export const getAllContacts = store => store.contacts;

export const getFilterContact = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLocaleLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return (
      name.toLocaleLowerCase().includes(normalizedFilter) ||
      number.toLocaleLowerCase().includes(normalizedFilter)
    );
  });
  return result;
};
