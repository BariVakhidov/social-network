import React from 'react';
import s from "./Users.module.css"
import userPhoto from '../../assets/images/pepe.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingProgress, unfollowUser, friendsCount, followUser}) => {
    return (
        <div className={s.user}>
            <div className={s.firstUserInfo}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div className={s.followButton}>
                    {user.followed ? <button disabled={followingProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollowUser(user.id, friendsCount);
                                          }}>
                            Unfollow</button>
                        : <button disabled={followingProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      followUser(user.id, friendsCount);
                                  }}>
                            Follow</button>}
                </div>
            </div>
            <div className={s.userInfo}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>)
}

export default User;