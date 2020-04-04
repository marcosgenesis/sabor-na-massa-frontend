import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/index';
import history from './services/history';
import GlobalStyle from './styles/global';
import { store, persistor } from './store';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={4000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
