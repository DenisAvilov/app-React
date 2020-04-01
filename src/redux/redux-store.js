import {createStore, combineReducers, applyMiddleware} from "redux";
import profile from "./profile-reducer";
import dialogues from "./dialogues-reducer";
import login from "./login";
import thunk from "redux-thunk";


// Функция обединение редьюсеров 

let reducers = combineReducers({
    profile : profile,
    dialogues : dialogues,
    login: login
}); 

//thunk прослойка позволяющая распозновать объекты от функций
let store = createStore(reducers, applyMiddleware(thunk) );  //Создание объекта store

window.store = store;


export default store;