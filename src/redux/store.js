import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import cardReducer from './cardReducer';
import {combineReducers, createStore } from 'redux';
import Products from './../data/products.json'


const initialState = {
    ...Products,
    total: 0

}

const reducers = {

	card: cardReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;