import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummay/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {
    state = {
        purchaseable: false,
        ordering: false,
        loading: false
    };

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(resp => {
        //         this.setState({ingredients: resp.data})
        //     });
    }

    oderingHandler = () => {
        this.setState({ordering: true});
    }

    updatePurchaseState = () => {
        const sum = Object.keys(this.props.ings)
            .map(x => this.props.ings[x])
            .reduce((s, e) => (s + e), 0);
        return sum > 0;
    }

    orderCancelHandler = () => {
        this.setState({ordering: false});
    }

    orderContinueHandler = () => {    
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;        
        let burger = <Spinner />;
        if (this.props.ings) {
            orderSummary = (
                <OrderSummary 
                    ingredients={this.props.ings} 
                    price={this.props.price}
                    cancel={this.orderCancelHandler}
                    continue={this.orderContinueHandler} />
            );
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ings} />                
                    <BuildControls 
                        price={this.props.price}
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        isPurchasable={this.updatePurchaseState}
                        disabled={disabledInfo}
                        ordered={this.oderingHandler} />
                </React.Fragment>
            );
            if (this.state.loading) {
                orderSummary = <Spinner />;
            }
        }
        return (
            <React.Fragment>
                <Modal show={this.state.ordering} 
                        modalClosed={this.orderCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName: ingName
        }),
        onIngredientRemoved: (ingName) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName: ingName
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( 
    withErrorHandler(BurgerBuilder, axios));