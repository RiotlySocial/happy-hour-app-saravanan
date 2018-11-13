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

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  el,
);

// This has to be fixed for actual production code. This is just a stop-gap solution.
window.API_URL = (window.location.hostname === 'localhost') ? ' ' : 'https://app-happyhour-riotly.herokuapp.com';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Intercepting fetch API to add APP instance URL
const originalFetch = window.fetch;
window.fetch = (...args) => {
  args[0] = window.API_URL + args[0];
  return originalFetch.apply(this, args);
};
