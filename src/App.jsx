import { Provider } from 'react-redux';
import Loader from 'shared/Loader/Loader';

import Phonebook from 'components/Phonebook';
import store from 'redux/store';

const App = () => {
  return (
    <Provider store={store} loading={<Loader />}>
      <Phonebook />
    </Provider>
  );
};

export default App;
