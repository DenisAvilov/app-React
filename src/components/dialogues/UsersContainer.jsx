import React from 'react';

import { _FOLLOW, UN_FOLLOW, SET__STATE, PAGINATION } from '../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import UsersApiContainer from './UsersApiContainer';


let mapStateToProps = (state) => {  
 
    return{
        state: state.dialogues,
        currentPage: state.dialogues.currentPage,
        pageSize: state.dialogues.pageSize,
               
      
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return{       
      follow: ( userId )=>{ dispatch( _FOLLOW( userId ))},
      unfollow: ( userId )=>{ dispatch( UN_FOLLOW( userId ))},
      setUsers: ( users ) => { dispatch( SET__STATE( users ))},
      pagination: ( numberPage ) => { dispatch( PAGINATION(numberPage) ) }
    }

}

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( UsersApiContainer )


 export default UsersContainer; 