import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const itemStyle = { textTransform: 'capitalize' };
    const ingredientSummary = Object.keys(props.ingredients)
        .map(k => {
            return (
                <li key={k + props.ingredients[k]}>
                    <span style={itemStyle}>{k}</span>: {props.ingredients[k]}
                </li>
            );
        });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button click={props.cancel} type="Danger">CANCEL</Button>
            <Button click={props.continue} type="Success">CONTINUE</Button>
        </React.Fragment>
    );
};

export default orderSummary;