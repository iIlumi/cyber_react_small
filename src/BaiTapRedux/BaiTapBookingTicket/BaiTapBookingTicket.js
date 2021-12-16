import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: '100%',
        }}
      >
        <Helmet>
          <link rel="stylesheet" href="/cssHelmet/BaiTapBookingTicket.css" />
        </Helmet>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className="container-fluid pt-4 pb-5">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-4 text-warning">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-3 text-light" style={{ fontSize: '25px' }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <div className="screen"></div>
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: '35px' }} className="text-light mt-2">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
