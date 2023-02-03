
import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../reducers/taskReducer';
import checkboxReducer from '../reducers/checkboxReducer';

const rootReducer = combineReducers({ checkboxReducer, taskReducer });

const Store = configureStore(rootReducer, applyMiddleware(thunk));

export default Store;