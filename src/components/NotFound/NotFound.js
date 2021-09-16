import React from 'react';

const NotFound = () => {
    const errorStyle = {
        color: 'red',
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={errorStyle}>Sorry !! page not found</h1>
        </div>
    );
};

export default NotFound;