import React, { Component, Fragment } from 'react';

export default class HangGhe extends Component {
  // Ghế là các button có thể click được
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;
      // index != 0 -> data có thuộc tính daDat -> dùng để xác định state
      // css theo kiểu gán className, ko dùng style ở đây
      // disable có thể quản lý qua css luôn cũng được (ở đây qua ionline-css)
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }
      return (
        <button
          onClick={() => {}}
          disabled={disabled}
          className={`ghe ${cssGheDaDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  // render ra dãy số 1 -> 12 ở hàng đầu tiên (index = 0 )
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  // hangGhe={hangGhe} soHangGhe={index}
  // Nếu index = 0 -> render ra dãy số 1 -> 12
  // còn lại sẽ render ra ô ghế
  // Hàng ghế đã được bọc trong div cha rồi
  // Nếu cần css riêng có thể bọc lại div bt
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <Fragment>
          <span style={{ display: 'inline-block', width: '15px' }}>
            {this.props.hangGhe.hang}
          </span>
          {this.renderGhe()}
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-1"
        style={{
          fontSize: 30,
          alignSelf: 'flex-start',
          width: '100%',
          //   marginLeft: '4rem',
        }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
