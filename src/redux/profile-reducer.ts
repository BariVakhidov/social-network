import {profileAPI} from "../api/api";
import {Profile, setCurrentUserPhotos} from "./auth-reducer";
import profileImg from '../assets/images/profile.jpg'
import {Photos} from "./users-reducer";
import {AppThunk} from "./redux-store";

interface Post {
    id: number;
    name: string;
    userImage: string;
    postText: string;
    likesCount: number;
}

interface ProfileReducer {
    posts: Array<Post>;
    profile: Profile | null;
    status: string;
    showingUserId: null | number;
}

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
const ADD_POST = "social-network/profile/ADD_POST";
const DELETE_POST = "social-network/profile/DELETE_POST";
const ADD_LIKE = "social-network/profile/ADD_LIKE";
const SET_PROFILE = "social-network/profile/SET_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS";
const SET_SHOWING_USER_ID = "social-network/profile/SET_SHOWING_USER_ID";
const SAVE_PHOTO_SUCCESS = "social-network/profile/SAVE_PHOTO_SUCCESS"

interface AddPost {
    type:typeof ADD_POST;
    newText:string;
    photo: string;
}
interface DeletePost {
    type:typeof DELETE_POST;
    postId:number;
}
interface AddLike {
    type:typeof ADD_LIKE;
    postId:number;
}
interface SetUserProfile {
    type:typeof SET_PROFILE;
    profile:Profile;
}
interface SetStatus {
    type:typeof SET_STATUS;
    status:string;
}
interface SavePhotoSuccess {
    type:typeof SAVE_PHOTO_SUCCESS;
    photos: Photos;
}
interface SetShowingUserId {
    type:typeof SET_SHOWING_USER_ID;
    showingUserId:number;
}
type ProfileReducerActionType = AddPost | AddLike | DeletePost | SavePhotoSuccess | SetUserProfile |SetStatus | SetShowingUserId;

export const addPostAC = (newText:string, photo:string):ProfileReducerActionType => ({type: ADD_POST, newText, photo});
export const deletePost = (postId:number):ProfileReducerActionType => ({type: DELETE_POST, postId});
export const addLikeAC = (postId:number):ProfileReducerActionType => ({type: ADD_LIKE, postId});
export const setUserProfile = (profile:Profile):ProfileReducerActionType => ({type: SET_PROFILE, profile});
export const setStatus = (status:string):ProfileReducerActionType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos:Photos):ProfileReducerActionType => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setShowingUserId = (showingUserId:number):ProfileReducerActionType => ({type: SET_SHOWING_USER_ID, showingUserId});


const profileReducer = (state = initialState, action:ProfileReducerActionType):ProfileReducer => {
    switch (action.type) {
        case ADD_POST:
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
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: ++p.likesCount};
                    }
                    return p;
                })
            }
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case SAVE_PHOTO_SUCCESS:
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.photos}};
            }
            else return state;
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_SHOWING_USER_ID:
            return {
                ...state,
                showingUserId: action.showingUserId
            }
        default:
            return state;
    }

};

export default profileReducer;

export const getProfilePage = (userId:number): AppThunk => async (dispatch) => {
    dispatch(setShowingUserId(userId));
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    let response2 = await profileAPI.getStatus(userId);
    dispatch(setStatus(response2.data));
};
export const getStatus = (userId:number): AppThunk => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status:string): AppThunk => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
    catch (error) {
        alert(error.message);
    }
};

export const updateProfile = (profileData:object,userId:string):AppThunk=> async (dispatch) => {
    let response = await profileAPI.updateProfile(profileData);
    if (response.data.resultCode === 0) {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
    else return response.data.messages;
}
export const savePhoto = (file:any): AppThunk => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(setCurrentUserPhotos(response.data.data.photos));
    }
}