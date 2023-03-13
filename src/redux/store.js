import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
