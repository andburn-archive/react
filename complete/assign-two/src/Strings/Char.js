import React from 'react';

const style = {
    display: 'inline-block',
    padding: '8px',
    margin: '8px',
    textAlign: 'center',
    border: '1px solid black'
};

const char = (props) => {
    return <p style={style} onClick={props.click}>{props.value}</p>;
};

export default char;