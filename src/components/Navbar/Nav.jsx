import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friend/Friends";




const Nav = (props) => {
   /* let friends = (props.state.friends).map(f => <Friend.jsx image={f.imageURL} />);*/
    return (
        <nav className={s.navbar}>
            <div className={s.nav}>
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
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </div>
            <div className={s.item + " " + s.friends}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                <div className={s.friendsItems}>
                    {props.navbar.friends.map(f => <Friends name = {f.name} id={f.id} image={f.imageURL}/>) }
                </div>
            </div>
        </nav>
    );
};

export default Nav;
