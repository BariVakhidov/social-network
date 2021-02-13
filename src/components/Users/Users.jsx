import React from 'react';
import s from "./Users.module.css"
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({currentPage, totalUsers, onPageChange, pageSize, users, ...props}) => {
    return (
        <div>
            <Pagination isMobile={props.isMobile} currentPage={currentPage} totalUsers={totalUsers} onPageChange={onPageChange}
                        pageSize={pageSize}/>
            <div>
                {users.map(u =>
                    <User key={u.id} className={s.user} user={u}
                          followingProgress={props.followingProgress}
                          unfollowUser={props.unfollowUser}
                          followUser={props.followUser}/>)}
            </div>
        </div>
    )
}

export default Users;