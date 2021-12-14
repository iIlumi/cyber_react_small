import React, { Component } from 'react';
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      { maSP: 1, hinhAnh: '', tenSP: 'tên mặc định', soLuong: 1, donGia: 0 },
    ],
  };

  themGioHang = (sanPham) => {
    console.log(sanPham);
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: 'pointer' }}
            data-toggle="modal"
            data-target="#cartModal"
          >
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down"></i>(0) Giỏ hàng
            </i>
          </span>
        </div>
        <CartModal gioHang={this.state.gioHang} />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    );
  }
}
