import React from 'react';
import classes from './Togglebutton.module.css';
const Togglebutton = (props) => {

    return (
        <button className = {`${classes.toggleButton} ${props.isActive?classes.active:''}`} onClick = {()=>props.clicked()}>
            {props.label}
        </button>
    );
};
export default Togglebutton;