import React from 'react';
import Dialogs from './Dialogues';
import { CHANGE__DIALOGUES, ADD__DIALOG } from '../../redux/dialogues-reducer';


const DialogsContainer = (props) => {
   
    let changeDialogOnline = (text) => {      
        // let text = textarea.current.value
        props.dispatch(CHANGE__DIALOGUES(text))
    }

    let addDialog = () => {
        props.dispatch(ADD__DIALOG());
    }

    return (

     <Dialogs placeholder={changeDialogOnline}
     addDialog={addDialog} state={props.state}/>

    )
}

export default DialogsContainer;