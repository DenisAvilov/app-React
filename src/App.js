import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';

const App = () => {
  return (<div className='app-wrapper'>
    <Header />
    <Nav />
    <Profile />      
    <Footer />
    </div>
  );
}



export default App;
