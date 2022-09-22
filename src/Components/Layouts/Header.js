import { Fragment } from 'react';

import shopLogo from './../../Assets/manantial_logo_transparrent.png';
import classes from './Header.module.css';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <img src={shopLogo} className={classes['main-image']} alt='Oficial logo of the store'/>
            <button onClick={props.close}>Log Out</button>
        </header>
    </Fragment>
}

export default Header;