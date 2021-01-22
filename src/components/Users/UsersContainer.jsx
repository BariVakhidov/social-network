import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsers,
    setUsers,
    unFollow, toggleFollowingProgress
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);

        });
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);

        });
    }

    render() {
        return (
            <>  {this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}
                       followUser={usersAPI.followUser}
                       unFollowUser={usersAPI.unFollowUser}
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
        followingProgress:state.usersPage.followingProgress
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);