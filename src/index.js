// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers';
import App from './router/AppContainer';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

const store = createStore(rootReducer);

const el = document.getElementById('root');
if (!el) {
  throw new Error('App element not found');
}
// This has to be fixed for actual production code. This is just a stop-gap solution.
window.API_URL = (window.location.hostname === 'localhost') ? 'http://localhost:3001' : 'https://app-happyhour-riotly.herokuapp.com';

// Intercepting fetch API to add APP instance URL
const originalFetch = window.fetch;
window.fetch = (...args) => {
  const url = window.API_URL + args[0];
  const options = args[1] || {};
  const jwt = window.localStorage.getItem('jwt');
  if (jwt) {
    const headers = options.headers || new Headers();
    headers.append(
      'Authorization', (`Bearer ${jwt}`),
    );
    options.headers = headers;
  }
  return originalFetch.apply(this, [url, options]);
};

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  el,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
