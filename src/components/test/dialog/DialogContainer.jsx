import React from 'react';
import { connect } from 'react-redux';
import Dialog from './Dialog';
import { CHANGE__DIALOGUES } from '../../../redux/dialogues-reducer';


 let mapStateToProps = (state) =>{
     return {
        state: state.dialogues,
        statatat: fhjfhjfjh


     }
 }

let mapDispatchToProps = (dispatch) => {
        return{
  func: () => { alert(90) }

         
            },
           
            
            // (text) => {  
            //     let action = CHANGE__DIALOGUES(text);                
            //     dispatch( CHANGE__DIALOGUES( action ) )
            // } 
        }    
}
 

//  props.dispatch( ADD__DIALOG() );

const DialogContainer = connect( mapStateToProps, mapDispatchToProps )( Dialog ) ;


export default DialogContainer;