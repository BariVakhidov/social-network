import {profileAPI} from "../api/api";

let initialState = {
    posts: [
        {
            id: 1,
            name: "Roman",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Ok, see you",
            likesCount: 5,
            comments: [
                {
                    id: 1,
                    name: "Bary",
                    userImage: "https://pyxis.nymag.com/v1/imgs/618/0a9/d04d34a833c6656c02dc608d1adc0d563a-iCim4eXE-400x400.rsquare.w330.jpg",
                    postText: "How are u",
                    likesCount: 5
                }
            ],
            newCommentText: ""
        },
        {
            id: 2,
            name: "Andrew",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Hey",
            likesCount: 6,
            comments: [
                {
                    id: 2,
                    name: "Demin",
                    userImage: "https://pyxis.nymag.com/v1/imgs/618/0a9/d04d34a833c6656c02dc608d1adc0d563a-iCim4eXE-400x400.rsquare.w330.jpg",
                    postText: "ahhhhahaakjn,m",
                    likesCount: 4
                }
            ],
            newCommentText: ""
        },
        {
            id: 3,
            name: "Demin",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Nigga",
            likesCount: 1,
            comments: [
                {
                    id: 3,
                    name: "Bary",
                    userImage: "https://pyxis.nymag.com/v1/imgs/618/0a9/d04d34a833c6656c02dc608d1adc0d563a-iCim4eXE-400x400.rsquare.w330.jpg",
                    postText: "Sup",
                    likesCount: 0
                }
            ],
            newCommentText: ""
        },
    ],
    newPostText: '',
    profile: null,
    status: ""
}
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE = "ADD_LIKE";
const LIKE_COMMENT = "LIKE_COMMENT";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";


export const addPostAC = () => ({type: ADD_POST});
export const deletePostAC = (postId) => ({type: DELETE_POST, postId});
export const addLikeAC = (postId) => ({type: ADD_LIKE, postId});
export const likeCommentAC = (commentId) => ({type: LIKE_COMMENT, commentId});
export const updateNewPostTextAC = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: "Bary",
                userImage: "https://media.pri.org/s3fs-public/styles/open_graph/public/story/images/Crying-Frog-Meme-06.jpg?itok=79C7E-DY",
                postText: state.newPostText,
                likesCount: 0,
                comments: [],
                newCommentText: ""
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_PROFILE:
            return {...state,  profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }

};

export default profileReducer;

export const getProfilePage = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}