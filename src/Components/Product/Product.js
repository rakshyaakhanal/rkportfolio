import React from 'react';
import './Product.css';

const Product = ({img, link}) => {
    return (
        <div className='product'>
            <div className='product-browser'>
                <div className='product-circle'></div>
                <div className='product-circle'></div>
                <div className='product-circle'></div>
            </div>

            <a href={link} target='_blank' rel='noreferrer' >
                <img src={img} alt='' className='product_img' />
            </a>
        </div>
    )
}

export default Product;
