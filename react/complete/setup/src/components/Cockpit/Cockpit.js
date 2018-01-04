import React from 'react';

const cockpit = (props) => {
    const btnStyle = {
        backgroundColor: 'azure',
        border: '2px solid blue',
        padding: '10px',
        fontSize: '1.2em',
        cursor: 'pointer'
    };

    return (
        <div>
            <h1>Hi I'm a React App</h1>
            <button style={btnStyle} onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default cockpit;