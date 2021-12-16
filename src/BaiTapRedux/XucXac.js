// rcredux -> snippet
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class XucXac extends Component {
  tongXucXac = 0;
  // Đạt ở đây để truy cập toàn class
  renderXucXac = () => {
    this.tongXucXac = 0;
    // Phải set lại trong đây
    // biến bên ngoài re-render lại ko bị reset !!

    return this.props.mangXucXac.map((xucXac, index) => {
      this.tongXucXac += xucXac.ma;
      return (
        <img
          key={index}
          className="ml-2"
          style={{ width: 50, height: 50 }}
          src={xucXac.hinhAnh}
          alt={xucXac.ma}
        />
      );
    });
  };

  renderTinhNham = () => {
    return (
      <p className="text-debug">
        {this.tongXucXac} - 11 {this.tongXucXac - 11 > 0 ? '>0' : '<=0'}
        <br></br>
        Chọn: {this.props.taiXiu ? 'Tài > 0' : ' Xỉu <= 0'}
        <br></br>
        {/* 
        https://react-cn.github.io/react/tips/if-else-in-JSX.html
        if-else ko hoạt động trong jsx
        -> toán tử 3 ngội hoặc hàm riêng,
          3 ngội bắt buộc trả về jsx
         */}
        {(this.props.taiXiu && this.tongXucXac > 11) ||
        (!this.props.taiXiu && this.tongXucXac <= 11) ? (
          <span className="text-success">Win</span>
        ) : (
          <span className="text-danger">Lose</span>
        )}
      </p>
    );
  };

  render() {
    return (
      <div>
        {this.renderXucXac()}
        <p className="text-debug">
          Tổng xúc xắc: {this.tongXucXac}
          {/* Phải connect tài vô mới render được */}
        </p>
        {this.renderTinhNham()}
      </div>
    );
  }
}
// Vì ( {}  ) là dạng arrow shorthand return thẳng trong ()
// const mapStateToProps = (state) => ({
//   mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
// });

const mapStateToProps = (state) => {
  const { mangXucXac, taiXiu } = state.BaiTapGameXucXacReducer;
  return { mangXucXac, taiXiu };
};

export default connect(mapStateToProps)(XucXac);
