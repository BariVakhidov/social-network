import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PartOfFriends, {PartOfFriendsProps} from "./PartOfFriends";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import cn from "classnames";

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
                    <div className={s.mid}>
                        <label
                            className={cn(s.rocker, {[s.mobileRocker]: isMobile}, {[s.rockerSmall]: !isMobile})}>
                            <input type="checkbox" checked={blackTheme} onChange={event => {
                                isBlackTheme(event.currentTarget.checked)
                            }}></input>
                            <span className={s.switchLeft}><img src={moon} alt=""/></span>
                            <span className={s.switchRight}><img style={{height: "20px"}} src={sun} alt=""/></span>
                        </label>
                    </div>
                </nav>
            </div>}
        </>
    );
}

export default Nav;
