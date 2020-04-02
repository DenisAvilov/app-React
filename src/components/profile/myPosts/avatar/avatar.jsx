import React from 'react';
import d from './Avatar.module.css';


const Avatar = (props) => {

  return (
    <div className={d.avatar}>
    
  {!props.img || props.img.small === null? <img src="https://www.w3schools.com/howto/img_avatar.png" alt="нет фото"/> :
   <img src={props.img.small} alt=""/>}
      <div className={d.user}>
        <ul>
          <li><h2>{props.name} </h2></li>
  <li><span>В поиске работы:</span><a href="#s">{props.lookingForAJob ? 'ДА' : 'НЕТ'}</a></li>
          <li><span>Описание работы: </span><a href="#s">{props.lookingForAJobDescription}</a></li>
       
        </ul>
      </div>
    </div>
  )
}

export default Avatar;