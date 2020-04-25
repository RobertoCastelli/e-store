import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from '../src/data'

export const ProductContext = React.createContext()

export default function ProductProvider(props) {
    const [products, setProducts] = useState(storeProducts)
    const [details, setDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [totale, setTotale] = useState(0)
    const [modal, setModal] = useState(detailProduct)
    const [modalState, setModalState] = useState(false)
  
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
        const tempProducts = [...products]
        tempProducts.map(item => {
            return (
                item.count = 1,
                item.total = item.price
            )
        })
        setProducts(tempProducts)
        setCart([])
    }

    const openModal = id => {
        const product = getItem(id)
        return (
        setModal(product),
        setModalState(true)
        )
    }

    const closeModal = () => setModalState(false)

    const removeItem = id => {
        let tempCart = [...cart]
        tempCart = tempCart.filter(item => {
            return (
                item.count = 1,
                item.total = item.price,
                item.id !== id
            )
        })
        setCart(tempCart) 
    }

    const increment = id => {
        const tempCart = [...cart]
        const product = tempCart.find(item => item.id === id)
        product.count = product.count + 1
        product.total = product.count * product.price
        setCart(tempCart)
    }

    const decrement = id => {
        const tempCart = [...cart]
        const product = tempCart.find(item => item.id === id)
        product.count = product.count - 1
        product.total = product.count * product.price
        setCart(tempCart)
        if (product.count <= 0) {
            product.count = 1
            removeItem(id)
        }
    }

    const handleTotals = () => {
        let tempSubtotal = 0
        cart.map(item => tempSubtotal += item.total)
        let tempTax = tempSubtotal * 0.22
        tempTax = parseFloat((tempTax).toFixed(2))
        let tempTotale = tempSubtotal + tempTax
        setSubtotal(tempSubtotal)
        setTax(tempTax)
        setTotale(tempTotale)
    }

    useEffect(() => handleTotals())

    return (
        <ProductContext.Provider value={{
            products,
            details,
            cart,
            subtotal,
            tax,
            totale,
            modal,
            modalState,
            setModalState,
            setModal,
            setProducts,
            setDetails,
            setCart,
            setSubtotal,
            setTax,
            setTotale,
            handleDetails,
            handleCart,
            clearCart,
            removeItem,
            increment,
            decrement,
            openModal,
            closeModal
        }}>
            {props.children}    
        </ProductContext.Provider>
    )
}


