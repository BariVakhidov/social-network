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
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };
        case ADD_LIKE:
            return ({
                    ...state,
                    posts: state.posts.map(p => {
                        if (p.id === action.id) {
                            let likesCount = p.likes;
                            return {...p, likes: ++likesCount}
                        }
                        return p;
                    })
                });
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};
export default profileReducer;