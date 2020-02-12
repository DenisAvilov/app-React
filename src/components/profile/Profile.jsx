import React from 'react';

import d from './Profile.module.css';
import Posts from './myPosts/Posts';

const Profile = ()=>{
    return(
      <content className={d.profile}>

        <img src="https://cdn.pixabay.com/photo/2016/11/21/15/38/beach-1846009_960_720.jpg"></img> 

        <div className={d.avatar}>
          <img src="https://help-odnoklassniki.ru/wp-content/uploads/2019/01/framed-portrait.png"></img>
          <div className={d.user}>          
              <ul>
                <li><h2>Авилов Илья</h2></li>
                <li><span>Дата рождения:</span><a href="#s">2 августа 2019</a></li>
                <li><span>Город:</span><a href="#s">Харьков</a></li>
                <li><span>Образование:</span><a href="#s">ХАИ</a></li>
                <li><span>Сайт:</span><a href="#s">avilov.pp.ua</a></li>
              </ul>
        </div>
        </div> 
        <Posts/>

        </content>
    )
}

export default Profile;