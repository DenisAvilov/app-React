import React from 'react';
import { _FOLLOW, UN_FOLLOW, SET__STATE, PAGINATION } from '../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
    
    componentDidMount() {
     
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
            .then(response => {                            
                this.props.setUsers(response.data)
            })  
    }

    onPagination = (pageNumber) => {
        this.props.pagination(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {                            
                this.props.setUsers(response.data)
            }) 
      }
  
  
  

    render() {
             
        return (
      
            <Users 
             users={this.props.state.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             pagination={this.props.pagination}
             totalCount={this.props.state.totalCount}
             pageSize={this.props.state.pageSize}
             currentPage={this.props.state.currentPage}
             onPagination={this.onPagination}            
            />
        )
    }
}


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

export default connect( mapStateToProps, mapDispatchToProps )( UsersContainer )


