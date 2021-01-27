import React from "react";
import s from './Posts.module.css';
import {Button} from "../../../../MainButton";

const Post = (props) => {

    let addLike = () => {
        props.addLike(props.id);
    };

    return (
        <div className={s.post}>
            <div className={s.cont}>
                <div>
                    <img className={s.userAvatar}
                         alt="user avatar"
                         src={props.userImg}/>
                    <div>{props.name}</div>
                </div>
                <div className={s.postMessage}>
                    {props.postText}
                </div>
            </div>
            <div className={s.like}>
                <Button onClick={addLike}>
                    <img className={s.likeLogo} alt="like button" src='https://cdn.worldvectorlogo.com/logos/like-2.svg'
                         title='Like'/>
                </Button>
                <span className="like"> likes: </span>{props.likesCount}
            </div>

        </div>
    );
};

export default Post;
