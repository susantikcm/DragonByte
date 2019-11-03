import { createStore, applyMiddleware /*, compose , combineReducers*/ } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleware = [thunk, logger];

//spread in the middlware array into applyMiddleware() method
const store = createStore(rootReducer, applyMiddleware(...middleware)); 

export default store;