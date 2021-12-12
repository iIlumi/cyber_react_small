import React, { Component } from 'react';
import dataFilms from '../Data/DataFilms.json';
// Load data json thì ko cần require

export default class BaiTapRenderFilms extends Component {
  // trả về mảng nhớ thêm key="{index}"
  renderFilms = () => {
    return dataFilms.map((film, index) => {
return  <div className="col-3 mt-2" key = {index}>
<div className="card text-white bg-dark ml-5" style={{ width: '250px' }}>
  <img style={{ width: '250px', height: '350px' }} className="card-img-top"  alt="img card"/>
  <div className="card-body">
    <h4 className="card-title" style={{ fontSize: '17px', height: '50px' }}>
      {film.tenPhim}
    </h4>
    <p className="card-text" style={{ fontSize: '13px', height: '50px' }}>
      {film.moTa.length}
    </p>
  </div>
</div>
</div>;
    });
    
  };

  //Bước 1: Xây dựng giao diện
  // Trước khi copy đổi 2 div của return thành () trước
  // Vì html tĩnh đã bọc div lại kèm css
  // html -> jsx
  // các giá trị px bị lỗi convert phải tự thêm lại "px" vào -> check qua màu
  // Vẫn ko ok lắm, phải check tay lại
  // file bgcImgage trong root ban đầu bị sai tên
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(./background/avenger.jpg)',
          minHeight: '2000px',
        }}
      >
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, .5)', minHeight: '2000px' }}
        >
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ backgroundColor: 'rgba(87,83,149,0.8)' }}
          >
            <a className="navbar-brand" href="/btrenderphim">
              Navbar
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/btrenderphim">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/btrenderphim">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/btrenderphim"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="/btrenderphim">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="/btrenderphim">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid mt-5">
            <div className="row">{this.renderFilms()}</div>
          </div>
        </div>
      </div>
    );
  }
}
