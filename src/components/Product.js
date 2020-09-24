import React,{useContext} from 'react';
import '../assets/product.css';
import {Link} from 'react-router-dom';
import {globalData} from '../context/Globalcontext';


function Product(props) {
    const {product} = props;
    const {assignDetailProductObj, cartBtnHandle} = useContext(globalData)
    return (
        <div className='col-12 mx-auto mb-5 col-md-3'>
        <div className='card'>
            <div className='card-img p-2'>
                <Link to='/details'>
                    <img src={product.img} alt='product' onClick={() => assignDetailProductObj(product)} className='img-fluid'/>
                </Link>
                <div className='add-cart'>
                        <button className='btn btn-primary' onClick={()=> cartBtnHandle(product.id)} disabled={product.inCart? true : false}>
                        {
                            product.inCart ? 'In Cart' : <i className='fas fa-shopping-cart'></i>
                        }
                        </button>
                </div>
            </div>
            <div className='card-footer d-flex align-items-center justify-content-between'>
                <p className='font-weight-bold mb-0'>{product.title}</p>
                <p className='font-weight-bold mb-0'>${product.price}</p>
            </div>
        </div>
        </div>
    )
}

export default Product

