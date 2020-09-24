import React,{useContext} from 'react';
import '../assets/cartlist.css';
import {globalData} from '../context/Globalcontext';

function Cartlist(props) {
    const {product} = props;
    const {countIncHandle, countDecHandle, cartItemRemoveHandle} = useContext(globalData)
    return (
        <div className='row my-3 cart-product'>
            <div className='col-12 col-md-6 text-center'>
                <img src={product.img} alt='product' className='cart-img img-fluid'/>
            </div>
            <div className='col-12 col-md-6'>
                <h1 className='mt-2'>{product.title}</h1>
                <h3>Price : ${product.price}</h3>
                <div className='d-flex align-items-center justify-content-start my-3'>
                    <h4>Quantity :</h4>
                    <i className='fas fa-chevron-left p-2 mx-2 border border-dark' onClick={() => countDecHandle(product.id)}></i>
                    <span className='count py-1 px-2  border border-dark'>{product.count}</span>
                    <i className='fas fa-chevron-right p-2 mx-2 border border-dark' onClick={() => countIncHandle(product.id)}></i>
                </div>
                <h4 className='my-2'> Remove : <span><i className='fas fa-trash-alt' onClick={() => cartItemRemoveHandle(product.id)}></i> </span></h4>
                <div className='text-right'>
                <h4>Item Total</h4>
                <h5>{`$${product.total}`}</h5>
                </div>
            </div>
            <div className='my-3 hr'></div>
        </div>
    )
}

export default Cartlist
