import React, { useContext } from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'

export default function Navbar() {
    const context = useContext(ProductContext)
  
    return (
        <nav>
            <Link to='/'>
                <div
                    className="nav-brand">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <ul className="nav-links">
                <Link to="/">
                    <li
                        className="btn-nav-store">
                        <i className="fas fa-store-alt fa-2x"></i>
                    </li>
                </Link>
                <Link to="/cart">
                    <li
                        className="btn-nav-cart">
                        <i className="fas fa-cart-arrow-down fa-2x">
                            <span> {context.cart.length}</span>
                        </i>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
