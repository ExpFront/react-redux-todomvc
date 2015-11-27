import React from 'react';
import {combineReducers, compose, applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';


import Landing from './landing';
import reducers from '../reducers';

const logger = createLogger({
  duration: true,
});

const reducer = combineReducers(reducers);

const store = compose(
  applyMiddleware(logger),
  persistState(),
)(createStore)(reducer);


export default () => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
};
