import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope this tastes great!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button type="Danger" click={props.checkoutCancelled}>CANCEL</Button>
            <Button type="Success" click={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;