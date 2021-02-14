import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import StyledButton from "../../common/StyledButton";
import photo from "../../../assets/images/profile.jpg"
import {Formik, Form, Field, ErrorMessage} from 'formik';


const NewPostForm = (props) => {
    let userPhoto = photo;
    if (props.currentUser) {
        userPhoto = props.currentUser.photos.small ? props.currentUser.photos.small : photo;
    }
    return (
        <Formik
            initialValues={{post: ''}}
            validate={values => {
                const errors = {};
                if (!values.post) {
                    errors.post = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting, setFieldValue}) => {
                props.addPost(values.post, userPhoto);
                setSubmitting(false);
                setFieldValue("post", "", false)
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <Field placeholder="New post" type="post" name="post" component={"textarea"}/>
                    <ErrorMessage className={s.error} name="post" component="div"/>
                    <StyledButton type="submit" disabled={isSubmitting}>
                        Submit
                    </StyledButton>
                </Form>
            )}
        </Formik>
    );
};

const MyPosts = React.memo(props => {
    let posts = props.posts.map(p => <Post id={p.id}
                                           name={p.name}
                                           userImg={p.userImage}
                                           postText={p.postText}
                                           likesCount={p.likesCount}
                                           addLike={props.addLikeAC}
                                           deletePost={props.deletePost}
                                           key={p.id}
                                           blackTheme={props.blackTheme}/>);


    let [postsVisible, setPostsVisible] = useState(false);
    return (
        <div className={s.myPosts}>
            <div className={s.myPostsTitle} onClick={() => setPostsVisible(!postsVisible)}>My posts</div>
            {postsVisible && <>
                <NewPostForm addPost={props.addPostAC} currentUser={props.currentUser}/>
                <div className={s.posts}>
                    {posts}
                </div>
            </>}
        </div>
    );
});

export default MyPosts;
