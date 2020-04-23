import React from 'react'

export default function CartLabels() {
    return (
        <div className="cart-labels">
            <div className="cart-label-image">IMG</div>
            <div className="cart-label-product">PROD.</div>
            <div className="cart-label-price">€</div>
            <div className="cart-label-quantity">Q.TY</div>
            <div className="cart-label-totals">TOT €</div>
        </div>
    )
}
