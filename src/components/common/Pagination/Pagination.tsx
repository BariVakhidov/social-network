import React, {FC, useState} from 'react';
import s from "../../Users/Users.module.css";
import cn from "classnames";
import dArrowR from "../../../assets/images/double-arrow.png";
import dArrowL from "../../../assets/images/double-arrow2.png";
import arrowR from "../../../assets/images/arrowR.png";
import arrowL from "../../../assets/images/arrowL.png";

interface PaginationProps {
    portionSize?: number;
    isMobile: boolean;
    totalUsers: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination:FC<PaginationProps> = ({portionSize=10, ...props}) => {
    if (props.isMobile) {
        portionSize = 3;
    }
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    } //all pages

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let rightPageNumber = portionNumber * portionSize;
    let leftPageNumber = (portionNumber - 1) * portionSize + 1;
    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <div>
                <button className={s.turnPageLeft} onClick={() => {
                    setPortionNumber(1)
                }}><img
                    src={dArrowL}
                    alt=""/>
                </button>
                <button className={s.turnPageLeft} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}><img
                    src={arrowL}
                    alt=""/>
                </button>
            </div>}
            {pages.filter(p => p >= leftPageNumber && p <= rightPageNumber)
                .map(p => {
                        return (
                            <div key={p} className={cn({[s.selectedPage]: props.currentPage === p}, s.page)}
                                 onClick={() => {
                                     props.onPageChange(p)
                                 }}>{p}</div>)
                    }
                )}
            {portionCount > portionNumber &&
            <div>
                <button className={s.turnPageRight} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}><img
                    src={arrowR}
                    alt=""/>
                </button>
                <button className={s.turnPageRight} onClick={() => {
                    setPortionNumber(portionCount)
                }}><img
                    src={dArrowR}
                    alt=""/>
                </button>
            </div>}
        </div>
    )
}

export default Pagination;