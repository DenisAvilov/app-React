import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import ava_logo from '../../../imgs/user.png'

class Dialog extends React.Component {
     path = "/dialogues/" + this.props.id;      
    render(){  
    return (
        <div className={d.dialog}>
            <NavLink to={this.path}  activeClassName={d.active}> 
            { this.props.photos.small === null ? <div className={d.img_logo_wrap}><img className={d.img_logo} src={ava_logo} alt=""/></div> : <div className={d.img_logo_wrap}><img className={d.img_logo} src={this.props.photos.small} alt=""/></div>     } 
            <h2> {this.props.name} </h2> </NavLink> 
            <h1> <strong>Классовая компонента</strong></h1>
            {this.props.followed === true ?           
            <button onClick={ () =>  this.props.unfollow(this.props.id)  } > Удалить из друзей</button>   
                :
             <button onClick={ () =>  this.props.follow(this.props.id)  } > Добавить в друзья</button>  }    
                
        </div>
    )}
}
export default Dialog;