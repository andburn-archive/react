import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const itemStyle = { textTransform: 'capitalize' };
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(k => {
                return (
                    <li key={k + this.props.ingredients[k]}>
                        <span style={itemStyle}>{k}</span>: {this.props.ingredients[k]}
                    </li>
                );
            });

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button click={this.props.cancel} type="Danger">CANCEL</Button>
                <Button click={this.props.continue} type="Success">CONTINUE</Button>
            </React.Fragment>
        );
    }
};

export default OrderSummary;