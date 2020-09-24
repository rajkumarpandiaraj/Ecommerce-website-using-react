import React,{useContext} from 'react';
import {globalData} from '../context/Globalcontext';
import {Link} from 'react-router-dom'


function Details() {
    const {detailProductObj} = useContext(globalData)
    console.log(detailProductObj);
    return (
        <div className='container'>
            <h1 className='text-center my-3'>{detailProductObj.title}</h1>
            <div className='row mt-5'>
                <div className='col-12 col-md-6 text-right'>
                    <img src={detailProductObj.img} alt='product' className='img'/>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start'>
                    <h1>Model : {detailProductObj.title}</h1>
                    <h4>MADE BY : {detailProductObj.company}</h4>
                    <h5>Price : ${detailProductObj.price}</h5>
                    <h6>Some Info About Product :</h6>
                    <p>{detailProductObj.info}</p>
                    <div className='d-flex'>
                        <Link to='/'>
                            <button className='btn btn-outline-primary mb-4'>Back To Products</button>
                        </Link>
                            <button className='btn btn-outline-warning ml-3 mb-4'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
