import React, { Component } from 'react';
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.handleProductDelete = this.handleProductDelete.bind(this)
    }

    handleProductDelete(id) {
        axios.delete(`/api/products/${id}`)
            .then(window.location.reload())
    }

    render() {
        const products = this.props.products
        return (
            <div>
                <ul>
                    {products.map((product) => {
                        return <Product product={product} index={product.id} deleteProduct={this.handleProductDelete} />
                    })}
                </ul>
            </div>
        )
    }
}