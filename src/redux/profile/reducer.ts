import { Reducer } from 'redux';
import { ProfileReducer } from '../../types/intefaces';
import profileImg from '../../assets/images/profile.jpg'
import { ProfileReducerActionType } from './action-types';
import { Actions } from './constants';

let initialState:ProfileReducer = {
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
    showingUserId: null
}

const profileReducer:Reducer<ProfileReducer, ProfileReducerActionType> = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: "Bary",
                userImage: action.photo,
                postText: action.newText,
                likesCount: 0,
                comments: [],
                newCommentText: ""
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case Actions.DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        case Actions.ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: ++p.likesCount};
                    }
                    return p;
                })
            }
        case Actions.SET_PROFILE:
            return {...state, profile: action.profile};
        case Actions.SAVE_PHOTO_SUCCESS:
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.photos}};
            }
            else return state;
        case Actions.SET_STATUS:
            return {...state, status: action.status}
        case Actions.SET_SHOWING_USER_ID:
            return {
                ...state,
                showingUserId: action.showingUserId
            }
        default:
            return state;
    }

};

export default profileReducer;

