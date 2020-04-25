import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'

export default function Product(props) {
    const context = useContext(ProductContext)
    const { id, img, title, price, inCart } = props

    console.log(inCart)
    return (
        <div className="product-card">
            <h2>{title}</h2>
            <Link to='/details'>
                <img
                    className="product-image"
                    alt="product-img"
                    src={img}
                    onClick={() => context.handleDetails(id)}
                />
            </Link>
            <div
                className="product-info">   
                <p>Price: €{price}</p>
            </div>
            <button
                className="btn-cart-product"
                onClick={() => {
                    context.handleCart(id)
                    context.openModal(id)
                }}
            >ciao
                
            </button>
        </div>
    )
}

// { {{ inCart }  ? (<p disabled>In Cart</p>)
//                     : (<i className="fas fa-cart-plus fa-2x"></i>)
//                 } 