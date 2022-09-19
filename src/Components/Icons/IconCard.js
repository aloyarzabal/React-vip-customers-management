import classes from './IconCard.module.css';
import React from 'react';

const IconCard = props => {
    return <div className={classes.cardIcon}>{props.children}</div>
}

export default IconCard;