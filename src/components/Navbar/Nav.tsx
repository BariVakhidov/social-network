import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PartOfFriends, {PartOfFriendsProps} from "./PartOfFriends";
import cn from "classnames";
import Switcher from "./Switcher";

interface Props extends PartOfFriendsProps{
    blackTheme:boolean;
    isMobile:boolean;
    isVisible:boolean;
    isBlackTheme: (checked:boolean)=> void;
}

const Nav: React.FC<Props> = ({blackTheme, isMobile, isBlackTheme, isVisible, friends, isAuth, friendsCount}) => {

    return (
        <>
            {isVisible && <div>
                <nav className={cn(s.navbar, {[s.navbarBlack]: blackTheme}, {[s.navbarM]: isMobile})}>
                    <div className={cn(s.nav, {[s.navM]: isMobile})}>
                        <div className={s.item}>
                            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                        </div>
                    </div>
                    <div className={cn(s.item, s.friends, {[s.mobileFriends]: isMobile})}>
                        <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                        {!isMobile && <div>
                            <PartOfFriends friends={friends} friendsCount={friendsCount} isAuth={isAuth}/>
                        </div>}
                    </div>
                    <Switcher isMobile={isMobile} blackTheme={blackTheme} isBlackTheme={isBlackTheme}/>
                </nav>
            </div>}
        </>
    );
}

export default Nav;
