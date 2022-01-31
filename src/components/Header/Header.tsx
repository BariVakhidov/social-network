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
import { Button, Avatar } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/redux-store";
import { logout } from "../../redux/auth-reducer";
import { setNavVisible } from "../../redux/app-reducer";
interface Props {
    isMobile:boolean;
}

export const HeaderComponent:React.FC<Props> = ({isMobile}) => {

    const isAuth = useSelector((state:RootState) => state.auth.isAuth);
    const profile = useSelector((state:RootState) => state.auth.currentUser);
    const isVisible = useSelector((state:RootState) => state.app.isVisible);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    const onSetNavVisible = (visible: boolean) => {
        dispatch(setNavVisible(visible));
    }

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
                        <div className={s.authInfo}><Avatar size={40} src={profile.photos.small}
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