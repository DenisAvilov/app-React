import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';

import Profile from './components/profile/Profile';

import Dialogs from './components/dialogues/Dialogues';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {

  const Data =  props.data;

  console.log('Data props', props.data);

  return (<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className="profile">
        {/* <Route exact path='/dialogues' component={Dialogs} />  exact - точное совпадение ===  Route : следит за адресной строкой path */}
        {/* <Route path='/dialogues' component={Dialogs} />  прокинуть данные через component не выйдет | использую render с анонимной функцией */}
        <Route path='/dialogues' render =  { () =>  <Dialogs user={Data[0]} mess={Data[1]} /> }    />
        <Route path='/profile' render =  { () =>  <Profile /> } /> 
      </div>
     

    </div>
  </BrowserRouter>
  );
}



export default App;
