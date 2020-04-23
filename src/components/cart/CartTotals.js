import React, { useContext } from 'react'
import { ProductContext } from '../../context'

export default function CartTotals() {
    const context = useContext(ProductContext)
 
    return (
        <div className="cart-totals-wrap">
            <div className="cart-totals">
                <div>Subtotal: {context.subtotal}</div>
                <div>Tax €2</div>
                <div>TOTAL €12</div>
                <button
                    className="btn-clear"
                    onClick={() => context.clearCart()}
                ><i className="far fa-window-close fa-2x"></i>
                </button>
            </div>
        </div>
    )
}
