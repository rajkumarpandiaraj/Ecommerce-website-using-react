import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {globalData} from '../context/Globalcontext';
import '../assets/modal.css'

function Productmodel() {
    const {productConsumed, modalCloseHandle, isModalOpened} = useContext(globalData)
    return (
        <div>
            <div className='container model-container text-center' style={isModalOpened? {display : "block"} : {display : 'none'}}>
                <div className='box'>
                    <h1>Item Added To Cart</h1>
                    <img src={productConsumed.img} alt='product' className='img-fluid'/>
                        <h2>{productConsumed.title}</h2>
                        <h5>Price : ${productConsumed.price}</h5>
                        <Link to='/'>
                            <button className='btn btn-outline-primary  mt-3' onClick={modalCloseHandle}>Continue Shopping</button>
                        </Link>
                        <Link to='/cart'>
                            <button className='btn btn-outline-warning ml-3 mt-3' onClick={modalCloseHandle}>Go To Cart</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Productmodel
