import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if( total > 100 ){
        shipping = 0;
    }
    else if( total > 15 ){
        shipping = 4.99;
    }
    else if( total > 0 ){
        shipping = 12.55;
    }

    const tax = total / 15;

    const formateNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    } 

    return (
        <div className="cart-container">
            <h1>This is the cart section</h1>
            <h3>Order items: {cart.length}</h3>
            <h4><small>Shipping Cost: {formateNumber(shipping)}</small></h4>
            <h4><small>Product Price: {formateNumber(total)}</small></h4>
            <h4><small>Tax + VAT: {formateNumber(tax)}</small></h4>
            <h4>Total Price: {formateNumber(total + shipping + tax)}</h4>
        </div>
    );
};

export default Cart;