import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import taskReducer from '../reducers/taskReducer';
import checkboxReducer from '../reducers/checkboxReducer';

const rootReducer = combineReducers({
    taskReducer,
    checkboxReducer
});

const Store = createStore(rootReducer);

export default Store;