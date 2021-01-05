import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062019/rage_against_the_machine-01.png?LE3JPx_L4z5gcXoUVhjrQiWd8KOOq3iJ&itok=gBeWUx92"/>
            <div>Rebellion</div>
        </header>
    );
};

export default Header;
