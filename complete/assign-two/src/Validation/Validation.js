import React from 'react';

const validation = (props) => {
    let message = "Text too short";

    if (props.length >= 5) {
        message = "Text length OK";
    }
    
    return <p>{message}</p>;
};

export default validation;