import React from 'react'

export default function CartTotals() {
    return (
        <div className="cart-totals-wrap">
            <div className="cart-totals">
                <div>Subtotal €10</div>
                <div>Tax €2</div>
                <div>TOTAL €12</div>
                <button className="btn-clear"><i class="far fa-window-close fa-2x"></i></button>
            </div>
        </div>
    )
}
