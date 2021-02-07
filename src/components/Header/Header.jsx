import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header + " " + (props.blackTheme && s.headerBlack)}>
            <div className={s.logo}>
                <img
                    alt="img"
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062019/rage_against_the_machine-01.png?LE3JPx_L4z5gcXoUVhjrQiWd8KOOq3iJ&itok=gBeWUx92"/>
                <div>Rebellion</div>
            </div>
            <label className={s.switch}>
                <input type="checkbox" onChange={(e) =>{props.isBlackTheme(e.currentTarget.checked)}}/>
                    <span className={s.slider + " " + s.round}></span>
            </label>
            <div className={s.auth}>
                {props.isAuth && props.profile? <div className={s.authInfo}><img src={props.profile.photos.small} alt=""/> {props.login}
                    <button className={s.logoutButton} onClick={props.logout}>Logout</button>
                </div> : <NavLink to="/login">Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;
