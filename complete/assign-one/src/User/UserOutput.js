import React from 'react';

const userOutput = (props) => {
    const style = {
        marginLeft: '20px',
        fontStyle: 'italic'
    };
    return (
        <div>
            <p>Some sample text goes here.</p>
            <p style={style}>{props.user}</p>
        </div>
    );
};

export default userOutput;