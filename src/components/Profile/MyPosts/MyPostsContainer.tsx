import {connect} from "react-redux";
import {addLikeAC, addPostAC, deletePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";

let mapStateToProps = (state:RootState) => {
    return {
        posts: state.profilePage.posts,
        currentUser: state.auth.currentUser
    }
};

const MyPostContainer = connect(mapStateToProps, {addLikeAC, addPostAC,deletePost})(MyPosts);

export default MyPostContainer