import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = (props) => {
    const style = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };
    return (
        <React.Fragment>
            <Backdrop show={props.show} click={props.modalClosed}/>
            <div style={style}
                className={styles.Modal}>{props.children}</div>
        </React.Fragment>
    );
}

export default modal;