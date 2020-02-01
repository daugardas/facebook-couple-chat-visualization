import { createStore, Store } from 'redux';
import rootReducer from './reducers';

//const testState = require("../testData/testState.json");

export const store: Store =  createStore(rootReducer/* , testState */);