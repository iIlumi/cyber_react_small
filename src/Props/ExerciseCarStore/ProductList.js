import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderProductItem = () => {
    //this.props.productsData do ExerciseCarStoreComponent truyền vào
    // Tiếp tục truyền callback xemChiTiet xuống dưới
    // Truyền tới khi gặp được btn dùng gọi hàm đó mới dừng lại !!
    // Khi này xemChiTiet là 1 thuộc tính của props nên gọi qua this.props
    return this.props.productsData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem item={product} xemChiTiet={this.props.xemChiTiet} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
