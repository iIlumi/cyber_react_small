import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

// vid 18, part2 - 8 missing

export default class BaiTapThuKinh extends Component {
  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          style={{ width: '110px', cursor: 'pointer' }}
          key={index}
          src={glassesItem.url}
          alt="kinh mau"
        />
      );
    });
  };

  render() {
    const styleGlasses = {
      width: '150px',
      top: '75px',
      right: '70px',
      opacity: '0.7',
    };

    // Cheat theo cộng trừ kích thước của overlay cuối
    // Check lại các bài css cũ xem cách khác
    // Hoặc transform stranslate 100% ?
    const infoGlasses = {
      width: '250px',
      top: '200px',
      left: '270px',
      paddingLeft: '15px',
      backgroundColor: 'rgba(255,127,0,.5)',
      textAlign: 'left',
      height: '105px',
    };

    /**
     * minHeight và background size là placeholder để cover toàn bộ page
     * -> cheat overlay cho toàn bộ trang và cheat cover
     * Cách làm đúng ? dùng width 100% ?
     *
     * Bài đang làm theo col-6 của row lớn
     * -> nên set lại thành card sẽ hợp lí hơn
     * Hoặc img người mẫu phải là relative, kính và mô tả overlay là abs
     */

    return (
      <div
        style={{
          backgroundImage: 'url(./glassesImage/background.jpg)',
          backgroundSize: '2000px',
          minHeight: '2000px',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
          <h3
            style={{ backgroundColor: 'rgba(0, 0 ,0,.3)' }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: '250px' }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src="./glassesImage/v1.png"
                    alt="kinh chon thu"
                  />
                  <div style={infoGlasses} className="position-relative ">
                    <span
                      style={{ color: '#AB82FF', fontSize: '17px' }}
                      className="font-weight-bold"
                    >
                      Tên kính
                    </span>{' '}
                    <br />
                    <span style={{ fontSize: '13px', fontWeight: '400' }}>
                      Mô tả
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: '250px' }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          {/* Div chứa các kính được chọn */}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
