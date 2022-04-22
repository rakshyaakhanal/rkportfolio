import React from 'react';
import Product from '../Product/Product';
import { products } from '../../data';
import './ProductList.css';

const ProductList = () => {
    return (
        <div className='productlist'>
            <div className='productlist-texts'>
                <h1 className='productlist-title'>Create & inspire. It's Rakshya</h1>
                <p className='productlist-description'>
                    Rakshya is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>

            <div className='productlist-list'>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}  />
                ))}

            </div>
        </div>
    )
}

export default ProductList;
