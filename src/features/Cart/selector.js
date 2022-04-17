import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

//count number product
export const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0)
)

//total price product

export const cartItemTotalSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + (item.product.salePrice * item.quantity), 0)
)