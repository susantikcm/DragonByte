import React from 'react';

import './cart-item.style.scss';

const CartItem = ({ item : { title, price,  quantity } }) => (
    <div className='cart-item'>
        <img src={`https://robohash.org/${title}`} alt='item' />
        <div className='item-details'>
            <span className='title'>{title}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;