import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories';
import reducer from './reducers';

let rootReducer = combineReducers({ categories,reducer });

const store = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();