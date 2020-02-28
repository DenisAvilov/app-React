import {createStore, combineReducers} from "redux";
import profile from "./profile-reducer";
import dialogues from "./dialogues-reducer";


// Функция обединение редьюсеров 
let reducers = combineReducers({
    profile : profile,
    dialogues : dialogues
}); 

let store = createStore(reducers);  //Создание объекта store




export default store;