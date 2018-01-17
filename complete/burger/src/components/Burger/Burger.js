import React from 'react';
import { withRouter } from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(x => {
            return [...Array(props.ingredients[x])].map((_, i) => {
                return <BurgerIngredient key={x + i} type={x} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);