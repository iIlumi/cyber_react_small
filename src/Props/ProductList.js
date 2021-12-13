import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {



    render() {
        console.log("ProductList props:", this.props)
        console.log("ProductList arrProduct from props:", this.props.arrProduct)
        return (
            <div className="row">
                this.renderProductItem()
            </div>
        )
    }
}
