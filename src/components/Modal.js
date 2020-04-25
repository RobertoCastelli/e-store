import React, { useContext } from 'react'
import { ProductContext } from '../context'
import { Link } from 'react-router-dom'

export default function Modal() {
    const context = useContext(ProductContext)
    const { title, img, price } = context.modal
       
    if (!context.modalState) {
        return null
    } else {
        return (
            <div className="modal-container">
                <div className="modal-wrap">
                    <p>ITEM ADDED TO CART</p>
                    <h2>{title}</h2>
                    <img className="modal-image" src={img} alt="modal-img" />
                    <p>Price: €{price}</p>
                    <div className="modal-buttons">
                        <Link to="/">
                            <button
                                className="btn-store"
                                onClick={() => context.closeModal()}>
                                <i className="fas fa-store-alt fa-2x"></i>
                            </button>
                        </Link>
                        <Link to='/cart'>
                            <button
                                className="btn-cart-modal">
                                <i className="fas fa-shopping-cart fa-2x"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
