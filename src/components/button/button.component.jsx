import React from 'react';

import './button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, isAddToCart, ...otherProps }) => (
    <button className=
        {`${ inverted ? 'inverted' : ''} ${ isGoogleSignIn ? 'google-sign-in' : ''} ${ isAddToCart ? 'add-to-cart' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;