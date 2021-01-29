import React from "react";
import s from "./Nav.module.css";
import Friends from "./Friend/Friends";

const PartOfFriends = props => {
    if (props.isAuth) {
        return (
            <div>
                <div>{props.friendsCount}</div>
                <div className={s.friendsItems}>
                    {props.friends.map(f => <Friends name={f.name} id={f.id} image={f.photos.small} key={f.id}/>)}
                </div>
                <div>
                    <button>Show more</button>
                </div>
            </div>
        );
    }
    else return <div>0</div>
}
export default PartOfFriends;