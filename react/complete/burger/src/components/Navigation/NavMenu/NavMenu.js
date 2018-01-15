import React from 'react';

import styles from './NavMenu.module.css';

const navMenu = (props) => (
    <div className={styles.NavMenu} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default navMenu;