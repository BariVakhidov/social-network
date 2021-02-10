import {profileAPI} from "../api/api";
import {setCurrentUserPhotos} from "./auth-reducer";

let initialState = {
    posts: [
        {
            id: 1,
            name: "Roman",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Ok, see you",
            likesCount: 5
        },
        {
            id: 2,
            name: "Andrew",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Hey",
            likesCount: 6
        },
        {
            id: 3,
            name: "Demin",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Nigga",
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
const LIKE_COMMENT = "social-network/profile/LIKE_COMMENT";
const SET_PROFILE = "social-network/profile/SET_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS";
const SET_SHOWING_USER_ID = "social-network/profile/SET_SHOWING_USER_ID";
const SAVE_PHOTO_SUCCESS = "social-network/profile/SAVE_PHOTO_SUCCESS"

export const addPostAC = (newText) => ({type: ADD_POST, newText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const addLikeAC = (postId) => ({type: ADD_LIKE, postId});
export const likeCommentAC = (commentId) => ({type: LIKE_COMMENT, commentId});
export const setUserProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setShowingUserId = (showingUserId) => ({type: SET_SHOWING_USER_ID, showingUserId});


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: "Bary",
                userImage: "https://media.pri.org/s3fs-public/styles/open_graph/public/story/images/Crying-Frog-Meme-06.jpg?itok=79C7E-DY",
                postText: action.newText,
                likesCount: 0,
                comments: [],
                newCommentText: ""
            };
            return {
                ...state,
                newPostText: "",
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
            return {...state, profile: {...state.profile, photos: action.photos}};
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

export const getProfilePage = (userId) => async (dispatch) => {
    dispatch(setShowingUserId(userId));
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    let response2 = await profileAPI.getStatus(userId);
    dispatch(setStatus(response2.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const updateProfile = (profileData,userId) => async (dispatch) => {
    let response = await profileAPI.updateProfile(profileData);
    if (response.data.resultCode === 0) {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
    else return response.data.messages;
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(setCurrentUserPhotos(response.data.data.photos));
    }
}