import React from "react";
import s from './Posts.module.css';
import StyledButton from "../../../common/StyledButton";
import cn from 'classnames'
import Like from "../../../common/Like/Like";

interface Props {
    blackTheme:boolean;
    userImg: string;
    name:string;
    postText:string;
    id:number;
    deletePost: (id:number)=>void;
    likesCount:number;
    addLike: (postId:number)=>void;
}

const PostComponent:React.FC<Props> = ({blackTheme, name, id, deletePost, likesCount,addLike, postText, userImg}) => {
    return (
        <div className={cn(!blackTheme ? s.post : s.postBlack)}>
            <div className={s.cont}>
                <div className={s.postInfo}>
                    <div>
                        <img className={s.userAvatar}
                             alt="user avatar"
                             src={userImg}/>
                        <div style={{fontWeight:"bold"}}>{name}</div>
                    </div>
                    <div className={s.postMessage}>
                        {postText}
                    </div>
                </div>
                <StyledButton className={s.delete} onClick={() => {
                    deletePost(id)
                }}>Delete
                </StyledButton>
            </div>
            <Like addLike={() => {
                addLike(id)
            }} likesCount={likesCount}/>
        </div>
    );
};

export default PostComponent;
