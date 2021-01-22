import React from 'react';
import s from "./Users.module.css"
import userPhoto from '../../assets/images/pepe.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.pages}> {pages.slice(0, 10).map(p => {
                    return (<div key={p} className={props.currentPage === p && s.selectedPage || s.page} onClick={() => {
                        props.onPageChange(p)
                    }}>{p}</div>)
                }
            )}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={s.user}>
                    <div className={s.firstUserInfo}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div className={s.followButton}>
                            {u.followed ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollowUser(u.id, props.friendsCount);
                                                  }}>
                                    Unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.followUser(u.id, props.friendsCount);
                                          }}>
                                    Follow</button>}
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default Users;