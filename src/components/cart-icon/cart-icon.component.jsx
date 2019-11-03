import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

//access toggleCartHidden passed from redux through the mapDisptachToProps and connect() to CartIcon
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => {
    console.log('i am being called');
    return ({
        itemCount: cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity,
            0
        )
    });
}

const mapDisptachToProps = dispatch => ({
    //toggleCartHidden will just be a function that triggers the dispatch of toggleCartHidden()
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDisptachToProps)(CartIcon);