import s from "./Nav.module.css";
import cn from "classnames";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";
import React from "react";

interface Props {
    isMobile: boolean;
    isBlackTheme: (checked:boolean)=> void;
    blackTheme:boolean;
}

const Switcher:React.FC<Props> = ({isBlackTheme,isMobile,blackTheme}) => {
    return (
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
    )
}
export default Switcher;