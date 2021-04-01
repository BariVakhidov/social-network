import { usersAPI, friendsAPI } from '../../api/api';
import { AppThunk } from '../redux-store';
import {
  setCurrentPage,
  toggleIsFetching,
  setUsers,
  setTotalUsers,
  setFriendsCurrentPage,
  setFriends,
  setTotalFriends,
  toggleFollowingProgress,
  setShowingFriends,
  unfollowSuccess,
  followSuccess,
} from './action-creators';
import { UsersReducerActions } from './action-types';

export const requestUsers = (
  currentPage: number,
  pageSize: number
): AppThunk => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
  };
};

export const getFriends = (
  currentPage: number,
  pageSize: number
): AppThunk => async (dispatch) => {
  dispatch(setFriendsCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  let data = await friendsAPI.getFriends(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setFriends(data.items));
  dispatch(setTotalFriends(data.totalCount));
};
const followUnfollowFollow = async (
  dispatch: (action: UsersReducerActions) => void,
  userId: number,
  apiMethod: (userId: number) => void,
  actionCreator: (userId: number) => UsersReducerActions
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data: any = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
    let data = await friendsAPI.displayFriends();
    dispatch(setShowingFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollowUser = (userId: number): AppThunk => async (dispatch) => {
  await followUnfollowFollow(
    dispatch,
    userId,
    usersAPI.unFollowUser.bind(usersAPI),
    unfollowSuccess
  );
};
export const followUser = (userId: number): AppThunk => async (dispatch) => {
  await followUnfollowFollow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    followSuccess
  );
};
export const getShowingFriends = (): AppThunk => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await friendsAPI.displayFriends();
  dispatch(toggleIsFetching(false));
  dispatch(setShowingFriends(data.items));
  dispatch(setTotalFriends(data.totalCount));
};
