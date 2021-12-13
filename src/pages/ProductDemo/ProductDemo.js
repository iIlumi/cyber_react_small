import React, { Component } from 'react';
import ProductList from '../../Props/ProductList';
import w3s from './w3.module.css';
import dataJson from '../../Data/dataProductDemo.json';

export default class ProductDemo extends Component {
  render() {
    return (
      <div>
        <h4>Product demo</h4>
        <ProductList arrProduct={dataJson} />
      </div>
    );
  }
}
