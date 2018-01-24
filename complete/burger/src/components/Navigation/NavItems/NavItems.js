import React from 'react';

import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link="/">Burger Builder</NavItem>
        { props.isAuthenicated 
            ? <NavItem link="/orders">Orders</NavItem> 
            : null }
        { props.isAuthenicated
            ? <NavItem link="/logout">Logout</NavItem>
            : <NavItem link="/auth">Login</NavItem> }
    </ul>
);

export default navItems;