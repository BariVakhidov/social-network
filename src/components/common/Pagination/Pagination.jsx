import React from 'react';
import s from "../../Users/Users.module.css"

    const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pages}> {pages.slice(0, 10).map(p => {
                return (<div key={p} className={props.currentPage === p && s.selectedPage || s.page} onClick={() => {
                    props.onPageChange(p)
                }}>{p}</div>)
            }
        )}
        </div>
    )
}

export default Pagination;