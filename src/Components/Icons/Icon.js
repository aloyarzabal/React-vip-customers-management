import classes from './Icon.module.css';

const Icon = props => {
    return <div className={classes.appButton}>
        <img src={props.icon} alt="star icon yellow"/>
        <span> {props.name}</span>

    </div>
}

export default Icon;