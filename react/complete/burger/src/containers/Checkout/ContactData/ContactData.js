import React, { Component } from 'react';

import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); // stop form reloading page
        this.setState({loading: true});        
        axios.post('/orders.json', {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Joe Stonks",
                country: "USA"
            },
            email: 'test@example.com'
        }).then(resp => { 
            console.log(resp);
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(err => { 
            console.log(err);
            this.setState({loading: false});
        })
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="Your stree" />
                <input type="text" name="postal" placeholder="Your postal code" />
                <Button type="Success" click={this.orderHandler}>Confirmar</Button>
            </form>
        );
        if (this.state.loading) {
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

export default ContactData;