import React, { Component } from 'react';
import SanPham from './SanPham';
import dataPhone from '../Data/dataPhone.json';
// import dataPhone_bug from '../Data/dataPhone_bug.json';

export default class DanhSachSanPham extends Component {
  mangSanPham = dataPhone;

  state = {
    sanPhamChiTiet: this.mangSanPham[0],
  };

  render() {
    let { manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } =
      this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>
        <div className="row">
          <div className="col-4">this.renderSanPham()</div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
