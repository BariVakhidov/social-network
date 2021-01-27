import {usersAPI} from "../api/api";
import {setFriendsCount} from "./navbar-reducer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching, userId})

let initialState = {
    users: [],
    totalUsers: 33,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true};
                        }
                        return u;
                    })
                }
            );
        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                            if (u.id === action.userId) {
                                return {...u, followed: false};
                            }
                            return u;
                        }
                    )
                }
            );
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress,action.userId]
        :state.followingProgress.filter(id => id !== action.userId)
                }
        default:
            return state;
    }
};
export default usersReducer;

export const getUsers = (currentPage,pageSize, isFriend) => (dispatch) => {
   dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize, isFriend).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));

    });
};
export const unfollowUser = (userId, friendsCount) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
            dispatch(setFriendsCount(friendsCount-1));
        }
       dispatch(toggleFollowingProgress(false,userId));
    })
};

export const followUser = (userId,friendsCount) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
            dispatch(setFriendsCount(friendsCount+1));
        }
        dispatch(toggleFollowingProgress(false,userId));
    })
};
