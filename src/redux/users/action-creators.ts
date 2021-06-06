import {User} from '../../types/intefaces';
import {Actions} from './constants';
import {InferActionsType} from "../redux-store";

export type UsersReducerActions = InferActionsType<typeof usersActions>

export const usersActions = {
    followSuccess: (userId: number) => ({type: Actions.FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => ({type: Actions.UNFOLLOW, userId} as const),
    setUsers: (users: Array<User>) => ({type: Actions.SET_USERS, users: users,} as const),
    setFriends: (friends: Array<User>) => ({type: Actions.SET_FRIENDS, friends: friends,} as const),
    setShowingFriends: (friends: Array<User>) => ({type: Actions.SET_SHOWING_FRIENDS, friends,} as const),
    setPage: () => ({type: Actions.SET_PAGE} as const),
    setCurrentPage: (pageNumber: number) => ({type: Actions.SET_CURRENT_PAGE, pageNumber,} as const),
    setFriendsCurrentPage: (pageNumber: number) => ({type: Actions.SET_FRIENDS_CURRENT_PAGE, pageNumber,} as const),
    setTotalUsers: (totalUsers: number) => ({type: Actions.SET_TOTAL_USERS, totalUsers,} as const),
    setTotalFriends: (totalFriends: number) => ({type: Actions.SET_TOTAL_FRIENDS, totalFriends,} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: Actions.TOGGLE_IS_FETCHING, isFetching,} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: Actions.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId,} as const),
};

