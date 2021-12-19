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

  xoaGioHang = (maSP) => {
    //Thực hiện tính năng xóa giỏ hàng
    // mutate dạng xóa thì OK ?
    console.log('maSP sẻ xóa:', maSP);

    // Từ maSP -> index trong Array State -> Xóa
    let index = this.state.gioHang.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });

    //this.setState ....
  };

  xoaGioHangIndex = (index) => {
    console.log('index trong array state sẽ xóa:', index);
    this.state.gioHang.splice(index, 1);

    this.setState({
      // gioHang: this.state.gioHang.splice(index, 1)
      // Ẩu, splice mutate trực tiếp mà lại assign cùng lúc
      gioHang: this.state.gioHang,
    });
  };

  tinhTongSoLuong = () => {
    // Dùng for
    // let tongSoLuong = 0;
    // for(let i=0;i<this.state.gioHang.length;i++){
    //     let spGioHang = this.state.gioHang[i];
    //     tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;
    //Reduce
    return this.state.gioHang
      .reduce((tongSoLuong, spGioHang) => {
        return (tongSoLuong += spGioHang.soLuong);
      }, 0)
      .toLocaleString();
  };

  // Có thể viết sang dạng truyền index luôn
  tangGiamSoLuong = (maSP, number) => {
    // 1 -> tăng, -1 -> giảm
    // ko mutate trực tiếp mà copy ra, 
    // trùng tên OK để tiện code nhanh, khỏi suy nghĩ tên biến
    let gioHang = [...this.state.gioHang];

    let index = gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert('Số lượng tối thiểu ít nhất là 1!');
        this.xoaGioHangIndex(index);
        return;
      }
      // Tìm ra spGioHang trong giỏ hàng thứ index => tăng số lượng
      gioHang[index].soLuong += number;
    }

    // Render và gán lại giá trị state.gioHang
    this.setState({
      gioHang: gioHang,
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
              {/* Có thể inline trực tiếp tính tổng vào, tùy người nhưng rối code */}
              <i className="fa fa-cart-arrow-down"></i>({this.tinhTongSoLuong()}
              ) Giỏ hàng
            </i>
          </span>
        </div>
        <CartModal
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
          xoaGioHangIndex={this.xoaGioHangIndex}
        />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    );
  }
}
