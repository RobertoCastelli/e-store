import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'
import Title from './Title'

export default function Details() {
    const context = useContext(ProductContext)
    const { img, info, price, title } = context.details

    return (
        <div className="detail-container">
            <Title title="PRODUCT DETAIL" />
            <h2>{title}</h2> 
                <img className="detail-image" src={img} alt="detail-img" />
                <div className="detail-info">
                    <p>Price: €{price}</p>
                    <p>{info}</p>
                    <Link to="/">
                        <button className="btn-store"><i className="fas fa-store-alt fa-2x"></i></button>
                    </Link>
                </div>
        </div>
 
    )
}
