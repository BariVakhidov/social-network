import {friendsAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers/users-helper";

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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setShowingFriends = (friends) => ({type: SET_SHOWING_FRIENDS, friends});
export const setPage = () => ({type: SET_PAGE});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setFriendsCurrentPage = (pageNumber) => ({type: SET_FRIENDS_CURRENT_PAGE, pageNumber});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setTotalFriends = (totalFriends) => ({type: SET_TOTAL_FRIENDS, totalFriends});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

let initialState = {
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

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users,action.userId, "id", {followed: true}),
                    friends: updateObjectInArray(state.friends,action.userId, "id", {followed: true}),
                }
            );

        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: updateObjectInArray(state.users,action.userId, "id", {followed: false}),
                    friends: updateObjectInArray(state.friends,action.userId, "id", {followed: false})
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

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
    }
};

export const getFriends = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFriendsCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));

};
const followUnfollowFollow = async (dispatch, userId, apiMethod, actionCreator) =>  {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        let data = await friendsAPI.displayFriends();
        dispatch(setShowingFriends(data.items));
        dispatch(setTotalFriends(data.totalCount));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const unfollowUser = (userId) => async (dispatch) => {
   await followUnfollowFollow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);

};
export const followUser = (userId) => async (dispatch) => {
   await followUnfollowFollow(dispatch,userId,usersAPI.followUser.bind(usersAPI),followSuccess);
};
export const getShowingFriends = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await friendsAPI.displayFriends();
    dispatch(toggleIsFetching(false));
    dispatch(setShowingFriends(data.items));
    dispatch(setTotalFriends(data.totalCount));
};
