import React, { Component } from 'react';
import SanPham from './SanPham';
import dataPhone from '../Data/dataPhone.json';
// import dataPhone_bug from '../Data/dataPhone_bug.json';
// BUG dính kí tự lạ nhưng check ko ra -> config webpack ?

export default class DanhSachSanPham extends Component {
  // Bước tạo biến mới gán lại có vẻ ko cần lắm
  // Gọi trực tiếp dataPhone ra thao tác vẫn ok
  mangSanPham = dataPhone;

  state = {
    sanPhamChiTiet: this.mangSanPham[0],
  };

  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPhamProps={sanPham} xemChiTiet={this.xemChiTiet}/>
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamChon) => {
    console.log('sanPhamChon:', sanPhamChon)
    this.setState({
      sanPhamChiTiet: sanPhamChon,
    });
  };

  render() {
    let {
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      tenSP,
      hinhAnh,
    } = this.state.sanPhamChiTiet;

    return (
      <div className="container">
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img style={{ width: '100%' }} src={hinhAnh} alt={tenSP} />
          </div>
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
