import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'

export default function Product(props) {
    const context = useContext(ProductContext)
    const { id, img, title, price } = props

    return (
        <div className="product-card">
            <h2>{title}</h2>
            <Link to='/details'>
                <img className="product-image"
                    alt="product-img"
                    src={img}
                    onClick={() => context.handleDetails(id)}
                />
            </Link>
            <div className="product-info">   
                <p>Price: €{price}</p>
            </div>
            <div className="buttons">
                <button className="btn-cart" onClick={() => context.handleCart(id)}><i className="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
    )
}
