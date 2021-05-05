import s from "./ProfileInfo.module.css";
import React from "react";
import cn from "classnames"
interface Props {
    contactValue:string;
    icon:string;
    isMobile:boolean;
}
const Contact:React.FC<Props> = ({contactValue, icon, isMobile}) => {
    return (
        <div className={cn(s.contact, {[s.contactM]: isMobile})}>
            {icon ? <img src={`/my-app/images/${icon}.png`} alt="icon" width="25"/> : icon}
            <a className={s.contactRef} href={contactValue}>{contactValue? contactValue : "-"}</a>
        </div>
    )
};
export default Contact;