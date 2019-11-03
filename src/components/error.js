import React from 'react';

const Error = function () {
    return (
        <div style={styles.error}>Error! Page not found!</div>
    );
}

const styles = {
    error: {
        fontSize: 20,
        color: 'red',
        padding: 50
    }
}

export default Error;
