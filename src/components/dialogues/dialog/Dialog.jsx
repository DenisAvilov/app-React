import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    let path = "/dialogues/" + props.id;
    let textarea = React.createRef(); 


   let changeDialogOnline = () => {
         let text = textarea.current.value
      
        props.chengePlaceholder( text ) 
        
        // props.funcPlacholder(text)     
    }

     let onAddDialog = () => {        
        props.addDialog();         

    }

    return (
        <div className={d.dialog}>
            <NavLink to={path}  activeClassName={d.active}>
                {props.name}</NavLink>
            <div>
                <textarea  cols="20" rows="1"
                    ref={textarea} value={props.dialogues}
                     onChange={changeDialogOnline}
                ></textarea>

                <button type="submmit"
                 onClick={onAddDialog}> Отправить 
                 </button>
                
                 {props.follow ? <button onClick={ () => props.unFollow(props.id)  } className={d.button_follow}>Одписка </button> :  <button onClick={ ()=> props.followFc(props.id)  } className={d.button_follow}>Подписка</button>      }

            </div>


        </div>
    )
}



export default Dialog;