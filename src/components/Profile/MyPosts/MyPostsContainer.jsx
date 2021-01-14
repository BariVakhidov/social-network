import {connect} from "react-redux";
import {addLikeAC, addPostAC, deletePostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (newText) => {
            dispatch(updateNewPostTextAC(newText));
        },

        addPost: () => {
            dispatch(addPostAC());
        },
        addLike: (postId) => {
            dispatch(addLikeAC(postId));
        },
        deletePost: (postId) => {
            dispatch(deletePostAC(postId));
        }
    };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer