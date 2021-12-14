import React, { Component } from 'react';

export default class SanPham extends Component {
  render() {
    let { sanPhamProps } = this.props;
    // destructering hơi sida, có thể tách xuống sâu hơn nữa
    // demo cách mới thử
    // TODO fix thử css image
    /**
     * this.props hiện đang có 1 obj là sanPhamProps và callback xemChiTiet
     * Chú ý assign trên là destrucring bóc riêng ra, ko phải là bind this
     * This qua arrow s6 ko bị thay đổi
     * -> Nếu truyền thằng this.props vào callBack sẽ sai 
     */
    let { hinhAnh, tenSP, giaBan } = this.props.sanPhamProps;

    return (
      <div className="card text-left text-center">
        <img
          style={{ width: 250, height: 250, marginLeft: 50 }}
          className="card-img-top"
          src={hinhAnh}
          alt={tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(sanPhamProps);
            }}
            className="btn btn-success"
          >
            log(sanPhamProps)
          </button>
          <button
            onClick={() => {
              this.props.xemChiTiet(this.props);
            }}
            className="btn btn-success"
          >
            log(this.props)
          </button>
          <button
            onClick={() => {
              this.props.xemChiTiet(this.props.sanPhamProps);
            }}
            className="btn btn-success"
          >
            log(this.props.sanPhamProps)
          </button>
        </div>
      </div>
    );
  }
}
