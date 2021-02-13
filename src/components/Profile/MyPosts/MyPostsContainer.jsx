import {connect} from "react-redux";
import {addLikeAC, addPostAC, deletePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photo: state.auth.currentUser.photos.small
    }
};

const MyPostContainer = connect(mapStateToProps, {addLikeAC, addPostAC,deletePost})(MyPosts);

export default MyPostContainer