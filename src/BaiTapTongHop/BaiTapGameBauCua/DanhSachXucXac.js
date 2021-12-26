import React from 'react';
import { head } from 'lodash';
import XucXac from './XucXac';

export default function DanhSachXucXac() {
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: '75px' }}>
            <XucXac />
          </div>
          <div className="col-6 text-right mt-5">
            <XucXac />
          </div>
          <div className="col-6 mt-5">
            <XucXac />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '30%', marginTop: '5%' }}>
        <button className="btn btn-success p2" style={{ fontSize: '25px' }}>
          Xốc
        </button>
      </div>
    </div>
  );
}
