import React, { Component } from 'react';
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      // Set gioHang về rõng để ko trùng maSP
      // Lúc đầu set ta5jm để check giao diện render
      // { maSP: 1, hinhAnh: '', tenSP: 'tên mặc định', soLuong: 1, donGia: 0 },
    ],
  };

  themGioHang = (sanPham) => {
    console.log('sanPham:', sanPham);
    // Cách viết bình thường:
    // let spGioHang = {
    //     maSP: sanPham.maSP,
    //     tenSP: sanPham.tenSP,
    //     donGia: sanPham.giaBan,
    //     soLuong: 1,
    //     hinhAnh: sanPham.hinhAnh
    // }
    // es6 Using Object Destructuring and Property Shorthand
    // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties?page=1&tab=active#tab-top
    let spGioHang = (({ maSP, tenSP, hinhAnh, giaBan }) => ({
      maSP,
      tenSP,
      hinhAnh,
      donGia: giaBan,
      soLuong: 1,
    }))(sanPham);
    console.log('spGioHang:', spGioHang);

    /**
     * es6 push style
     * let gioHangCapNhat = [...this.state.gioHang, spGioHang];
     * Thay vì
     * this.state.gioHang.push(spGioHang)
     */

    // Ko mutate trực tiếp vào state.gioHang mà tạo 1 deepCopy
    let newStateGioHang = [...this.state.gioHang];

    //Tìm xem sản phẩm đã có trong giỏ hàng chưa

    let index = newStateGioHang.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );

    if (index !== -1) {
      //tìm thấy sản phẩm được click chứa trong giỏ hàng => Tăng số lượng
      newStateGioHang[index].soLuong += 1;
    } else {
      //Không tìm thấy trong giỏ hàng chứa sp đó => thêm sp đó vào giỏ
      newStateGioHang.push(spGioHang);
    }
    // let gioHangCapNhat = [...this.state.gioHang];
    this.setState({
      gioHang: newStateGioHang,
    });
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
