import React, { useContext } from 'react'
import { ProductContext } from '../../context'

export default function CartItem(props) {
    const context = useContext(ProductContext)
    const { id, img, title, price, count, total } = props
    
    return (
        <div className="cart-wrap">
            <img className="cart-image" src={img} alt="cart-img" />
            <div className="cart-title">{title}</div>  
            <div className="cart-price">{price}</div>    
            <div className="cart-buttons">
                <span className="cart-panel"
                    onClick={() => context.decrement(id)}>
                    <i className="far fa-minus-square"></i>
                </span>

                <span className="cart-counter">{count}</span>
                
                <span className="cart-panel"
                    onClick={() => context.increment(id)}>
                    <i className="far fa-plus-square"></i>
                </span>

                <span className="cart-remove"
                    onClick={() => context.removeItem(id)}>
                    <i className="far fa-trash-alt"></i>
                </span>
            </div>
            <div className="cart-total">{total}</div>   
        </div>
    )
}
