import React from 'react';
import { useSelector } from 'react-redux';
import DemoDice from './DemoDice';
import XucXac from './XucXac';

export default function DanhSachXucXac() {
  const { mangXucXac } = useSelector((state) => state.BaiTapGameBauCuaReducer);
  // Ở đây là sẽ ko loop render mà sẽ gán trực tiếp vào layout luôn
  // Vì layout game ko phải dạng tuần tự cùng cấu trúc như bt
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginLeft: 75 }}>
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row" style={{ marginTop: -20 }}>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '20%', marginTop: '5%' }}>
        <button className="btn btn-success p2" style={{ fontSize: '25px' }}>
          Xốc
        </button>
      </div>
      <hr />
      <DemoDice />
    </div>
  );
}
