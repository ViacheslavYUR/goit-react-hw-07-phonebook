import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'shared/Loader/Loader';

import Phonebook from 'components/Phonebook';
import { store, persistor } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Phonebook />
      </PersistGate>
    </Provider>
  );
};

export default App;
