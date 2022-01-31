import React, {FC, memo} from "react";
import photo from "../../../assets/images/profile.jpg";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from "./MyPosts.module.css";
import StyledButton from "../../common/StyledButton";
import {Profile} from "../../../types/intefaces";
import {AddPostPayload} from "../../../redux/profile/types";

interface Props {
    currentUser: Profile | null;
    addPost: (payload: AddPostPayload) => void;
}

export const NewPostForm: FC<Props> = memo(({addPost, currentUser}) => {
    let userPhoto = photo;
    if (currentUser) {
        userPhoto = currentUser.photos.small
            ? currentUser.photos.small
            : photo;
    }
    return (
        <Formik
            initialValues={{post: ""}}
            validate={(values) => {
                const errors = {} as { post: string };
                if (!values.post) {
                    errors.post = "Required";
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting, setFieldValue}) => {
                addPost({newText: values.post, photo: userPhoto});
                setSubmitting(false);
                setFieldValue("post", "", false);
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <Field
                        placeholder='New post'
                        type='post'
                        name='post'
                        component={"textarea"}
                    />
                    <ErrorMessage className={s.error} name='post' component='div' />
                    <StyledButton type='submit' disabled={isSubmitting}>
                        Add post
                    </StyledButton>
                </Form>
            )}
        </Formik>
    );
});
