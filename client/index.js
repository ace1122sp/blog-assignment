import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap';
import reducer from 'client/redux/reducer';
import App from 'client/components/app';

const root = document.getElementById('root');
const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
