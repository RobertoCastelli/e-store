import React, { useContext } from 'react'
import { ProductContext } from '../../context'
import Title from '../Title'
import CartItem from './CartItem'
import CartLabels from './CartLabels'
import CartTotals from './CartTotals'

export default function Cart() {
    const context = useContext(ProductContext)
    
    let cartList = context.cart.map(item => {
        return <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            count={item.count}
        />
    })
    
    return (
        <div className="cart-container">
            <Title title="YOUR CART" />
            <p>In Cart: {context.cart.length}</p>
            <CartLabels />
            {cartList}
            <CartTotals />
        </div>
    )
}
