import React, { useState } from 'react'
import { storeProducts, detailProduct } from '../src/data'

export const ProductContext = React.createContext()

export default function ProductProvider(props) {
    const [products, setProducts] = useState(storeProducts)
    const [details, setDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState(0)
  

    const getItem = id => {
        const product = products.find(item => item.id === id)
        return product
    }

    const handleDetails = id => {
        const product = getItem(id)
        setDetails(product)
    }

    const handleCart = id => {
        const product = getItem(id)
        setCart([...cart, product])
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = id => {
        setCart(cart.filter(item => item.id !== id)) 
    }

    const increment = id => {
        const tempCart = [...cart]
        const product = tempCart.find(item => item.id === id)
        product.count = product.count + 1
        product.total = product.count * product.price
        handleTotals()
        setCart(tempCart)
    }

    const decrement = id => {
        const tempCart = [...cart]
        const product = tempCart.find(item => item.id === id)
        product.count = product.count - 1
        product.total = product.count * product.price
        handleTotals()
        setCart(tempCart)
        if (product.count <= 0) {
            removeItem(id)
        }
    }

    const handleTotals = () => {
        const tempCart = [...cart]
        let tempSubtotal = 0
        tempCart.map(item => tempSubtotal += item.total)
        setSubtotal(tempSubtotal)
    }

    return (
        <ProductContext.Provider value={{
            products,
            details,
            cart,
            subtotal,
            setProducts,
            setDetails,
            setCart,
            setSubtotal,
            handleDetails,
            handleCart,
            clearCart,
            removeItem,
            increment,
            decrement,
        }}>
            {props.children}    
        </ProductContext.Provider>
    )
}


