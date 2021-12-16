import React, { Component } from 'react';
import { connect } from 'react-redux';

export class KetQuaTroChoi extends Component {
  render() {
    return (
      <div style={{ fontSize: '2.5rem' }}>
        <div className="text-warning">{this.props.ketQua}</div>
        <div className="text-success">
          Số bàn thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="text-success">
          Tổng số bàn chơi:
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { ketQua, soBanThang, soBanChoi } = state.BaiTapOanTuXiReducer;
  return { ketQua, soBanThang, soBanChoi };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     __callBack: (data) => {
//       dispatch({
//         type: __DISPATCH_TYPE,
//         data,
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
export default connect(mapStateToProps)(KetQuaTroChoi);
