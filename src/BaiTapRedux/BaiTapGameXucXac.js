import React, { Component } from 'react';
// import './BaiTapGameXucXac.css';
// vì css dạng class ít dùng nên chưa thấy overlap
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { Helmet } from 'react-helmet';

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
          // Helmet tự đưa lên đầu trang nên class game ở div cha vẫn ăn css 
          // Helmet lấy theo đường dẫn tuyệt đối
      <div className="game">
        <Helmet>
          <link rel="stylesheet" href="/cssHelmet/BaiTapGameXucXac.css" />
        </Helmet>
        <div className="title-game text-center pt-5 display-4">
          Bài tập game xúc xắc
        </div>

        <div className="row text-center mt-5">
          <div className="col-5">
            <button className="btnGame">TÀI</button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button className="btnGame">XỈU</button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center pb-3">
          <ThongTinTroChoi />
          <button className="btn btn-success p-2 display-4 mt-5">
            Play game
          </button>
        </div>
      </div>
    );
  }
}
