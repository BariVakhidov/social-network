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
import { Button } from 'antd';
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
                <div className={s.auth}>
                    {isAuth && profile ?
                        <div className={s.authInfo}><img src={profile.photos.small}
                                                         alt=""/> <span className={s.name}>{!isMobile && profile.fullName}</span>
                            {isMobile ?
                                <img style={{width: "25px", height: "25px"}} onClick={logout} src={logoutIcon}
                                     alt="logout"/> :
                                <Button type={"primary"} onClick={logout}>{"Logout"}</Button>}
                        </div> : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;
