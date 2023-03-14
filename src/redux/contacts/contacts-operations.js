import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/services/contacts';

export const fetchAllContacts = createAsyncThunk('contacts/fetch-all', async (_, thunkAPI) => {
  try {
    const data = await api.getAllContacts();
    return data;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
  // {
  //   condition: (data, { getState }) => {
  //     console.log(getState);
  //     const { contacts } = getState;
  //     const normalizedName = data.name.toLocaleLowerCase();
  //     const normalizedNumber = data.phone.toLocaleLowerCase();
  //     const findContact = contacts.items.find(({ name, phone }) => {
  //       return name.toLocaleLowerCase() === normalizedName && phone.toLocaleLowerCase() === normalizedNumber;
  //     });
  //     // if (findContact) {
  //     //   // alert(`This contact ${name} or ${phone} is already in contacts`);
  //     //   return false;
  //     // }
  //   },
  // }
);

export const fetchDeleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await api.deleteContact(id);
    // console.log(id);
    return id;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchAllContactsLoading());
//       const data = await api.getAllContacts();
//       //   console.log(data);
//       dispatch(actions.fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(actions.fetchAllContactsError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchAddContact = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       const { contacts } = getState;
//       if (isDublicate(contacts.items, data)) {
//         alert(
//           `This contact ${data.name} or ${data.phone} is already in contacts`
//         );
//         return false;
//       }
//       dispatch(actions.fetchAddContactsLoading());
//       const result = await api.addContact();

//       dispatch(actions.fetchAddContactsSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactsError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchAllContactsLoading());
//       await api.deleteContact(id);
//       dispatch(actions.fetchAllContactsSuccess(id));
//     } catch ({ response }) {
//       dispatch(actions.fetchAllContactsError(response.data.message));
//     }
//   };
//   return func;
// };

// const isDublicate = (contacts, { name, phone }) => {
//   const normalizedName = name.toLocaleLowerCase();
//   const normalizedNumber = phone.toLocaleLowerCase();
//   const findContact = contacts.find(({ name, phone }) => {
//     return (
//       name.toLocaleLowerCase() === normalizedName ||
//       phone.toLocaleLowerCase() === normalizedNumber
//     );
//   });
//   return Boolean(findContact);
// };
