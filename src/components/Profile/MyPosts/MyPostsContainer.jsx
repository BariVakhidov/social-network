import React from "react";
import Post from "./Post/Post";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;
    let store = props.store;

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    };
    let updateNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    };
    let addLike = (id) => {
      store.dispatch(addLikeActionCreator(id));
    };

    return (
        <MyPosts
            posts={state.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addLike={addLike}
        />
    );
};

export default MyPostsContainer;
