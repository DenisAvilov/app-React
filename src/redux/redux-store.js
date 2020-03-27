import {createStore, combineReducers} from "redux";
import profile from "./profile-reducer";
import dialogues from "./dialogues-reducer";
import login from "./login";


// Функция обединение редьюсеров 

let reducers = combineReducers({
    profile : profile,
    dialogues : dialogues,
    login: login
}); 

let store = createStore(reducers);  //Создание объекта store

window.store = store;


export default store;