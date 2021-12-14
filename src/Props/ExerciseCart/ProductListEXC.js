import React, { Component } from 'react';
import ProductItemEXC from './ProductItemEXC';
import mangSanPham from '../../Data/dataPhone.json';

export default class ProductListEXC extends Component {
  renderSanPham = () => {
    //   Nếu ko gán biến như DanhSachSanPham.js thì khi import có thể gọi trực tiếp
    return mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItemEXC
            themGioHang={this.props.themGioHang}
            sanPhamProps={sanPham}
          />
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
