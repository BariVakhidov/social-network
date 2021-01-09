import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   likes={p.likes}
                                                   dispatch={props.dispatch}
                                                   id={p.id}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    console.log(props.newPostText);
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} placeholder="Type new post"/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
