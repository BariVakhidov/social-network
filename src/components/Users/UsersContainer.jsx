import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    unfollowSuccess, getUsers, unfollowUser, followUser
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>  {this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}
                       onPageChange={this.onPageChange}
                />
            </>
        );
    }
}

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

export default connect(mapStateToProps, {
    follow: followSuccess,
    unFollow: unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    getUsers,
    unfollowUser,
    followUser
})(UsersContainer);