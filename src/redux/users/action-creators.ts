import { User } from '../../types/intefaces';
import { UsersReducerActions } from './action-types';
import { Actions } from './constants';

export const followSuccess = (userId: number): UsersReducerActions => ({
  type: Actions.FOLLOW,
  userId: userId,
});
export const unfollowSuccess = (userId: number): UsersReducerActions => ({
  type: Actions.UNFOLLOW,
  userId: userId,
});
export const setUsers = (users: Array<User>): UsersReducerActions => ({
  type: Actions.SET_USERS,
  users: users,
});
export const setFriends = (friends: Array<User>): UsersReducerActions => ({
  type: Actions.SET_FRIENDS,
  friends: friends,
});
export const setShowingFriends = (
  friends: Array<User>
): UsersReducerActions => ({
  type: Actions.SET_SHOWING_FRIENDS,
  friends,
});
export const setPage = (): UsersReducerActions => ({ type: Actions.SET_PAGE });
export const setCurrentPage = (pageNumber: number): UsersReducerActions => ({
  type: Actions.SET_CURRENT_PAGE,
  pageNumber,
});
export const setFriendsCurrentPage = (
  pageNumber: number
): UsersReducerActions => ({
  type: Actions.SET_FRIENDS_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsers = (totalUsers: number): UsersReducerActions => ({
  type: Actions.SET_TOTAL_USERS,
  totalUsers,
});
export const setTotalFriends = (totalFriends: number): UsersReducerActions => ({
  type: Actions.SET_TOTAL_FRIENDS,
  totalFriends,
});
export const toggleIsFetching = (isFetching: boolean): UsersReducerActions => ({
  type: Actions.TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): UsersReducerActions => ({
  type: Actions.TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
