import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemTotalSelector } from './selector';

CartFeature.propTypes = {

};

function CartFeature(props) {
    const totalCart = useSelector(cartItemTotalSelector);
    const listProduct = useSelector(state => state.cart.cartItems);
    console.log(listProduct)
    return (
        <div>
            totalCart: {totalCart}
        </div>
    );
}

export default CartFeature;