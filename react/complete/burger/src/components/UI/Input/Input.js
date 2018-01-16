import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];

    if (props.shouldValidate && props.touched && !props.valid) {
        inputClasses.push(styles.Invalid);
    }

    switch (props.elementType) {
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} value={props.value} 
                onChange={props.changed} />;
            break;

        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')} 
                    value={props.value} 
                    onChange={props.changed}>
                    {props.elementConfig.options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.displayValue}
                        </option>
                    ))};
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} value={props.value}  
                onChange={props.changed}/>;
    }

    return (
        <div className={styles.Input} >
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;