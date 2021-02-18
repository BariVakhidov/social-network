import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

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

type AppActionTypes = InitializedSuccess | IsBlackTheme | SetNavVisible;

const INITIALIZED_SUCCESS = "social-network/appINITIALIZED_SUCCESS";
const BLACK_THEME = "social-network/app/BLACK_THEME";
const SET_NAV_VISIBLE = "social-network/app/SET_NAV_VISIBLE";

export const initializedSuccess = (): AppActionTypes => ({type: INITIALIZED_SUCCESS});
export const isBlackTheme = (blackTheme: boolean): AppActionTypes => ({type: BLACK_THEME, blackTheme});
export const setNavVisible = (visible: boolean): AppActionTypes => ({type: SET_NAV_VISIBLE, visible});

const appReducer = (state = initialState, action: AppActionTypes): AppReducer => {
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

export const initializeApp = ():AppThunk => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
};


