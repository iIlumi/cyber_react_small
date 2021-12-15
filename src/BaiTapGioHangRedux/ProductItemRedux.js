import React, { Component } from 'react';

export default class ProductItemRedux extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.sanPhamProps;

    return (
      <div className="card text-center">
        <img
          style={{ width: 250, height: 250, marginLeft: 50 }}
          className="card-img-top"
          src={hinhAnh}
          alt={tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button className="btn btn-success" onClick={() => {}}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
