import React from 'react';
import d from './Header.module.css';



const Header = (props)=>{
    return(
        <header className={d.wraper}>
          <div className={d.logo }>           
                  <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" />
          </div>
          <div className={d.center}></div>
          <div className={d.right}>
              <div className={d.login}>
                 {props.isYou ? <p>{props.login}</p> : <p>LOGIN</p> } 
              </div>
          </div>
        </header>
    )
}

export default Header;