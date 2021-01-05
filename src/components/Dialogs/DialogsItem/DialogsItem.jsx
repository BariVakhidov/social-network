import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
               <img className={s.userImg} src="https://imgix.bustle.com/uploads/image/2020/5/12/f19634d3-71fb-4591-a7ce-3b16531d1a90-sheev-face-melt.jpg?w=350&h=298&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5929878048780488&fp-y=0.2764227642276423"/>
                 <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};
export default DialogsItem;