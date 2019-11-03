import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.util';

const INITAL_STATE = {
    hidden: true,
    cartItems: []
};

//state = INITIAL_STATE => only if no value comes in 
const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;