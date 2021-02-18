import {authAPI, profileAPI, securityAPI} from "../api/api";
import {getShowingFriends, Photos} from "./users-reducer";
import {AppThunk} from "./redux-store";

export interface Contacts {
    github: (string);
    vk: (string);
    facebook: (string);
    instagram: (string);
    twitter: (string);
    website: (string);
    youtube: (string);
    mainLink: (string);
}

export interface Profile {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    contacts: Contacts;
    photos: Photos;
}

interface AuthReducer {
    userId: number | null;
    login: null | string;
    email: null | string;
    isAuth: boolean;
    currentUser: Profile | null,
    captchaURL: null | string
}

let initialState: AuthReducer = {
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

interface Payload {
    userId: number | null;
    login: string | null;
    email: string | null;
    isAuth: boolean;
}

interface SetUserData {
    type: typeof SET_USER_DATA;
    payload: Payload;
}

interface SetCurrentUser {
    type: typeof SET_CURRENT_USER;
    profile: Profile;
}

interface SetCurrentUserPhotos {
    type: typeof SET_CURRENT_USER_PHOTO;
    photos: Photos;
}

interface SetCaptchaURL {
    type: typeof SET_CAPTCHA_URL;
    url: string | null;
}

type AuthReducerActionTypes = SetUserData | SetCurrentUser | SetCurrentUserPhotos | SetCaptchaURL;

export const setUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): AuthReducerActionTypes => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
export const setCurrentUser = (profile: Profile): AuthReducerActionTypes => ({type: SET_CURRENT_USER, profile});
export const setCurrentUserPhotos = (photos: Photos): AuthReducerActionTypes => ({
    type: SET_CURRENT_USER_PHOTO,
    photos
});
export const setCaptchaURL = (url: string | null): AuthReducerActionTypes => ({type: SET_CAPTCHA_URL, url});

const authReducer = (state:AuthReducer = initialState, action: AuthReducerActionTypes):AuthReducer => {
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
           if (state.currentUser != null) {
               return {
                   ...state,
                   currentUser: {...state.currentUser, photos: action.photos}
               }
           }
           else  return state;
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

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, login, email, true));
        let response2 = await profileAPI.getProfile(id);
        dispatch(setCurrentUser(response2.data));
        dispatch(getShowingFriends());
    }
};

export const login = (loginData: object): AppThunk => async (dispatch) => {
    let data = await authAPI.login(loginData);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
        return data.messages
    }
};

export const getCaptchaURL = (): AppThunk => async (dispatch) => {
    let captchaURL = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURL(captchaURL.url));
};

export const logout = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
        dispatch(setCaptchaURL(null))
    }
};


