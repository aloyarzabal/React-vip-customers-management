import {Fragment} from 'react';

import shopLogo from './../../Assets/shopLogo.jpg';
import classes from './Header.module.css';

const Header = () => {
    return <Fragment>
        <div className={classes['main-image']}>
            <img src={shopLogo} alt='A table full of delicious food' />
        </div>
        <header className={classes.header}>
            <h1>Manantial natural</h1>
            <h2>Gestion de clientes</h2>
        </header>
    </Fragment>
}

export default Header;