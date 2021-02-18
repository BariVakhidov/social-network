import {friendsAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers/users-helper";
import {AppThunk} from "./redux-store";
import {User, UsersState} from "../types/intefaces";

enum Actions {
    FOLLOW = "social-network/users/FOLLOW",
    UNFOLLOW = "social-network/users/UNFOLLOW",
    SET_USERS = "social-network/users/SET_USERS",
    SET_FRIENDS = "social-network/users/SET_FRIENDS",
    SET_SHOWING_FRIENDS = "social-network/users/SET_SHOWING_FRIENDS",
    SET_PAGE = "social-network/users/SET_PAGE",
    SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE",
    SET_FRIENDS_CURRENT_PAGE = "social-network/users/SET_FRIENDS_CURRENT_PAGE",
    SET_TOTAL_USERS = "social-network/users/SET_TOTAL_USERS",
    SET_TOTAL_FRIENDS = "social-network/users/SET_TOTAL_FRIENDS",
    TOGGLE_IS_FETCHING = "social-network/users/TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS"
}

/*
const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET_USERS";
const SET_FRIENDS = "social-network/users/SET_FRIENDS";
const SET_SHOWING_FRIENDS = "social-network/users/SET_SHOWING_FRIENDS";
const SET_PAGE = "social-network/users/SET_PAGE";
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const SET_FRIENDS_CURRENT_PAGE = "social-network/users/SET_FRIENDS_CURRENT_PAGE";
const SET_TOTAL_USERS = "social-network/users/SET_TOTAL_USERS";
const SET_TOTAL_FRIENDS = "social-network/users/SET_TOTAL_FRIENDS";
const TOGGLE_IS_FETCHING = "social-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";*/

interface FollowSuccessAction {
    type: typeof Actions.FOLLOW
    userId: number
}

interface UnfollowSuccessAction {
    type: typeof Actions.UNFOLLOW
    userId: number
}

interface SetUsersAction {
    type: typeof Actions.SET_USERS
    users: Array<User>
}

interface SetFriends {
    type: typeof Actions.SET_FRIENDS
    friends: Array<User>
}

interface SetShowingFriends {
    type: typeof Actions.SET_SHOWING_FRIENDS
    friends: Array<User>
}

interface SetPage {
    type: typeof Actions.SET_PAGE
}

interface SetCurrentPage {
    type: typeof Actions.SET_CURRENT_PAGE
    pageNumber: number
}

interface SetFriendsCurrentPage {
    type: typeof Actions.SET_FRIENDS_CURRENT_PAGE,
    pageNumber: number
}

interface SetTotalUsers {
    type: typeof Actions.SET_TOTAL_USERS,
    totalUsers: number
}

interface SetTotalFriends {
    type: typeof Actions.SET_TOTAL_FRIENDS,
    totalFriends: number
}

interface ToggleIsFetching {
    type: typeof Actions.TOGGLE_IS_FETCHING,
    isFetching: boolean
}

interface ToggleFollowingProgress {
    type: typeof Actions.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

type UsersReducerActions = FollowSuccessAction | UnfollowSuccessAction | SetUsersAction
    | SetFriends
    | SetCurrentPage
    | SetFriendsCurrentPage
    | SetPage
    | SetShowingFriends
    | SetTotalFriends
    | ToggleIsFetching
    | SetTotalUsers
    | ToggleFollowingProgress;

export const followSuccess = (userId: number): UsersReducerActions => ({type: Actions.FOLLOW, userId: userId});
export const unfollowSuccess = (userId: number): UsersReducerActions => ({type: Actions.UNFOLLOW, userId: userId});
export const setUsers = (users: Array<User>): UsersReducerActions => ({type: Actions.SET_USERS, users: users});
export const setFriends = (friends: Array<User>): UsersReducerActions => ({
    type: Actions.SET_FRIENDS,
    friends: friends
});
export const setShowingFriends = (friends: Array<User>): UsersReducerActions => ({
    type: Actions.SET_SHOWING_FRIENDS,
    friends
});
export const setPage = (): UsersReducerActions => ({type: Actions.SET_PAGE});
export const setCurrentPage = (pageNumber: number): UsersReducerActions => ({
    type: Actions.SET_CURRENT_PAGE,
    pageNumber
});
export const setFriendsCurrentPage = (pageNumber: number): UsersReducerActions => ({
    type: Actions.SET_FRIENDS_CURRENT_PAGE,
    pageNumber
});
export const setTotalUsers = (totalUsers: number): UsersReducerActions => ({type: Actions.SET_TOTAL_USERS, totalUsers});
export const setTotalFriends = (totalFriends: number): UsersReducerActions => ({
    type: Actions.SET_TOTAL_FRIENDS,
    totalFriends
});
export const toggleIsFetching = (isFetching: boolean): UsersReducerActions => ({
    type: Actions.TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): UsersReducerActions => ({
    type: Actions.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

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
    showingFriends: []
};

const usersReducer = (state: UsersState = initialState, action: UsersReducerActions): UsersState => {
    switch (action.type) {
        case Actions.FOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
                    friends: updateObjectInArray(state.friends, action.userId, "id", {followed: true}),
                }
            );

        case Actions.UNFOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
                    friends: updateObjectInArray(state.friends, action.userId, "id", {followed: false})
                }
            );
        case Actions.SET_PAGE:
            return {...state, currentPage: 1}
        case Actions.SET_USERS:
            return {...state, users: action.users};
        case Actions.SET_FRIENDS:
            return {...state, friends: action.friends}
        case Actions.SET_SHOWING_FRIENDS:
            return {
                ...state, showingFriends: action.friends
            }
        case Actions.SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case Actions.SET_FRIENDS_CURRENT_PAGE:
            return {...state, friendsCurrentPage: action.pageNumber};
        case Actions.SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers};
        case Actions.SET_TOTAL_FRIENDS:
            return {...state, totalFriends: action.totalFriends};
        case Actions.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case Actions.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};
export default usersReducer;

export const requestUsers = (currentPage: number, pageSize: number):AppThunk => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
    }
};

export const getFriends = (currentPage: number, pageSize: number): AppThunk=> async dispatch => {
    dispatch(setFriendsCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));

};
const followUnfollowFollow = async (dispatch: (action: UsersReducerActions) => void, userId: number, apiMethod: (userId: number) => void, actionCreator: (userId: number) => UsersReducerActions) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data: any = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        let data = await friendsAPI.displayFriends();
        dispatch(setShowingFriends(data.items));
        dispatch(setTotalFriends(data.totalCount));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const unfollowUser = (userId: number): AppThunk => async dispatch => {
    await followUnfollowFollow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);

};
export const followUser = (userId: number): AppThunk => async dispatch => {
    await followUnfollowFollow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
};
export const getShowingFriends = (): AppThunk => async dispatch => {
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.displayFriends();
    dispatch(toggleIsFetching(false));
    dispatch(setShowingFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));
};
