import React from 'react';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';
import { CHANGE__DIALOGUES, ADD__DIALOG, _FOLLOW, UN_FOLLOW, SET__STATE,  } from '../../redux/dialogues-reducer';


 let mapStateToProps = (state) => {
    return {
        state: state.dialogues     
    }
 }

 let mapDispatchToProps = (dispatch) => {
     return {
        chengePlaceholder: (text) => { dispatch(CHANGE__DIALOGUES(text)) },
        addDialog: () => { dispatch(ADD__DIALOG()) },
        follow: (userId) => { dispatch(_FOLLOW(userId)) },
        unFollow: (userId) => { dispatch(UN_FOLLOW(userId)) },
        set_users: (usersData) => { dispatch(SET__STATE( usersData )) }
        
     }
 }



  let  DialoguesContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogues ) 


export default DialoguesContainer;