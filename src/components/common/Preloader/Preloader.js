import React from 'react';
import pepe from "../../../assets/pepe.gif";
import s from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div>
            <img  alt="preloader" className={s.image} src={pepe}/>
        </div>
    );
};
export default Preloader;