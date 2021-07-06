import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from './reducers/UserReducer';
import thunk from "redux-thunk" 


const reducer = combineReducers({
    UserReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;