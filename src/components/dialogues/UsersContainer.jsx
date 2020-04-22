import React from 'react';
import { setUsers, pagination, is_follow_nuw_user, un_is_follow_nuw_user, is_on_pagination } from '../../redux/dialogues-reducer';

import { connect } from 'react-redux';
import Users from './Users';
import { withRouter } from 'react-router-dom';
import { usersApi } from '../../api/Api';
import { compose } from 'redux';
import  { withAuthMe } from './../hoc/withAuthMe';

class UsersContainer extends React.Component {

    componentDidMount() {

        usersApi.getUsers(this.props.pageSize).then(data => {
            this.props.setUsers(data)
        })
    }

    render() {

        return (
            <Users
                users={this.props.state.users}

                pagination={this.props.pagination}
                totalCount={this.props.state.totalCount}
                pageSize={this.props.state.pageSize}
                currentPage={this.props.state.currentPage}
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

    return {
        state: state.dialogues,
        currentPage: state.dialogues.currentPage,
        pageSize: state.dialogues.pageSize,
        isLoading: state.dialogues.isLoading,
        followButton: state.dialogues.followButton,
       
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




