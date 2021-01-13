import React from 'react';
import s from "./Users.module.css"
import * as axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }
    return (
        <div>
            {props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.isFollow ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>

                    </span>
                </span>
                    </div>)}
        </div>
    );
};
export default Users;