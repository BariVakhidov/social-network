import React, {memo, useContext, useEffect} from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames";
import logoutIcon from "../../assets/images/logout.png"
import {BlackThemeContext} from "../../contexts/theme-context";
import {Button, Avatar} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";
import {setNavVisible} from "../../redux/app-reducer";

interface Props {
    isMobile: boolean;
}

export const HeaderComponent: React.FC<Props> = memo(({isMobile}) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const profile = useSelector((state: RootState) => state.auth.currentUser);
    const isVisible = useSelector((state: RootState) => state.app.isVisible);
    const dispatch = useDispatch();
    const blackTheme = useContext(BlackThemeContext);

    const onLogout = () => {
        dispatch(logout());
    }

    const onSetNavVisible = (visible: boolean) => {
        dispatch(setNavVisible(visible));
    }

    useEffect(() => {
        if (!isMobile && !isVisible) {
            setNavVisible(true);
        }
    }, [isMobile, isVisible]);

    return (
        <header className={cn({[s.headerBlack]: blackTheme})}>
            <div className={s.header}>
                <div className={s.auth}>
                    {isAuth && profile ?
                        <div className={s.authInfo}><Avatar size={40} src={profile.photos.small}
                                                            alt='' /> <span
                            className={s.name}>{!isMobile && profile.fullName}</span>
                            {isMobile ?
                                <img style={{width: "25px", height: "25px"}} onClick={onLogout} src={logoutIcon}
                                     alt='logout' /> :
                                <Button type={"primary"} onClick={onLogout}>{"Logout"}</Button>}
                        </div> : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
});
