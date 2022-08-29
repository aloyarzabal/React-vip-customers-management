import { Fragment } from 'react';

import shopLogo from './../../Assets/manantial_logo_transparrent.png';
import classes from './Header.module.css';

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <img src={shopLogo} className={classes['main-image']} />
        </header>
    </Fragment>
}

export default Header;