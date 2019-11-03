import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart, user) => cart.cartItems
)