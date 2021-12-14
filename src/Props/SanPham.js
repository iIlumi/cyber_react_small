import React, { Component } from 'react';

export default class SanPham extends Component {
  render() {
    let { sanPhamProps } = this.props;
    // destructering hơi sida, có thể tách xuống sâu hơn nữa
    // demo cách mới thử
    // TODO fix thử css image
    
    return (
      <div className="card text-left text-center">
        <img
          style={{ width: 250, height: 250, marginLeft: 50 }}
          className="card-img-top"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
          <button onClick={() => {}} className="btn btn-success">
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
