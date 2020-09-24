import React,{useContext} from 'react';
import {globalData} from '../context/Globalcontext'
import Cartarr from './Cartarr';

function Cart() {
    const {cartArr} = useContext(globalData);
    return (
        <>
            {
                cartArr.length === 0 ? <h1 className='text-center my-4 display-3'>Your Cart Is Empty</h1> : <Cartarr/>
            }
        </>
    )
}

export default Cart
