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
                newCommentText :""
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
                newCommentText :""
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
                newCommentText :""
            },
        ],
        newPostText: "",
}
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE = "ADD_LIKE";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const LIKE_COMMENT = "LIKE_COMMENT";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE_NEW_COMMENT_TEXT";


export const addPostAC = () => ({type:ADD_POST});
export const deletePostAC = (postId) => ({type:DELETE_POST, postId});
export const addLikeAC = (postId) => ({type:ADD_LIKE, postId});
export const addCommentAC = () => ({type:ADD_COMMENT});
export const deleteCommentAC = () => ({type:DELETE_COMMENT});
export const likeCommentAC = (commentId) => ({type:LIKE_COMMENT, commentId});
export const updateNewPostTextAC = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText});



const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length+1,
                name: "Bary",
                userImage: "https://media.pri.org/s3fs-public/styles/open_graph/public/story/images/Crying-Frog-Meme-06.jpg?itok=79C7E-DY",
                postText: state.newPostText,
                likesCount: 0,
                comments: [
                ],
                newCommentText :""
            };
        return {
            ...state,
            newPostText: "",
            posts: [...state.posts, newPost]
        };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.map(
                    p => {
                        if (p.id === action.postId) {
                            return {...p, name: "DELETED"};
                        }
                        return p;
                    }
                )
            }
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: ++p.likesCount};
                    };
                    return p;
                })
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    };

};

export default profileReducer;