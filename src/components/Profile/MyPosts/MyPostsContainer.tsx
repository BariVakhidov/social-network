import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";
import {useAppSelector} from "../../../redux/redux-store";
import {FC, memo} from "react";
import {profileActions} from "../../../redux/profile/action-creators";
import {AddPostPayload} from "../../../redux/profile/types";

interface Props {
    blackTheme: boolean;
}

export const MyPostsContainer: FC<Props> = memo(({blackTheme}) => {
    const posts = useAppSelector(state => state.profilePage.posts);
    const currentUser = useAppSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();

    const addLike = (payload: number) => dispatch(profileActions.addLikeAC(payload));
    const addPost = (payload: AddPostPayload) => dispatch(profileActions.addPostAC(payload));
    const deletePost = (payload: number) => dispatch(profileActions.deletePost(payload));


    return <MyPosts posts={posts} currentUser={currentUser} addLike={addLike} addPost={addPost}
                    deletePost={deletePost} blackTheme={blackTheme} />
})
