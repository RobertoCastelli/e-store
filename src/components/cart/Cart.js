import React, { useContext } from 'react'
import { ProductContext } from '../../context'
import Title from '../Title'
import CartItem from './CartItem'
import CartLabels from './CartLabels'
import CartTotals from './CartTotals'
import EmptyCart from './EmptyCart'

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
            total={item.total}
        />
    })

    if (context.cart.length > 0) {
        return (
            <div className="cart-container">
                <Title title="YOUR CART" />
                <CartLabels />
                {cartList}
                <CartTotals />
            </div>
        )
    } else {
        return <EmptyCart />
    }
}
    
