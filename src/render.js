import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

export let rerenderEntireTree = (State)=>{
    ReactDOM.render(<BrowserRouter><App  state={State} addPost={ addPost}/></BrowserRouter>, document.getElementById('root'));
    }
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



serviceWorker.unregister();

 