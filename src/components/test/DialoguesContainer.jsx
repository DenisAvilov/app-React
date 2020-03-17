import React from 'react';

import { follow, unfollow } from '../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';


let mapStateToProps = (state) => {    
    return{
        state: state.dialogues
    }
}

// let mapDispatchToProps = (dispatch) => {
    
//     return{       
//       follow: (userId)=>{ dispatch( _FOLLOW(userId) ) },
//       unfollow: (userId)=>{ dispatch( UN_FOLLOW(userId) ) }
//     }

// }

const DialoguesContainer = connect( mapStateToProps, {follow, unfollow} )(Dialogues)


 export default DialoguesContainer;