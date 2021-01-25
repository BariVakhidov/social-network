import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"New post"} name={"newPost"} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post id={p.id}
                                           name={p.name}
                                           userImg={p.userImage}
                                           postText={p.postText}
                                           likesCount={p.likesCount}
                                           comments={p.comments}
                                           addLike={props.addLikeAC}
                                           deletePost={props.deletePost}
                                           key={p.id}/>);

    const onSubmit = (formData)=> {
        console.log(formData);
        props.addPostAC(formData.newPost);
    }

    console.log(props.newPostText);
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;
