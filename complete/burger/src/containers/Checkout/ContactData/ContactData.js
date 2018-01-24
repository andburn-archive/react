import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: this.orderElement('input', 'text', 'Your name'),
            street: this.orderElement('input', 'text', 'Street address'),
            zipCode: this.orderElement('input', 'text', 'Zip Code', '', 4, 5),
            country: this.orderElement('input', 'text', 'Country'),
            email: this.orderElement('input', 'email', 'eMail address'),
            deliveryMethod: {
                elementType: 'select',
                elementConfig: { 
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                touched: false,
                valid: true
            }
        },
        formIsValid: false
    }

    orderElement(element, type, placeholder, value='', min=-1, max=-1, req=true) {
        return {
            elementType: element,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value,
            validation: {
                required: req,
                minLength: min,
                maxLength: max
            },
            valid: false,
            touched: false
        };
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid &= value.trim() !== '';
        }

        if (rules.minLength && rules.minLength > 0) {
            isValid &= value.length >= rules.minLength;
        }

        if (rules.maxLength && rules.maxLength > 0) {
            isValid &= value.length <= rules.maxLength;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault(); // stop form reloading page

        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }        
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId,
        };
        this.props.onOrderBurger(order, this.props.token);
    }

    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputId]
        };
        updatedFormElement.touched = true; 
        updatedFormElement.value = event.target.value;
        if (updatedFormElement.validation) {
            updatedFormElement.valid = this.checkValidity(
                updatedFormElement.value, updatedFormElement.validation);
        }       
        updatedOrderForm[inputId] = updatedFormElement;

        let formIsValid = true;
        for (let id in updatedOrderForm) {
            formIsValid &= updatedOrderForm[id].valid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>                
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        shouldValidate={formElement.config.validation}
                        valid={formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button type="Success" disabled={!this.state.formIsValid}>Confirmar</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger:(data, token) =>  dispatch(actions.purchaseBurger(data, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))