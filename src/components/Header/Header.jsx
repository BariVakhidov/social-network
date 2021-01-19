import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img
                    alt="img"
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062019/rage_against_the_machine-01.png?LE3JPx_L4z5gcXoUVhjrQiWd8KOOq3iJ&itok=gBeWUx92"/>
                <div>Rebellion</div>
            </div>
            <div className={s.auth}>
                {props.isAuth && props.profile? <div>{props.profile.userId} <div> {props.login}</div></div> : <NavLink to="/login">Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;
