// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers';
import './index.css';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
