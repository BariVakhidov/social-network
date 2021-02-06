import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false,
    blackTheme: false
}

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const BLACK_THEME = "BLACK_THEME";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const isBlackTheme = (blackTheme) => ({type: BLACK_THEME, blackTheme});

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


