import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './reducers/reducer';
import Container from './containers/container';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['heldYear', 'heldMonth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const persistor = persistStore(store);

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

