import React from 'react';

import {Provider} from 'react-redux';
import store from './redux/store';

import Screens from './navigations';

const App = () => (
  <Provider store={store}>
    <Screens />
  </Provider>
);

export default App;
