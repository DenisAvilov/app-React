import React from 'react';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';
import { CHANGE__DIALOGUES, ADD__DIALOG } from '../../redux/dialogues-reducer';


 let mapStateToProps = (state) => {
    return {
        state: state.dialogues,
        myStete: state
    }
 }

 let mapDispatchToProps = (dispatch) => {
     return {
        chengePlaceholder: (text) => { dispatch(CHANGE__DIALOGUES(text)) },
        addDialog: () => {
            dispatch(ADD__DIALOG())
        }

     }
 }
  let  DialoguesContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogues ) 


export default DialoguesContainer;