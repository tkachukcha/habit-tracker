import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './app/hooks/useAuth';
import { createStore } from './app/store/createStore';
import history from './app/utils/history';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
