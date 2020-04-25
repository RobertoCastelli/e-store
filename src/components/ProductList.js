import React, { useContext } from 'react'
import { ProductContext } from '../context'
import Product from './Product'
import Title from './Title'
import Modal from './Modal'

export default function ProductList() {
    const context = useContext(ProductContext)

    let productsList = context.products.map(item => {
        return <Product
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
        />
    })

    return (
        <div className="container">
            <Title title="E-STORE" />
            <div className="product-list">
                {productsList}
                <Modal />
            </div>
        </div>
    )
}
