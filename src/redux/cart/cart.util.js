//looking into the existing cartItems array to see if the new cartItemToAdd is already existed or not
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //cartItems.find() will return the first item found in the array based on the condition we pass
    //the condition passed is based on this function: cartItem => cartItem.id === cartItemToAdd.id, which means,
    //based on individual cartItem, check cartItem's id matches the cartItemToAdd's id
    //id it matches, assign true to existingCartItem, otherwise, false
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    //if existingCartItem = true
    if(existingCartItem) {
        //cartItems.map() will return as new array, because we need to return new version of state so our component will re-render properly
        //for each cartItem in the cartItems array, if any of it's id matches with the cartItemToAdd's id, then create new object with cartItem and quantity+1
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity+1 } : cartItem )
    }

    //if existingCartItem = false
    //return new array with all existing cartItems, and add new object containing cartItemToAdd with base qty of 1  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
} 