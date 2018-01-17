import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    let ingredients = [];
    for (let ing in props.ingredients) {
        ingredients.push({
            name: ing,
            amount: props.ingredients[ing]
        });
    }

    const ingredientsOutput = ingredients.map(i => {
        let text = null;
        if (i.amount > 0) {
            text = <span key={i.name+i.amount}>{i.name} x{i.amount}</span>;
        }
        return text;
    })

    return (
        <div className={styles.Order}>
            <h2>Order #{props.index}</h2>
            <div>{ingredientsOutput}</div>
            <p>Price: $<strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;