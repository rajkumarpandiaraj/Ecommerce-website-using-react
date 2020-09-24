import React,{useContext} from 'react';
import {globalData} from '../context/Globalcontext';
import Product from './Product';

function Productlist() {
    const {productListArr} = useContext(globalData);
    return (
        <div className='container my-2'>
            <h2 className='my-3 text-center display-4 font-weight-bold'>Our Products</h2>
            <div className='row'>
                    {
                        productListArr.map(product => <Product key={product.id} product={product}/>)
                    }

            </div>
        </div>
    )
}

export default Productlist


