import { usersAPI, friendsAPI } from '../../api/api';
import { AppThunk } from '../redux-store';
import { usersActions, UsersReducerActions } from './action-creators';
import { batch } from 'react-redux';
import { RequestUsersParams } from './types';

export const requestUsers = (params: RequestUsersParams): AppThunk => {
  return async (dispatch) => {
    batch(() => {
      dispatch(usersActions.setCurrentPage(params.currentPage));
      dispatch(usersActions.toggleIsFetching(true));
      dispatch(
        usersActions.setFilter({
          term: params.term,
          friend: params.friend,
        })
      );
    });
    const data = await usersAPI.getUsers(params);
    batch(() => {
      dispatch(usersActions.setUsers(data.items));
      dispatch(usersActions.setTotalUsers(data.totalCount));
    });
    setTimeout(() => dispatch(usersActions.toggleIsFetching(false)), 400);
  };
};

export const getFriends =
  (currentPage: number, pageSize: number): AppThunk =>
  async (dispatch) => {
    batch(() => {
      dispatch(usersActions.setFriendsCurrentPage(currentPage));
      dispatch(usersActions.toggleIsFetching(true));
    });
    const data = await friendsAPI.getFriends(currentPage, pageSize);
    batch(() => {
      dispatch(usersActions.toggleIsFetching(false));
      dispatch(usersActions.setFriends(data.items));
      dispatch(usersActions.setTotalFriends(data.totalCount));
    });
  };
const followUnfollowFollow = async (
  dispatch: (action: UsersReducerActions) => void,
  userId: number,
  apiMethod: (userId: number) => void,
  actionCreator: (userId: number) => UsersReducerActions
) => {
  dispatch(usersActions.toggleFollowingProgress(true, userId));
  const data: any = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
    const data = await friendsAPI.displayFriends();
    batch(() => {
      dispatch(usersActions.setShowingFriends(data.items));
      dispatch(usersActions.setTotalFriends(data.totalCount));
    });
  }
  dispatch(usersActions.toggleFollowingProgress(false, userId));
};

export const unfollowUser =
  (userId: number): AppThunk =>
  async (dispatch) => {
    await followUnfollowFollow(
      dispatch,
      userId,
      usersAPI.unFollowUser.bind(usersAPI),
      usersActions.unfollowSuccess
    );
  };
export const followUser =
  (userId: number): AppThunk =>
  async (dispatch) => {
    await followUnfollowFollow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      usersActions.followSuccess
    );
  };
export const getShowingFriends = (): AppThunk => async (dispatch) => {
  dispatch(usersActions.toggleIsFetching(true));
  const data = await friendsAPI.displayFriends();
  batch(() => {
    dispatch(usersActions.setShowingFriends(data.items));
    dispatch(usersActions.setTotalFriends(data.totalCount));
  });
  setTimeout(() => dispatch(usersActions.toggleIsFetching(false)), 400);
};
