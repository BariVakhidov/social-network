import {loginAPI, profileAPI} from "../api/api";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    currentUser: null,
    loginInformation: null
}

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_LOGIN_INFORMATION = "SET_LOGIN_INFORMATION";

export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const setCurrentUser = (profile) => ({type: SET_CURRENT_USER, profile});
export const setLoginInformation = (loginInformation) => ({type: SET_LOGIN_INFORMATION, loginInformation});


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
        case SET_LOGIN_INFORMATION:
            return {
                ...state,
                loginInformation: action.loginInformation
            }
        default:
            return state;
    }

};

export default authReducer;

export const auth = () => (dispatch) => {
    loginAPI.loginMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
           dispatch(setUserData(id, login, email));
            profileAPI.getProfile(id).then(response => {
                dispatch(setCurrentUser(response.data));
            });
        }

    });
};

export const login = (loginInformation) => (dispatch) => {
    loginAPI.auth(loginInformation).then(data => {
        if (data.resultCode === 0) {
            dispatch(setLoginInformation(loginInformation));
            alert("Successful login");
        }

    });
}