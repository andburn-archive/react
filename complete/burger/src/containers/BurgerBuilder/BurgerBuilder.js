import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummay/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-order';


class BurgerBuilder extends Component {
    state = {
        purchaseable: false
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    oderingHandler = () => {
        if (this.props.isAuthenicated) {
            this.setState({ordering: true});
        } else {
            this.props.onSetAuthRedirect('/checkout');
            this.props.history.push('/auth');
        }
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
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

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
                        isAuth={this.props.isAuthenicated}
                        ordered={this.oderingHandler} />
                </React.Fragment>
            );
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
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenicated: state.auth.token !== null,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onSetAuthRedirect: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( 
    withErrorHandler(BurgerBuilder, axios));