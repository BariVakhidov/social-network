import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post id={p.id}
                                           name={p.name}
                                           userImg={p.userImage}
                                           postText={p.postText}
                                           likesCount={p.likesCount}
                                           comments={p.comments}
                                           addLike={props.addLike}
                                           deletePost={props.deletePost}/>);

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateText(text);
    };

    let onAddPostClick = () => {
        props.addPost();
    }


    console.log(props.newPostText);
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea placeholder="Type new post" value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;
