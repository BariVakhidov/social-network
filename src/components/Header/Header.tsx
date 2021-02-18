import React, {useContext, useEffect} from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import StyledButton from "../common/StyledButton";
import cn from 'classnames';
import logoutIcon from '../../assets/images/logout.png'
import menu from '../../assets/images/menu.png';
import carrot from '../../assets/images/carrot.jpg'
import {BlackThemeContext} from "../../contexts/theme-context";
import {Profile} from "../../types/intefaces";

interface Props {
    isMobile:boolean;
    isVisible: boolean;
    setNavVisible: (visible:boolean) => void;
    isAuth: boolean;
    profile: Profile | null;
    logout: ()=> void;
}

const Header:React.FC<Props> = ({isMobile, isVisible, setNavVisible, isAuth, profile, logout}) => {
    useEffect(()=> {
        if (!isMobile && !isVisible) {
            setNavVisible(true);
        }
    }, [isMobile,isVisible,setNavVisible]);
    const blackTheme = useContext(BlackThemeContext);
    return (
        <header className={cn({[s.headerBlack]: blackTheme})}>
            <div className={s.header}>
                <div className={s.logo}>
                    <img
                        alt="img"
                        src={carrot}/>
                    <div>{isMobile ? <button className={s.menuButton} onClick={()=> setNavVisible(!isVisible)}><img src={menu} alt=""/></button> :
                        "Carrot"}</div>
                </div>
                <div className={s.auth}>
                    {isAuth && profile ?
                        <div className={s.authInfo}><img src={profile.photos.small}
                                                         alt=""/> {!isMobile && profile.fullName}
                            {isMobile ?
                                <img style={{width: "25px", height: "25px"}} onClick={logout} src={logoutIcon}
                                     alt="logout"/> :
                                <StyledButton onClick={logout}>{"Logout"}</StyledButton>}
                        </div> : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;
