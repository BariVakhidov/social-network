import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false,
    blackTheme: false,
    isVisible: false
}

const INITIALIZED_SUCCESS = "social-network/appINITIALIZED_SUCCESS";
const BLACK_THEME = "social-network/app/BLACK_THEME";
const SET_NAV_VISIBLE = "social-network/app/SET_NAV_VISIBLE";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const isBlackTheme = (blackTheme) => ({type: BLACK_THEME, blackTheme});
export const setNavVisible = (visible) => ({type: SET_NAV_VISIBLE, visible});

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case BLACK_THEME:
            return {
                ...state,
                blackTheme: action.blackTheme
            }
        case SET_NAV_VISIBLE:
            return {
                ...state,
                isVisible: action.visible
            }
        default:
            return state;
    }

};

export default appReducer;

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};


