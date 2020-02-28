import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = "/dialogues/" + props.id;
    let textarea = React.createRef();
    let changeDialogOnline = () => {
        let text = textarea.current.value
        props.placeholder(text)
        // props.dispatch(CHANGE__DIALOGUES(text))
    }
    let onAddDialog = () => {
        
        // props.dispatch(ADD__DIALOG());
        props.addDialog();
    }

    return (
        <div className={d.dialog}>
            <NavLink to={path}  activeClassName={d.active}>
                {props.name}</NavLink>
            <div>
                <textarea name="" id="" cols="20" rows="1"
                    ref={textarea} value={props.dialogues}
                     onChange={changeDialogOnline}
                ></textarea>

                <button type="submmit"
                 onClick={onAddDialog}> Отправить 
                 </button>
            </div>
        </div>
    )
}



export default Dialog;