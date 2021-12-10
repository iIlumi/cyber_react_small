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
   *
   * https://stackoverflow.com/questions/34582405/react-wont-load-local-images
   */

  /**
   * b4-card-background
   * -> convert html to jsx ngay
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
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
