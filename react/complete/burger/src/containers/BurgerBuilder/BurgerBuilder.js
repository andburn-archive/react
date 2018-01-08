import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummay/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchaseable: false,
        ordering: false
    };

    oderingHandler = () => {
        this.setState({ordering: true});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(x => ingredients[x])
            .reduce((s, e) => (s + e), 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const newIngredients =  { ...this.state.ingredients };
        newIngredients[type] = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ totalPrice: newPrice, ingredients: newIngredients });
        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newIngredients =  { ...this.state.ingredients };
        if (this.state.ingredients[type] > 0) {
            newIngredients[type] = this.state.ingredients[type] - 1;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ totalPrice: newPrice, ingredients: newIngredients });
            this.updatePurchaseState(newIngredients);
        }
    }

    orderCancelHandler = () => {
        this.setState({ordering: false});
    }

    orderContinueHandler = () => {
        alert("Continuing");
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.ordering} 
                        modalClosed={this.orderCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.totalPrice}
                        cancel={this.orderCancelHandler}
                        continue={this.orderContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />                
                <BuildControls 
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    isPurchasable={this.state.purchaseable}
                    disabled={disabledInfo}
                    ordered={this.oderingHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;