let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    currentUser: null
}

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const setCurrentUser = (profile) => ({type: SET_CURRENT_USER, profile});


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.profile
            }
        default:
            return state;
    }

};

export default authReducer;