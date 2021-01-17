import React from 'react';
import s from "./Users.module.css"
import userPhoto from '../../assets/images/pepe.png'

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
                            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div className={s.followButton}>
                            {u.isFollow ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
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