import React from "react"
import {useDispatch, useSelector} from "react-redux";
import Nav from "./Nav";
import {isBlackTheme} from "../../redux/app-reducer";
import {RootState} from "../../redux/redux-store";

type Props = {
    isMobile: boolean;
}
export const NavContainer: React.FC<Props> = ({isMobile}) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const {showingFriends, totalFriends} = useSelector((state: RootState) => state.usersPage);
    const blackTheme = useSelector((state: RootState) => state.app.blackTheme);
    const isVisible = useSelector((state: RootState) => state.app.isVisible);
    const dispatch = useDispatch();

    const onThemeChange = (isBlack: boolean) => dispatch(isBlackTheme(isBlack));

    return <Nav blackTheme={blackTheme} isMobile={isMobile} isVisible={isVisible} isBlackTheme={onThemeChange} isAuth={isAuth}
                friendsCount={totalFriends} friends={showingFriends}/>
}

