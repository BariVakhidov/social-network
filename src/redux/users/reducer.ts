import { updateObjectInArray } from '../../utils/objects-helpers/users-helper';
import { UsersState } from '../../types/intefaces';
import { Actions } from './constants';
import { Reducer } from 'redux';
import { UsersReducerActions } from './action-creators';

let initialState: UsersState = {
  users: [],
  friends: [],
  totalUsers: 0,
  totalFriends: 0,
  pageSize: 5,
  currentPage: 1,
  friendsCurrentPage: 1,
  isFetching: true,
  followingProgress: [],
  showingFriends: [],
  filter: {
    friend: null,
    term: '',
  },
};

const usersReducer: Reducer<UsersState, UsersReducerActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Actions.FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
        friends: updateObjectInArray(state.friends, action.userId, 'id', {
          followed: true,
        }),
      };

    case Actions.UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
        friends: updateObjectInArray(state.friends, action.userId, 'id', {
          followed: false,
        }),
      };
    case Actions.SET_PAGE:
      return { ...state, currentPage: 1 };
    case Actions.SET_USERS:
      return { ...state, users: action.users };
    case Actions.SET_FRIENDS:
      return { ...state, friends: action.friends };
    case Actions.SET_SHOWING_FRIENDS:
      return {
        ...state,
        showingFriends: action.friends,
      };
    case Actions.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case Actions.SET_FRIENDS_CURRENT_PAGE:
      return { ...state, friendsCurrentPage: action.pageNumber };
    case Actions.SET_TOTAL_USERS:
      return { ...state, totalUsers: action.totalUsers };
    case Actions.SET_TOTAL_FRIENDS:
      return { ...state, totalFriends: action.totalFriends };
    case Actions.TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case Actions.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    case Actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
