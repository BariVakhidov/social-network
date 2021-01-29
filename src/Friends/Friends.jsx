import React from 'react';
import Preloader from "../components/common/Preloader/Preloader";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {
    followSuccess, followUser, getFriends,
    setCurrentPage, setPage,
    setTotalUsers,
    setUsers,
    unfollowSuccess, unfollowUser
} from "../redux/users-reducer";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setPage();
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getFriends(pageNumber, this.props.pageSize);
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
        friendsCount: state.navbar.friendsCount,
        initialized: state.app.initialized
    };

};

export default connect(mapStateToProps, {
    follow: followSuccess,
    unFollow: unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    getFriends,
    unfollowUser,
    followUser,
    setPage
})(FriendsContainer);