import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <div className={"route"}>
            <NavLink to={'/'} className={'nav'}>Home</NavLink>
            <NavLink to={'/post'} className={'nav'}>Post</NavLink>
            <NavLink to={'/profile'} className={'nav'}>Profile</NavLink>
        </div>
    );
};

export default Header;