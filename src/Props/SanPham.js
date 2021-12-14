import React, { Component } from 'react';

export default class SanPham extends Component {
  render() {
    return (
      <div className="card text-left text-center">
        <div className="card-body">
          <h4 className="card-title">sanPhamProps.tenSP</h4>
          <p className="card-text">sanPhamProps.giaBan.toLocaleString()</p>
          <button onClick={() => {}} className="btn btn-success">
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
