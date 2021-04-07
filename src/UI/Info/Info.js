import React from 'react';
import classes from './Info.module.css';

const Info = (props) => {
    return (
        <div className = {classes.Info} style = {props.bgColor}>
            {props.children}
        </div>
    );
}

export default Info;