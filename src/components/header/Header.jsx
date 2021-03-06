import React from 'react';
import d from './Header.module.css';
import { Link } from 'react-router-dom';



const Header = (props)=>{
    return(
        <header className={d.wraper}>
          <div className={d.logo }>           
                  <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" />
          </div>
          <div className={d.center}></div>
          <div className={d.right}>
              <div className={d.login}>
                 {props.isYou ? <h1>{props.login}</h1> : <Link to={'/login'}><h2>LOGIN</h2></Link>  }
                 {props.isYou ? <div onClick={  props.iSoutLogin }> Выйти</div>  : " "} 
              </div>
          </div> 
        </header>
    )
}

export default Header;