const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-MESSAGE";
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});
export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id: id});

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It is my firs post", likes: 45},
        {id: 3, message: "Hi, how are you?", likes: 5},
        {id: 4, message: "Hi, how are you?", likes: 15}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case ADD_LIKE:
            state.posts[action.id - 1].likes++;
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};
export default profileReducer;