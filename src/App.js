import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';

import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogues/Dialogues';
import { BrowserRouter, Route } from 'react-router-dom';




const App = () => {
  return (<BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <Nav />
              <div className="profile"> 
              {/* <Dialogs />  */}
              <Route path='/dialogues' component={Dialogs} />
              <Route path='/profile' component={Profile} />  
                  </div>
              {/* <Profile />       */}  
                
              <Footer />
             
        </div>
    </BrowserRouter>
  );
}



export default App;
