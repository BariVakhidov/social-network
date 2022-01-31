import { Reducer } from 'redux';
import { ProfileReducer } from '../../types/intefaces';
import profileImg from '../../assets/images/profile.jpg'
import { ProfileActions } from './constants';
import {ProfileActionsType} from "./action-creators";

let initialState:Readonly<ProfileReducer> = {
    posts: [
        {
            id: 1,
            name: "Roman",
            userImage: profileImg,
            postText: "How are you?",
            likesCount: 5
        },
        {
            id: 2,
            name: "Andrew",
            userImage: profileImg,
            postText: "Hey",
            likesCount: 6
        },
        {
            id: 3,
            name: "Demin",
            userImage: profileImg,
            postText: "Go party",
            likesCount: 1
        },
    ],
    profile: null,
    status: "",
    showingUserId: null,
    isFetching: false,
}

const profileReducer:Reducer<ProfileReducer, ProfileActionsType> = (state = initialState, action) => {
    switch (action.type) {
        case ProfileActions.ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: "Bary",
                userImage: action.payload.photo,
                postText: action.payload.newText,
                likesCount: 0,
                comments: [],
                newCommentText: ""
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case ProfileActions.DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.payload)
            }
        case ProfileActions.ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.payload) {
                        return {...p, likesCount: ++p.likesCount};
                    }
                    return p;
                })
            }
        case ProfileActions.SET_PROFILE:
            return {...state, profile: action.payload};
        case ProfileActions.SAVE_PHOTO_SUCCESS:
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.payload}};
            }
            else return state;
        case ProfileActions.SET_STATUS:
            return {...state, status: action.payload}
        case ProfileActions.SET_FETCHING:
            return {...state, isFetching: !state.isFetching}
        case ProfileActions.SET_SHOWING_USER_ID:
            return {
                ...state,
                showingUserId: action.payload
            }
        default:
            return state;
    }

};

export default profileReducer;

