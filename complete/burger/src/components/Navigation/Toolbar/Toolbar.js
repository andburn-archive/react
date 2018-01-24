import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavItems/NavItems';
import NavMenu from '../NavMenu/NavMenu'

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <NavMenu click={props.openDrawer} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenicated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;