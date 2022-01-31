import React, {FC, useState} from "react";
import s from "./MyPosts.module.css";
import PostComponent from "./Post/PostComponent";
import {Post, Profile} from "../../../types/intefaces";
import {AddPostPayload} from "../../../redux/profile/types";
import { NewPostForm } from "./NewPostForm";

interface Props {
    posts: Post[],
    deletePost: (payload: number) => void,
    addLike: (payload: number) => void,
    addPost: (payload: AddPostPayload) => void,
    currentUser: Profile | null,
    blackTheme: boolean
}

export const MyPosts: FC<Props> = React.memo(({posts, deletePost, addLike, addPost, currentUser, blackTheme}) => {
    const [postsVisible, setPostsVisible] = useState(false);
    return (
        <div className={s.myPosts}>
            <div
                className={s.myPostsTitle}
                onClick={() => setPostsVisible(!postsVisible)}
            >
                Posts
            </div>
            {postsVisible && (
                <>
                    <NewPostForm
                        addPost={addPost}
                        currentUser={currentUser}
                    />
                    <div className={s.posts}>{posts.map((p) => (
                        <PostComponent
                            id={p.id}
                            name={p.name}
                            userImg={p.userImage}
                            postText={p.postText}
                            likesCount={p.likesCount}
                            addLike={addLike}
                            deletePost={deletePost}
                            key={p.id}
                            blackTheme={blackTheme}
                        />
                    ))}</div>
                </>
            )}
        </div>
    );
});
