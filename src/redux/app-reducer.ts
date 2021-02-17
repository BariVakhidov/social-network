import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";

interface AppReducer {
    initialized: boolean;
    blackTheme: boolean;
    isVisible: boolean;
}

let initialState: AppReducer = {
    initialized: false,
    blackTheme: false,
    isVisible: false
}

interface InitializedSuccess {
    type: typeof INITIALIZED_SUCCESS
}
interface IsBlackTheme {
    type: typeof BLACK_THEME;
    blackTheme: boolean
}
interface SetNavVisible {
    type: typeof SET_NAV_VISIBLE;
    visible: boolean
}

type AppActions = InitializedSuccess | IsBlackTheme | SetNavVisible;

const INITIALIZED_SUCCESS = "social-network/appINITIALIZED_SUCCESS";
const BLACK_THEME = "social-network/app/BLACK_THEME";
const SET_NAV_VISIBLE = "social-network/app/SET_NAV_VISIBLE";

export const initializedSuccess = ():AppActions => ({type: INITIALIZED_SUCCESS});
export const isBlackTheme = (blackTheme: boolean):AppActions => ({type: BLACK_THEME, blackTheme});
export const setNavVisible = (visible: boolean):AppActions => ({type: SET_NAV_VISIBLE, visible});

const appReducer = (state:AppReducer = initialState, action: AppActions) => {
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

export const initializeApp = ():ThunkAction<void, unknown, unknown, AppActions> => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};


