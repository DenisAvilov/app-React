import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';

import { Route } from 'react-router-dom';
import ProfileContainer from './components/profile/ProfileContainer';
import DialoguesContainer from './components/dialogues/DialoguesContainer';


const App = (props) => {
 
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className="profile">

        {/* <Route exact path='/dialogues' component={Dialogs} />  exact - точное совпадение ===  Route : следит за адресной строкой path */}
        {/* <Route path='/dialogues' component={Dialogs} />  прокинуть данные через component не выйдет | использую render с анонимной функцией */}
      
        <Route path='/dialogues' render={() => 
            <DialoguesContainer />} 
         />

        <Route path='/profile' render={() =>
           <ProfileContainer  />} 
        />

      </div>
    </div>

  );
}



export default App;
