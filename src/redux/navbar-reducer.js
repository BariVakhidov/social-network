import {friendsAPI} from "../api/api";

let initialState = {
    friends: [],
    friendsCount: 0
};
const SET_FRIENDS = "SET_FRIENDS";
const SET_FRIENDS_COUNT = "SET_FRIENDS_COUNT";
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setFriendsCount = (friendsCount) => ({type: SET_FRIENDS_COUNT, friendsCount});

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            };
        case SET_FRIENDS_COUNT:
            return {
                ...state,
                friendsCount: action.friendsCount
            }
        default:
            return state;
    }
}
export default navbarReducer;

export const showingFriends = () => (dispatch) => {
    friendsAPI.displayFriends().then(data => {
        dispatch(setFriendsCount(data.totalCount));
        dispatch(setFriends(data.items));
    });
}