import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <div className="nav-brand"><img src={logo} alt="logo"/></div>
            </Link>
            <ul className="nav-links">
                <Link to="/">
                    <li><i className="fas fa-store-alt fa-2x"></i></li>
                </Link>
                <Link to="/cart">
                    <li><i className="fas fa-cart-arrow-down fa-2x"></i></li>
                </Link>
            </ul>
        </nav>
    )
}
