import axios from 'axios';

const contactsIstance = axios.create({
  baseURL: 'https://640f77864ed25579dc4fb941.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsIstance.get('/');
  return data;
};

export const addContact = async data => {
  console.log(data);
  const { data: result } = await contactsIstance.post('/', data);
  console.log(result);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsIstance.delete(`/${id}`);
  // console.log(data);

  return data;
};
