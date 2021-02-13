import s from "./ProfileInfo.module.css";
import React from "react";
import cn from "classnames"

const Contact = ({contactValue, icon, isMobile}) => {
    return (
        <div className={cn(s.contact, {[s.contactM]: isMobile})}>
            <img src={`my-app/images/${icon}.png`} alt="icon" width="25"/>
            <a className={s.contactRef} href={contactValue}>{contactValue}</a>
        </div>
    )
};
export default Contact;