import React, { Component } from 'react';
import './BaiTapChonXeNangCao.css';
//Import mảng dữ liệu các model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';
export default class BaiTapChonXeNangCao extends Component {
  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div className="row border border-color-default m-3 p-2" key={index}>
          <div className="col-2 d-flex align-items-center">
            {/* <img style={{ width: '100%' }} src={item.img} alt={index} /> */}
          </div>
          <div className="col-10">
            <h3>{item.title}</h3>
            <span>{item.type}</span>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div className="row border border-color-default m-3 p-2" key={index}>
          <div className="col-2">
            <img style={{ width: '100%' }} src={item.img} alt={index} />
          </div>
          <div className="col-10 d-flex align-items-center">
            <span>{item.title}</span>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    //Đây là phương thức có sẵn của component tự động thực thi sau khi render được gọi, lưu ý: componentDidmount chỉ chạy 1 lần đầu tiên sau khi render thực thi
    // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js"></script>

    let tagScript = document.createElement('script');
    tagScript.src =
      'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js';

    document.querySelector('#appendScript').appendChild(tagScript);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div className="model">
              {/* <img
                style={{ width: '100%' }}
                src="./carAdvRotate/images-black/images-black-1/civic-1.jpg"
                alt="car model"
              /> */}
              <div
                class="cloudimage-360"
                data-folder="./carAdvRotate/images-red/images-red-1/"
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>

              <div id="appendScript">
                {/* 
            Set script ở đây vẫn chưa được vì tính bất đồng bộ trong ele của React -> script là component chứ ko phải html bình thường
            Ctrl+click vào được
            -> 2 ele React render đồng thời và sẽ ko có tác dụng
            -> fix = component did mount, tới lifecycle sẽ kỹ hơn
            */}
                {/* <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js"></script> */}
              </div>
            </div>
            {/* b4-card-default */}
            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior color</h5>
              {/* b4-table-default */}
              <table className="table border border-color-light" border="1">
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$ 19.000,00</td>
                  </tr>
                  <tr>
                    <td>Engine Type</td>
                    <td>In-line-4-cylinder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-5">
            {/* b4-card-align */}
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior color</h5>
              <div className="container-fluid">{this.renderIcon()}</div>
            </div>
            <div className="card text-left mt-1">
              <h5 className="card-header text-default">Wheels</h5>
              <div className="container-fluid"> {this.renderWheels()} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
