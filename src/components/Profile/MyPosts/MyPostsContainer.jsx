import {connect} from "react-redux";
import {addLikeAC, addPostAC, deletePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        currentUser: state.auth.currentUser
    }
};

const MyPostContainer = connect(mapStateToProps, {addLikeAC, addPostAC,deletePost})(MyPosts);

export default MyPostContainer