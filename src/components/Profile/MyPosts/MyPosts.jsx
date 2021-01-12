import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   likes={p.likes}
                                                   addLike={props.addLike}
                                                   id={p.id}
                                                   key={p.id}/>);

    let onAddPostClick = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
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
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
