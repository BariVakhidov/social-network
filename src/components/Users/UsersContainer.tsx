import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setPage } from '../../redux/users/action-creators';
import {
  requestUsers,
  unfollowUser,
  followUser,
} from '../../redux/users/thunk';
import Preloader from '../common/Preloader/Preloader';

import {
  getCurrentPage,
  getFollowingProgress,
  getFriendsCount,
  getIsFetching,
  getPageSize,
  getTotalUsers,
  getUsers,
} from '../../redux/users-selectors';
import { RootState } from '../../redux/redux-store';
import { User } from '../../types/intefaces';

interface MapDispatchToProps {
  getUsers: (pageNumber: number, pageSize: number) => void;
  unfollowUser: (userId: number) => void;
  followUser: (userId: number) => void;
  setPage: () => void;
}
interface MapStateToProps {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  friendsCount: number;
  totalUsers: number;
  users: Array<User>;
  followingProgress: Array<number>;
}
interface OwnProps {
  isMobile: boolean;
}
type Props = MapDispatchToProps & MapStateToProps & OwnProps;

class UsersContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.setPage();
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChange={this.onPageChange} />
      </>
    );
  }
}

let mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    users: getUsers(state),
    totalUsers: getTotalUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
    friendsCount: getFriendsCount(state),
  };
};

export default connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps, {
  setPage,
  getUsers: requestUsers,
  unfollowUser,
  followUser,
})(UsersContainer);
