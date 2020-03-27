import React from 'react';

import { follow, unfollow, setUsers, pagination, is_Loading, is_Loading_Button } from '../../redux/dialogues-reducer';

import { connect } from 'react-redux';
import Users from './Users';
import { withRouter } from 'react-router-dom';
import { usersApi } from '../../api/Api';


class UsersContainer extends React.Component {
    
    componentDidMount() {
     
        usersApi.getUsers(this.props.pageSize ).then(data => {                                      
                this.props.setUsers(data)
            })   
    }

    onPagination = (pageNumber) => {        
        this.props.pagination(pageNumber);
        debugger
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {                            
                this.props.setUsers(data)
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
             usersApi={usersApi}
             followButton={this.props.followButton}           
             is_Loading_Button={this.props.is_Loading_Button}
            />
        )
    }
}

let mapStateToProps = (state) => {

    return {
        state: state.dialogues,
        currentPage: state.dialogues.currentPage,
        pageSize: state.dialogues.pageSize,
        isLoading: state.dialogues.isLoading,
        followButton: state.dialogues.followButton,
       
    }
}

// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => { dispatch(_FOLLOW(userId)) },
//         unfollow: (userId) => { dispatch(UN_FOLLOW(userId)) },
//         setUsers: (users) => { dispatch(SET__STATE(users)) },
//         pagination: (numberPage) => { dispatch(PAGINATION(numberPage)) },
//         is_Loading: (boolean) => { dispatch(IS_LOADING(boolean)) }
//     }

// }



export default connect(mapStateToProps, {is_Loading_Button, follow, unfollow, setUsers, pagination, is_Loading })(withRouter(UsersContainer))


