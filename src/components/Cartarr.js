import React,{useContext} from 'react';
import {globalData} from '../context/Globalcontext'
import Cartlist from './Cartlist';
// import Paypal from './Paypal';

function Cartarr() {
    const {cartArr, total, clearCartArr} = useContext(globalData);

    return (
        <div className='container'>
            <h1 className='text-center mt-2'>Your Cart</h1>
            {
                cartArr.map(product => <Cartlist key={product.id} product={product} />)
            }

            <div className='row'>
                <div className='col-12 text-right'>
                    <button className='btn btn-outline-danger w-25' onClick={clearCartArr}>Clear Cart</button>
                    <h3 className='mt-3'>SUBTOTAL : ${total.subTotal}</h3>
                    <h3 className=''>TAX : ${total.tax}</h3>
                    <h3 className=''>TOTAL : ${total.total}</h3>
                    {/* <Paypal total={total} clearCartArr={clearCartArr}/> */}
                </div>
            </div>
        </div>
    )
}

export default Cartarr
