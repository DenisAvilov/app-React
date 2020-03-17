import React from 'react';
import { follow, unfollow, setUsers, pagination, is_Loading } from '../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {     
        this.props.is_Loading(true)   
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data)    
                this.props.is_Loading(false)             
            })
    }

    onPagination = (pageNumber) => {
         this.props.is_Loading(true) 
        this.props.pagination(pageNumber);      
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data)
                this.props.is_Loading(false)                 
            })
    }

    render() {

        return (<>
               
            <Users
                users={this.props.state.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                pagination={this.props.pagination}
                totalCount={this.props.state.totalCount}
                pageSize={this.props.state.pageSize}
                currentPage={this.props.state.currentPage}
                isloading={this.props.state.isLoading}
                onPagination={this.onPagination}
                is_Loading={this.props.is_Loading}
            />
           </> 
        )
    }
}


let mapStateToProps = (state) => {

    return {
        state: state.dialogues,
        currentPage: state.dialogues.currentPage,
        pageSize: state.dialogues.pageSize,
        isLoading: state.dialogues.isLoading
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

export default connect(mapStateToProps, { follow, unfollow, setUsers, pagination, is_Loading })(UsersContainer)


