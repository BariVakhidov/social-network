let initialState = {
    friends: []
};
const SET_FRIENDS = "SET_FRIENDS";
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            };
        default:
            return state;
    }
}
export default navbarReducer;