import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  //   componentDidMount = () => {
  //     console.log('ProductList props:', this.props);
  //     console.log('ProductList arrProduct from props:', this.props.arrProduct);
  //   }

  renderProductItem = () => {
    // console.log('ProductList props:', this.props);
    // console.log('ProductList arrProduct from props:', this.props.arrProduct);

    return this.props.arrProduct.map((item, index) => {
      return (
        <div
          key={index}
          className="col-4 mt-3 w3-container w3-center w3-animate-zoom"
        >
          <ProductItem dataProductItem={item} />
        </div>
      );
    });
  };
  render() {
    console.log('ProductList props:', this.props);
    console.log('ProductList arrProduct from props:', this.props.arrProduct);
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
