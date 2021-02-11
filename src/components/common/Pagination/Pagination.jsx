import React, {useState} from 'react';
import s from "../../Users/Users.module.css"

const Pagination = ({portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let rightPageNumber = portionNumber * portionSize;
    let leftPageNumber = (portionNumber - 1) * portionSize + 1;
    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <div>
                <button className={s.turnPageLeft} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arrow_Blue_Left_001.svg/1200px-Arrow_Blue_Left_001.svg.png" alt=""/>
                </button>
            </div>}
            {pages.filter(p => p >= leftPageNumber && p <= rightPageNumber)
                .map(p => {
                        return (
                            <div key={p} className={(props.currentPage === p && s.selectedPage) || s.page} onClick={() => {
                                props.onPageChange(p)
                            }}>{p}</div>)
                    }
                )}
            {portionCount > portionNumber &&
            <div>
                <button className={s.turnPageRight} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Arrow_Blue_Right_001.svg/768px-Arrow_Blue_Right_001.svg.png" alt=""/>
                </button>
            </div>}
        </div>
    )
}

export default Pagination;