import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import registerReducer from "./register-reducer";
import authReducer from "./auth-reducer";
import todoReducer from "./todos-reducer";


let reducers = combineReducers({
    users: registerReducer,
    auth: authReducer,
    todoData: todoReducer,
    form: formReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;