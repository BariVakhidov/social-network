import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        navbar: navbarReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducers);

window.store = store;
export default store;