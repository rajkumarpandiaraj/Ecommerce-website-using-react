import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand d-flex align-items-center">
            <Link to='/'>
                <img src={logo} alt={logo}/>
                <span className='ml-3 text-decoration-none text-white'>Product</span>
            </Link>
        </div>
        <Link to='/cart'>
            <button className="btn btn-outline-primary my-2 my-sm-0 ml-auto" type="submit">
                <i className='fas fa-shopping-cart'></i> <span className='ml-2'>Cart</span>
            </button>
        </Link>
    </nav>
    )
}

export default Navbar
