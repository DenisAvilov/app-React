import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import { ADD__DIALOG, CHANGE__DIALOGUES  } from '../../../redux/state'; //ActionCreator


const Dialog = (props) => {
    let path = "/dialogues/" + props.id;
    let textarea = React.createRef();
    let changeDialogOnline = () => {
        let text = textarea.current.value
        props.dispatch(CHANGE__DIALOGUES(text))
    }
    let neuDialog = () => {
        props.dispatch(ADD__DIALOG());
    }

    return (
        <div className={d.dialog}>
            <NavLink to={path} activeClassName={d.active}>{props.name}</NavLink>
            <div>
                <textarea name="" id="" cols="20" rows="1"
                    ref={textarea} value={props.dialogues} onChange={changeDialogOnline}
                ></textarea>

                <button type="submmit" onClick={neuDialog}> Отправить </button>
            </div>
        </div>
    )
}



export default Dialog;