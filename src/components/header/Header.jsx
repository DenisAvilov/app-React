import React from 'react';
import d from './Header.module.css';

const Header = ()=>{
    return(
        <header className={d.header}>
          <div className={d.logo}>
              <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" alt=""/>
          </div>
        </header>
    )
}

export default Header;