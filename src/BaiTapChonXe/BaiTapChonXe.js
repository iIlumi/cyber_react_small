/**
 * https://bitly.com/3agN00Z
 * https://drive.google.com/drive/folders/1usu44aCL3o-Lnh9hbtXYVwOZMS6cN3Dm
 * Resource BT chọn xe
 */
import React, { Component } from 'react';

export default class BaiTapChonXe extends Component {
  /**
   * Nếu img link thì chèn string link bt, ko cần {} -> page databinding
   *
   * Nếu img ko lấy từ link mà có data thì dùng src={require()}
   * Because when you put the require() thing you get the Module object, which has a default property and it has our url (screenshot attached below)
   * Tuy nhiên nếu dùng đường dẫn tuyệt đối vào thư mục public thì ok
   * Toàn bộ file trong src sẽ bị build lại khác đường dẫn hết nên cần require
   * -> vd render mảng làm cách 2
   *
   * https://stackoverflow.com/questions/34582405/react-wont-load-local-images
   * npm run build -> check sẽ có thư mục build , sẽ thấy các link require
   * Hoặc check qua check-tool
   */

  /**
   * b4-card-background
   * -> convert html to jsx ngay
   * 
   * bug layout img so với clip -> fix nhanh bằng pr-0 ?
   */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: '100%' }}
              src={require('../assets/chonXe/products/black-car.jpg').default}
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2 pr-0"
                    src={
                      require('../assets/chonXe/icons/icon-black.jpg').default
                    }
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>

                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2 pr-0"
                    src={
                      require('../assets/chonXe/icons/icon-steel.jpg').default
                    }
                    alt="steel"
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2 pr-0"
                    src={
                      require('../assets/chonXe/icons/icon-silver.jpg').default
                    }
                    alt="silver_icon"
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div
                  className="row border border-link pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="col-2 pr-0"
                    // src={require('../assets/chonXe/icons/icon-red.jpg').default}
                    src='./carbasic/icons/icon-red.jpg'
                    alt="red_icon"
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
