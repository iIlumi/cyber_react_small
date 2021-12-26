import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';

export default function DanhSachCuoc(props) {
  // useSelector snippet
  // Select reducer cần dùng trong rootReducer
  // -> chọn / destruct trong initialState
  const danhSachCuoc = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.danhSachCuoc
  );
  // console.log(danhSachCuoc);

  // console.log('danh sách cược loaded');

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc quanCuoc={item} />
        </div>
      );
    });
  };

  return <div className="row mt-5">{renderDanhSachCuoc()}</div>;
}
