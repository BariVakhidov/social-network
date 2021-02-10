import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getShowingFriends} from "./users-reducer";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    currentUser: null,
    captchaURL: null
}

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_CURRENT_USER = "social-network/auth/SET_CURRENT_USER";
const SET_CURRENT_USER_PHOTO = "social-network/auth/SET_CURRENT_USER_PHOTO";
const SET_CAPTCHA_URL = "social-network/auth/SET_CAPTCHA_URL";

export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
export const setCurrentUser = (profile) => ({type: SET_CURRENT_USER, profile});
export const setCurrentUserPhotos = (photos) => ({type: SET_CURRENT_USER_PHOTO, photos});
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url});

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
        case SET_CURRENT_USER_PHOTO:
            return {
                ...state,
                currentUser: {...state.currentUser, photos: action.photos}
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }
        default:
            return state;
    }

};

export default authReducer;

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, login, email, true));
        let response2 = await profileAPI.getProfile(id);
        dispatch(setCurrentUser(response2.data));
        dispatch(getShowingFriends());
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    debugger
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
        dispatch(stopSubmit("login", {_error: data.messages}));
    }
};

export const getCaptchaURL = () => async (dispatch) => {
    let captchaURL = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURL(captchaURL.url));
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};


