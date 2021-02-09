import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    setTotalUsers, requestUsers, unfollowUser, followUser, setPage
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";
import {
    getCurrentPage,
    getFollowingProgress, getFriendsCount,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setPage();
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}
                       onPageChange={this.onPageChange}
                />
            </>
        );
    }

}

/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress:state.usersPage.followingProgress,
        friendsCount: state.navbar.friendsCount
    };

};
*/
let mapStateToProps = (state) => {
    return {
        users: getUsers
        (
            state
        ),
        totalUsers: getTotalUsers
        (
            state
        ),
        pageSize: getPageSize
        (
            state
        ),
        currentPage: getCurrentPage
        (
            state
        ),
        isFetching: getIsFetching
        (
            state
        ),
        followingProgress: getFollowingProgress
        (
            state
        ),
        friendsCount: getFriendsCount
        (
            state
        )
    };

};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsers: (users) => {
            dispatch(setTotalUsersAC(users));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching));
        }
    }
};*/

export default compose(connect(mapStateToProps, {
    setCurrentPage,
    setTotalUsers,
    getUsers: requestUsers,
    unfollowUser,
    followUser,
    setPage
}), withRouter)(UsersContainer);