/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 07.02.17
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const initialState = {};

const rootReducer = combineReducers(reducers);

const enhancer = compose(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;