import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../../components/Product/Product';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const addHandleProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">     
            <div className="products-container">
                    {
                        products.map( pd => <Product addHandleProduct={addHandleProduct} product={pd}></Product> )
                    }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;