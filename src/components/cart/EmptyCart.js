import React from 'react'
import empty from '../../empty.png'

export default function EmptyCart() {
    return (
        <div className="empty-container">
            <h1>YOUR CART IS ...</h1>
            <img className="empty-image" src={empty} alt="empty-img"/>
        </div>
    )
}
