import React from "react";
import s from "./Like.module.css";

interface Props {
    addLike: () => void;
    likesCount: number;
}

const Like: React.FC<Props> = ({addLike, likesCount}) => {
    return (
        <div className={s.like}>
            <button onClick={addLike}>
                <img className={s.likeLogo} alt="like button" src='https://cdn.worldvectorlogo.com/logos/like-2.svg'
                     title='Like'/>
            </button>
            <span>{likesCount}</span>
        </div>
    );
}
export default Like;