import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN: <span className="text-danger"> {this.props.taiXiu}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG:{' '}
          <span className="text-success"> {this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:
          <span className="text-primary"> {this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { taiXiu, soBanThang, tongSoBanChoi } = state.BaiTapGameXucXacReducer;
  return { taiXiu, soBanThang, tongSoBanChoi };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
