import classes from './Icon.module.css';
import React from 'react';

const Icon = props => {
    return <div className={classes.appButton} onClick={props.onClick} >
        <img src={props.icon} alt="star icon yellow"/>
        <span> {props.name}</span>
    </div>
}

export default Icon;