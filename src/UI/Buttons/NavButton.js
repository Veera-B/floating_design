import React from 'react';
import classes from './NavButton.module.css';
import {NavLink } from 'react-router-dom';

const NavButton = (props) => {
    return (
        <span className = {classes.NavButton}>
            <NavLink to= {props.navUrl}>{props.label}</NavLink>
        </span>
    );
}

export default NavButton;