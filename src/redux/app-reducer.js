import {getAuthUserData} from "./auth-reducer";

let initialState = {
   initialized: false
}

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
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


