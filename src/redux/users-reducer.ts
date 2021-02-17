import {friendsAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers/users-helper";
import {ThunkAction} from "redux-thunk";

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
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

export interface User {
    id: number;
    name: string;
    status: null | string;
    photos: {
        small: string | null;
        large: string | null;
    };
    followed: boolean;
}

interface FollowSuccessAction {
    type: typeof FOLLOW
    userId: number
}

interface UnfollowSuccessAction {
    type: typeof UNFOLLOW
    userId: number
}

interface SetUsersAction {
    type: typeof SET_USERS
    users: Array<User>
}

interface SetFriends {
    type: typeof SET_FRIENDS
    friends: Array<User>
}

interface SetShowingFriends {
    type: typeof SET_SHOWING_FRIENDS
    friends: Array<User>
}

interface SetPage {
    type: typeof SET_PAGE
}

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}

interface SetFriendsCurrentPage {
    type: typeof SET_FRIENDS_CURRENT_PAGE,
    pageNumber: number
}

interface SetTotalUsers {
    type: typeof SET_TOTAL_USERS,
    totalUsers: number
}

interface SetTotalFriends {
    type: typeof SET_TOTAL_FRIENDS,
    totalFriends: number
}

interface ToggleIsFetching {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

interface ToggleFollowingProgress {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

type Actions =
    | FollowSuccessAction
    | UnfollowSuccessAction
    | SetUsersAction
    | SetFriends
    | SetCurrentPage
    | SetFriendsCurrentPage
    | SetPage
    | SetShowingFriends
    | SetTotalFriends
    | ToggleIsFetching
    | SetTotalUsers
    | ToggleFollowingProgress;

export const followSuccess = (userId: number): Actions => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId: number): Actions => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users: Array<User>): Actions => ({type: SET_USERS, users: users});
export const setFriends = (friends: Array<User>): Actions => ({type: SET_FRIENDS, friends: friends});
export const setShowingFriends = (friends: Array<User>): Actions => ({type: SET_SHOWING_FRIENDS, friends});
export const setPage = (): Actions => ({type: SET_PAGE});
export const setCurrentPage = (pageNumber: number): Actions => ({type: SET_CURRENT_PAGE, pageNumber});
export const setFriendsCurrentPage = (pageNumber: number): Actions => ({type: SET_FRIENDS_CURRENT_PAGE, pageNumber});
export const setTotalUsers = (totalUsers: number): Actions => ({type: SET_TOTAL_USERS, totalUsers});
export const setTotalFriends = (totalFriends: number): Actions => ({type: SET_TOTAL_FRIENDS, totalFriends});
export const toggleIsFetching = (isFetching: boolean): Actions => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): Actions => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

interface UsersState {
    users: Array<User>;
    friends: Array<User>;
    totalUsers: number;
    totalFriends: number;
    pageSize: number;
    currentPage: number;
    friendsCurrentPage: number;
    isFetching: boolean;
    followingProgress: Array<number>;
    showingFriends: Array<User>;
}

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

const usersReducer = (state: UsersState = initialState, action: Actions): UsersState => {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
                    friends: updateObjectInArray(state.friends, action.userId, "id", {followed: true}),
                }
            );

        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
                    friends: updateObjectInArray(state.friends, action.userId, "id", {followed: false})
                }
            );
        case SET_PAGE:
            return {...state, currentPage: 1}
        case SET_USERS:
            return {...state, users: action.users};
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case SET_SHOWING_FRIENDS:
            return {
                ...state, showingFriends: action.friends
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_FRIENDS_CURRENT_PAGE:
            return {...state, friendsCurrentPage: action.pageNumber};
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers};
        case SET_TOTAL_FRIENDS:
            return {...state, totalFriends: action.totalFriends};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: (action: Actions) => void) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
    }
};

export const getFriends = (currentPage: number, pageSize: number): ThunkAction<void, unknown, unknown, Actions> => async dispatch => {
    dispatch(setFriendsCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));

};
const followUnfollowFollow = async (dispatch: (action: Actions) => void, userId: number, apiMethod: (userId:number) => void, actionCreator: (userId:number) => Actions) => {
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

export const unfollowUser = (userId: number):ThunkAction<void, unknown, unknown, Actions> => async dispatch => {
    await followUnfollowFollow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);

};
export const followUser = (userId: number):ThunkAction<void, unknown, unknown, Actions> => async dispatch => {
    await followUnfollowFollow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
};
export const getShowingFriends = ():ThunkAction<void, unknown, unknown, Actions> => async dispatch => {
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.displayFriends();
    dispatch(toggleIsFetching(false));
    dispatch(setShowingFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));
};
