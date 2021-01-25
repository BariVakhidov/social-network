import {connect} from "react-redux";
import {addLikeAC, addPostAC, deletePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostContainer = connect(mapStateToProps, {addLikeAC, addPostAC,deletePostAC})(MyPosts);

export default MyPostContainer