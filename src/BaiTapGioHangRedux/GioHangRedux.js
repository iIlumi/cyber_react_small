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
          <td>{soLuong.toLocaleString()}</td>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
// Syntax của HOC
