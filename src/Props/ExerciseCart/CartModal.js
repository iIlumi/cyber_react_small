import React, { Component } from 'react';

export default class CartModal extends Component {
  renderCart = () => {
    // let { gioHang } = this.props;
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
          <td>{soLuong}</td>
          <td>{donGia.toLocaleString()}</td>
          <td>{(donGia * soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa-maSP
            </button>
            <button
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
              className="btn btn-warning"
            >
              Xóa-index
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      // Modal b4-modal-default
      <div
        className="modal fade"
        id="cartModal"
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
              <h5 className="modal-title">Giỏ hàng</h5>
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
