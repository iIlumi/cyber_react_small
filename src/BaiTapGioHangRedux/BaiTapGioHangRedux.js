import React, { Component } from 'react';
import GioHangRedux from './GioHangRedux';
import ProductListRedux from './ProductListRedux';

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG - REDUX</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: 'pointer' }}
            data-toggle="modal"
            data-target="#cartModalRedux"
          >
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down"></i>(0) Giỏ hàng
            </i>
          </span>
        </div>
        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}
