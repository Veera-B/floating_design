import React from 'react';
import {animated} from 'react-spring';
import classes  from './BoxWrapper.module.css';

const  BoxWrapper = (props) =>{
    return (
        <div className = {classes.BoxWrapper}>
            {props.children}
        </div>
    );
}

export default BoxWrapper;