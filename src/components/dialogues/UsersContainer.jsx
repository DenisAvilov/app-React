import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { usersApi } from '../../api/Api';
import { is_follow_nuw_user, is_on_pagination, pagination, setUsers, un_is_follow_nuw_user } from '../../redux/dialogues-reducer';

import { withAuthMe } from './../hoc/withAuthMe';
import Users from './Users';
import { getUsers, getCurrentPage, getPageSize, getLoading, getFollowButton } from '../../redux/selector';


class UsersContainer extends React.PureComponent {

    componentDidMount() {

        usersApi.getUsers(this.props.pageSize).then(data => {
            this.props.setUsers(data)
        })
    }

    render() {
     console.log("Users render()")
        return (
            <Users
                users={this.props.users}

                pagination={this.props.pagination}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followButton={this.props.followButton}

                loading={this.props.isLoading}
                is_follow_nuw_user={this.props.is_follow_nuw_user}
                un_is_follow_nuw_user={this.props.un_is_follow_nuw_user}
                is_on_pagination={this.props.is_on_pagination}
            />
        )
    }
}

let mapStateToProps = (state) => {
   console.log("Users mapStateToProps")
  
    return {
        users: getUsers(state),       
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isLoading:  getLoading(state),
        followButton:  getFollowButton(state)   
       
    }
}


export default compose(
    withAuthMe,
    withRouter,
    connect(mapStateToProps,
        {
            setUsers, pagination,
            is_follow_nuw_user, un_is_follow_nuw_user, is_on_pagination
        })
)(UsersContainer)




