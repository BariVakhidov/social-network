import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PartOfFriends from "./PartOfFriends";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import cn from "classnames";

const Nav = (props) => {
    /*
        let [isVisible, setVisible] = useState(!props.isMobile);
    */
    return (
        <>
            {props.isVisible && <div>
                <nav className={cn(s.navbar, {[s.navbarBlack]: props.blackTheme}, {[s.navbarM]: props.isMobile})}>
                    <div className={cn(s.nav, {[s.navM]: props.isMobile})}>
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
                    <div className={cn(s.item, s.friends, {[s.mobileFriends]: props.isMobile})}>
                        <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                        {!props.isMobile && <div>
                            <PartOfFriends {...props}/>
                        </div>}
                    </div>
                    <div className={s.mid}>
                        <label
                            className={cn(s.rocker, {[s.mobileRocker]: props.isMobile}, {[s.rockerSmall]: !props.isMobile})}>
                            <input type="checkbox" onChange={event => {
                                props.isBlackTheme(event.currentTarget.checked)
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
