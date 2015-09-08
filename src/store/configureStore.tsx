declare var __DEV__;
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';
const thunkMiddleware = require('redux-thunk');
const {compose} = require('redux');

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
  const {devTools, persistState} = require('redux-devtools');
  createStoreWithMiddleware = compose(
    (applyMiddleware(thunkMiddleware) as any),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState = undefined) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
