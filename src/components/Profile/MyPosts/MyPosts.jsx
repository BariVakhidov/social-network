import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControl";
import StyledButton from "../../common/StyledButton";

const maxLength10 = maxLength(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"New post"} name={"newPost"} component={TextArea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <StyledButton>Add post</StyledButton>
            </div>
        </form>
    );
};
const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

const MyPosts = React.memo(props => {
    let posts = props.posts.map(p => <Post id={p.id}
                                           name={p.name}
                                           userImg={p.userImage}
                                           postText={p.postText}
                                           likesCount={p.likesCount}
                                           addLike={props.addLikeAC}
                                           deletePost={props.deletePost}
                                           key={p.id}/>);

    const onSubmit = (formData) => {
        props.addPostAC(formData.newPost, props.photo);
    }
    let [postsVisible, setPostsVisible] = useState(false);
    return (
        <div className={s.myPosts}>
            <div className={s.myPostsTitle} onClick={() => setPostsVisible(!postsVisible)}>My posts</div>
            {postsVisible && <>
                <NewPostReduxForm onSubmit={onSubmit}/>
                <div className={s.posts}>
                    {posts}
                </div>
            </>}
        </div>
    );
});

export default MyPosts;
