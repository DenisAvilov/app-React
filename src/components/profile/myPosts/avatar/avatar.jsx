import React from 'react';
import d from './Avatar.module.css';


const Avatar = (props) => {

  return (
    <div className={d.avatar}>
      <img src={props.avatar} alt={props.alt}></img>
      <div className={d.user}>
        <ul>
          <li><h2>{props.name} {props.secondName} </h2></li>
          <li><span>Дата рождения:</span><a href="#s">{props.day} {props.month} {props.year}</a></li>
          <li><span>Город:</span><a href="#s">{props.city}</a></li>
          <li><span>Образование:</span><a href="#s">{props.education}</a></li>
          <li><span>Сайт:</span><a href="#s">{props.site}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Avatar;