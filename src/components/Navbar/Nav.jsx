import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PartOfFriends from "./PartOfFriends";


const Nav = (props) => {
    /* let friends = (props.state.friends).map(f => <Friend.jsx image={f.imageURL} />);*/

    return (
       <div>
           <nav className={s.navbar + " " + (props.blackTheme && s.navbarBlack)}>
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
                       <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
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
                   <div>
                       <PartOfFriends {...props}/>
                   </div>
               </div>
           </nav>
       </div>
    );
};

export default Nav;
