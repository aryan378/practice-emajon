import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>   
            <div className="product-name">
                <h3>{name}</h3>
                <br/>
                <p>By: <small>{seller}</small></p>
                <br/>
                <p>${price}</p>
                <br/>
                <p>only {stock} left in stock - order soon</p>
                <button className="product-button" onClick={() => props.addHandleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div> 
        </div>
    );
};

export default Product;