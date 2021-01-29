import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {showingFriends} from "./navbar-reducer";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    currentUser: null,
}

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email,isAuth}});
export const setCurrentUser = (profile) => ({type: SET_CURRENT_USER, profile});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
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

export const getAuthUserData = () => (dispatch) => {
   return  authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
            profileAPI.getProfile(id).then(response => {
                dispatch(setCurrentUser(response.data));
            });
            dispatch(showingFriends());
        }

    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else {
            dispatch(stopSubmit("login", {_error: data.messages}));
        }
    });
};
export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

