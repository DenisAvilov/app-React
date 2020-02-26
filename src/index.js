import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
debugger;
let rerenderEntireTree = (state)=>{ 

    ReactDOM.render(<BrowserRouter><App        
        state={state}
        addPost={store.addPost.bind(store)}
        changeState={ store.changestate.bind(store)}
        changeDialogues={store.changestateDialogues.bind(store)} 
        addDialogues={store.addDialogues.bind(store)}
    /></BrowserRouter>, document.getElementById('root'));  
    }
   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
rerenderEntireTree(store.getState());
store._subscribe(rerenderEntireTree)

 serviceWorker.unregister();

 