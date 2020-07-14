import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories';


let rootReducer = combineReducers({ categories });

const store = () => {
    return createStore(rootReducer, composeWithDevTools());
}

export default store();