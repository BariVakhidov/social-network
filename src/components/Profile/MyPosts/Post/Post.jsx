import React from "react";
import s from './Posts.module.css';
import Like from "../../../common/Like/Like";
import StyledButton from "../../../common/StyledButton";
import cn from 'classnames'

const Post = (props) => {
    return (
        <div className={cn(!props.blackTheme ? s.post : s.postBlack)}>
            <div className={s.cont}>
                <div className={s.postInfo}>
                    <div>
                        <img className={s.userAvatar}
                             alt="user avatar"
                             src={props.userImg}/>
                        <div style={{fontWeight:"bold"}}>{props.name}</div>
                    </div>
                    <div className={s.postMessage}>
                        {props.postText}
                    </div>
                </div>
                <StyledButton className={s.delete} onClick={() => {
                    props.deletePost(props.id)
                }}>Delete
                </StyledButton>
            </div>
            <Like addLike={() => {
                props.addLike(props.id)
            }} likesCount={props.likesCount}/>
        </div>
    );
};

export default Post;
