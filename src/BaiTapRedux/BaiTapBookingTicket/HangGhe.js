import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

export class HangGhe extends Component {
  // Ghế là các button có thể click được
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // Thông tin đã đặt phải get từ server trước -> "đã" đặt
      let cssGheDaDat = '';
      let disabled = false;
      // index != 0 -> data có thuộc tính daDat -> dùng để xác định state
      // css theo kiểu gán className, ko dùng style ở đây
      // disable có thể quản lý qua css luôn cũng được (ở đây qua ionline-css)

      //   Xét state get từ server về lần 1
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }
      // Xét state của client - redux hiện tại -> "ĐANG" đặt
      let cssGheDangDat = '';
      // Vì cấu trúc data đẹp sẵn với id duy nhất - soGhe kèm ghế
      //   -> công việc check id đơn giản
      // css cheat bằng cách dùng cả ghế đang và ghế đã cùng lúc !!
      //   -> ghế đã đặt phải đặt sau để có ưu tiên cao hơn đang đặt
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
          // (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
          // Cheat sol:
          (gheDangDat) => gheDangDat === ghe.soGhe
        
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon';
      }
      return (
        <button
          onClick={() => {
            this.props.datGheCheat(ghe.soGhe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDangDat} ${cssGheDaDat}`}
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
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Assigning to new variable names
const mapStateToProps = (state) => {
  const { danhSachGheDangDat_cheat: danhSachGheDangDat  } = state.BaiTapDatVeReducer;
  return { danhSachGheDangDat };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGheCheat: (data) => {
      dispatch({
        type: 'DAT_GHE_CHEAT',
        data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
