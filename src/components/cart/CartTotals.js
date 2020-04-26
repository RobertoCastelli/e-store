import React, { useContext } from 'react'
import PayPal from './PayPal'
import { ProductContext } from '../../context'
import { Link } from 'react-router-dom'

export default function CartTotals() {
    const context = useContext(ProductContext)

 
    return (
        <div className="cart-totals-wrap">
            <hr/>
            <div className="cart-totals">
                <div>Subtotal: €{context.subtotal}</div>
                <div>22% Tax: €{context.tax}</div>
                <div><strong>TOTAL: €{context.totale}</strong></div>   
            </div>
            <Link to='/'>
                <button
                    className="btn-clear"
                    onClick={() => {
                        context.clearCart()
                        context.closeModal()
                    }}
                >CLEAR ALL
                </button>           
            </Link>
            <PayPal total={context.totale}  />
        </div>
    )
}
