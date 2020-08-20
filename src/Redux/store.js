import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import registerReducer from "./register-reducer";


let reducers = combineReducers({
    users: registerReducer,
    form: formReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;