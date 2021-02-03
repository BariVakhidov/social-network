import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import Users from "../Users/Users";
import {connect} from "react-redux";
import {
    followUser, getFriends,
    setFriendsCurrentPage, setPage,
    setTotalUsers, unfollowSuccess,
    unfollowUser
} from "../../redux/users-reducer";
import {getFollowingProgress, getFriendsCount, getIsFetching} from "../../redux/users-selectors";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setPage();
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
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
        users: state.usersPage.friends,
        totalUsers: state.usersPage.totalFriends,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.friendsCurrentPage,
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
        friendsCount: getFriendsCount(state)
    };

};

export default connect(mapStateToProps, {
    unfollowSuccess,
    setFriendsCurrentPage,
    setTotalUsers,
    getFriends,
    unfollowUser,
    followUser,
    setPage
})(FriendsContainer);