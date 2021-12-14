import React, { Component } from 'react';
import Modal from './Modal';
import ProductList from './ProductList';

export default class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: 'black car',
      img: './carBasic/products/black-car.jpg',
      price: 1000,
    },
    {
      id: 2,
      name: 'red car',
      img: './carBasic/products/red-car.jpg',
      price: 2000,
    },
    {
      id: 3,
      name: 'silver car',
      img: './carBasic/products/silver-car.jpg',
      price: 3000,
    },
    {
      id: 3,
      name: 'Steel car',
      img: './carBasic/products/steel-car.jpg',
      price: 4000,
    },
  ];

  // setState phải ở cùng vị trí với state cha gốc
  // phải định nghĩa thuộc tính products trước state mới viết như dưới được 
  state = {
    productDetail: this.products[1],
  };

  xemChiTiet = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };
  render() {
    return (
      <div>
        <h3 className="display-4 text-center">Danh sách xe</h3>
        <ProductList productsData={this.products} xemChiTiet={this.xemChiTiet}/>
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
