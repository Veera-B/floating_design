import React from 'react';
import Ripple from 'react-ripples';
import classes from './Togglebutton.module.css';
const Togglebutton = (props) => {

    return (
        <Ripple color={'#2dd679'}>
            <button className = {`${classes.toggleButton} ${props.isActive?classes.active:''}`} onClick = {()=>props.clicked()}>
                {props.label}
            </button>
        </Ripple>
    );
};
export default Togglebutton;