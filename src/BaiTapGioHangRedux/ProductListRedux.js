import React, { Component } from 'react';
import ProductItemRedux from './ProductItemRedux';
import mangSanPham from '../Data/dataPhone.json';

export default class ProductListRedux extends Component {
  renderSanPham = () => {
    return mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItemRedux sanPhamProps={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
