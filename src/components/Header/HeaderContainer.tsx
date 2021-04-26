import React from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {setNavVisible} from "../../redux/app-reducer";
import {RootState} from "../../redux/redux-store";

type HeaderContainerProps = {
    isMobile:boolean;
}
export const HeaderContainer:React.FC<HeaderContainerProps> = ({isMobile}) => {
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

    return <Header isMobile={isMobile}
                   isAuth={isAuth}
                   isVisible={isVisible}
                   setNavVisible={onSetNavVisible}
                   logout={onLogout}
                   profile={profile}/>
}
