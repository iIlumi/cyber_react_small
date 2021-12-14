import React, { Component } from 'react';

export default class ProductItem extends Component {
  // {image, alias, name, price } = this.props.dataProductItem;
  // ko destrucring bên ngoài như vậy trong React được kể cả có ĐN let hay ko
  render() {
    let { image, alias, name, price } = this.props.dataProductItem;
    return (
      // b4-card-align
      <div className="card text-left">
        <img className="card-img-top" src={image} alt={alias} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
          <button className="text-white w3-button w3-black">
            Add to cart <i className="fa fa-cart-arrow-down"></i>{' '}
          </button>
        </div>
      </div>
    );
  }
}
