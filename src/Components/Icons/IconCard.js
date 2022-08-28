import classes from './IconCard.module.css';

const IconCard = props => {
    return <div className={classes.cardIcon}>{props.children}</div>
}

export default IconCard;