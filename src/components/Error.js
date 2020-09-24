import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div className='container'>
            <div className='row text-center mt-3'>
                <div className='col-12'>
                    <h1>404</h1>
                    <h2 className='my-3'>ERROR NOT FOUND</h2>
                    <Link to='/'>
                        <button className='btn btn-outline-info'>Back To Product</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error
