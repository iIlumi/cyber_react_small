import React from 'react';
import DiemCuoc from './DiemCuoc';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
// import './BaiTapGameBauCua.css';
import Helmet from 'react-helmet';

export default function BaiTapGameBauCua(props) {
  console.log('game bầu cua loaded');
  return (
    <div
      id="BaiTapGameBauCua"
      className="container-fluid"
      style={{ margin: 0 }}
    >
      <Helmet>
        <link rel="stylesheet" href="/cssHelmet/BaiTapGameBauCua.css" />
      </Helmet>
      <DiemCuoc />

      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}
