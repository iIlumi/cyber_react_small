import React, { Component } from 'react';
//Sử dụng thư viên connect để lấy dữ liệu từ store về
import { connect } from 'react-redux';

// Nếu connect redux store thì ko export default class
// -> export riêng dạng khác ở cuối file

class GioHangRedux extends Component {
  renderCart = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      let { maSP, tenSP, hinhAnh, soLuong, donGia } = spGioHang;
      return (
        <tr key={index}>
          <td>{maSP}</td>
          <td>
            <img
              style={{ width: 35, height: 35 }}
              src={hinhAnh}
              alt={hinhAnh}
            />
          </td>
          <td>{tenSP}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangGiamSoLuong(maSP, true);
              }}
            >
              +
            </button>
            {soLuong.toLocaleString()}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.tangGiamSoLuong(maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{donGia.toLocaleString()}</td>
          <td>{(donGia * soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  // Có thể binding trực tiếp vào jsx return luôn cũng được, 
  // khỏi tạo thêm ở ngoài
  tinhTongTien = () => {
    return this.props.gioHang
      .reduce((tongTien, spGioHang) => {
        return (tongTien += spGioHang.soLuong * spGioHang.donGia);
      }, 0)
      .toLocaleString();
  };

  render() {
    // Check thử redux có trả state vào props của component chưa
    console.log('GioHangRedux props:', this.props.gioHang);
    return (
      <div
        className="modal fade"
        id="cartModalRedux"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          style={{ minWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng REDUX</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4"></td>
                    <td>Tổng tiền</td>
                    <td>{this.tinhTongTien()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Hàm lấy state redux biến đổi thành props của component
// Đặt tên khác OK nhưng thường để tên này
const mapStateToProps = (state) => {
  //state là state tổng của ứng dụng chứa các state con (rootReducer)
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
// TODO Nếu trước đó có định nghĩa biến primitive props thì sao ?

//Hàm đưa dữ liệu lên reducer
// Tạo ra hàm dispatch trên props,
// hàm dispatch luôn return về obj action luôn có thuộc tính TYPE và các data đi kèm

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      //Tạo action
      let action = {
        type: 'XOA_GIO_HANG',
        maSP,
      };
      //Dùng phương thức dispatch redux cung cấp để đưa dữ liệu lên reducer
      console.log('maSP sẽ xóa: ', maSP);
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      //tangGiam = true => Xử lý tăng - tangGiam = false => Xử lý giảm
      //Tạo action để đưa dữ liệu lên reducer
      let action = {
        type: 'TANG_GIAM_SO_LUONG',
        //Thuộc tính bắt buộc để biết chạy vào case nào trong tất cả reducer
        maSP,
        tangGiam,
      };

      //Đưa action lên reducer mỗi lần người dùng click vào
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
// Syntax của HOC
