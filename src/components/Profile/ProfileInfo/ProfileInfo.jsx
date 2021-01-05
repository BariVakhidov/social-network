import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.back}></div>
            <div className={s.name}>
                <div>
                    <img
                        className={s.avatar}
                        src="https://upload.wikimedia.org/wikipedia/ru/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg"
                    />
                </div>
                <div className={s.aboutYourself}>
                    <p>Status</p>
                    <h3>Vakhidov B.K.</h3>
                    <p>22 years old</p>
                    <p>Worst programmer</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;