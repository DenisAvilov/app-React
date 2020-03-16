import React from "react";
import Users from "./Users";
import * as axios from 'axios';

class UsersApiContainer extends React.Component {
    
    componentDidMount() {
       debugger
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

export default UsersApiContainer;