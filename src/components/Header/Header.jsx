import React, {useEffect} from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import StyledButton from "../common/StyledButton";
import cn from 'classnames';
import logout from '../../assets/images/logout.png'
import menu from '../../assets/images/menu.png';
import carrot from '../../assets/images/carrot.jpg'

const Header = (props) => {
    useEffect(()=> {
        if (!props.isMobile && !props.isVisible) {
            props.setNavVisible(true);
        }
    }, [props])
    return (
        <header className={cn({[s.headerBlack]: props.blackTheme})}>
            <div className={s.header}>
                <div className={s.logo}>
                    <img
                        alt="img"
                        src={carrot}/>
                    <div>{props.isMobile ? <button className={s.menuButton} onClick={()=> props.setNavVisible(!props.isVisible)}><img src={menu} alt=""/></button> :
                        "Carrot"}</div>
                </div>
                <div className={s.auth}>
                    {props.isAuth && props.profile ?
                        <div className={s.authInfo}><img src={props.profile.photos.small}
                                                         alt=""/> {!props.isMobile && props.profile.fullName}
                            {props.isMobile ?
                                <img style={{width: "25px", height: "25px"}} onClick={props.logout} src={logout}
                                     alt="logout"/> :
                                <StyledButton onClick={props.logout}>{"Logout"}</StyledButton>}
                        </div> : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;
