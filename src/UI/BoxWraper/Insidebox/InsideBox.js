 
import React from 'react';
import classes from './InsideBox.module.css';

const InsideBox = (props) => {
    
    return (
        <div className = {classes.Insidebox}>
            {props.children}
        </div>
    );
};
export default InsideBox;


