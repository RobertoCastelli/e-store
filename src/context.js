import React, { useState } from 'react'
import { storeProducts, detailProduct } from '../src/data'

export const ProductContext = React.createContext()

export default function ProductProvider(props) {
    const [products, setProducts] = useState(storeProducts)
    const [details, setDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])


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

    return (
        <ProductContext.Provider value={{
            products,
            details,
            cart,
            setProducts,
            setDetails,
            setCart,
            handleDetails,
            handleCart
        }}>
            {props.children}    
        </ProductContext.Provider>
    )
}


