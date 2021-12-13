import React, { Component } from 'react';
import './BaiTapChonXeNangCao.css';
//Import mảng dữ liệu các model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';
/**
 * TODO - WARNING
 * [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
 * 
 * https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
https://stackoverflow.com/questions/50466911/passive-event-listeners
https://pretagteam.com/question/how-to-add-passive-event-listeners-in-react
https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive


 * VM8378 v2.0.0.lazysizes.min.js:11 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    at t.value (https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js:11:20080)
    at t.value (https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js:11:12801)
value @ VM8378 v2.0.0.lazysizes.min.js:11
value @ VM8378 v2.0.0.lazysizes.min.js:11

-> Lỗi xuất hiện do remove 
 */
export default class BaiTapChonXeNangCao extends Component {
  state = {
    carCurrent: {
      id: 4,
      title: 'Rallye Red',
      type: 'Metallic',
      img: './carAdvRotate/icons/icon-red.jpg',
      srcImg: 'images-red/images-red-1/',
      color: 'Red',
      price: '22,550',
      engineType: 'In-Line 4-Cylinder',
      displacement: '1996 cc',
      horsepower: '158 @ 6500 rpm',
      torque: '138 lb-ft @ 4200 rpm',
      redline: '6700 rpm',
      wheels: [
        {
          idWheel: 1,
          srcImg: 'images-red/images-red-1/',
        },
        {
          idWheel: 2,
          srcImg: 'images-red/images-red-2/',
        },
        {
          idWheel: 3,
          srcImg: 'images-red/images-red-3/',
        },
      ],
    },
  };

  //Viết phương thức xử lý đổi xe = cách set lại giá trị mới cho carCurrent từ carItem
  changeCar = (newCar) => {
    this.setState({
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeCar(item);
          }}
          style={{ cursor: 'pointer' }}
          className="row border border-color-default m-3 p-2"
          key={index}
        >
          <div className="col-2 d-flex align-items-center">
            <img style={{ width: '100%' }} src={item.img} alt={index} />
          </div>
          <div className="col-10">
            <h3>{item.title}</h3>
            <span>{item.type}</span>
          </div>
        </div>
      );
    });
  };

  changeWheel = (newWheel) => {
    //Tìm trong state hiện tại (this.state.carCurrent.wheels)
    let obWheel = this.state.carCurrent.wheels.find(
      (item) => item.idWheel === newWheel.idWheel
    );
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // Array.find trả về undefined nếu ko thấy chứ ko phải -1 
    console.log('obWheel:', obWheel);
    if (obWheel !== undefined) {
      //lấy ra source hình ảnh từ this.state.carCurrent.wheels
      this.setState({
        carCurrent: { ...this.state.carCurrent, srcImg: obWheel.srcImg },
      });
    }
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            this.changeWheel(item);
          }}
          className="row border border-color-default m-3 p-2"
          key={index}
        >
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
    console.log('did mount');
  };

  // vấn đề xảy ra tương tự như  với css animation
  componentDidUpdate = () => {
    //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
    //Lưu ý: Không được phép setState tại component này vì infinity loop

    //clean ảnh cũ + script cũ,
    // -> nếu ko sẽ vẫn chạy nhưng ra nhiều xe cùng load
    // Load script mới trước -> gen lại ảnh mới !!
    // Hoặc có thể nhét script và cả ảnh vào chung 1 div cha
    // -> clean cùng lúc nhưng đổi cấu trúc html, tiện code hơn 1 tí
    // vì clean cả 2 được nên ko phải newDate như css animation

    /**
     * Tuy nhiên lại sao React ko re-render mà lại sinh thêm ra ele mới khi click ?
     * img car model sinh ra là do canvas của thư viện tạo ra, ko phải React !
     * Đúng ra phải xóa toàn bộ div con, re-render lại để thư viện tự sinh các component con đúng định nghĩa ???
     */
    document.querySelector('#carCurrent').innerHTML = '';
    document.querySelector('#appendScript').innerHTML = '';

    let tagScript = document.createElement('script');
    // tagScript.src =
    // 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js';
    // Sử dụng script Lazy load cho phần script thêm vào
    // Thư viện bất đồng bộ
    tagScript.src =
      'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

    document.querySelector('#appendScript').appendChild(tagScript);
    console.log('did update');
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div className="model">
              <div
                id="carCurrent"
                // width 100% ko đè được nhưng min-width lại override width!important được ??
                // Nhớ html -> jsx, class -> className
                style={{ minWidth: '100%' }}
                className="cloudimage-360"
                data-folder={'./carAdvRotate/' + this.state.carCurrent.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
              {/* <img
                style={{ width: '100%' }}
                src="./carAdvRotate/images-black/images-black-1/civic-1.jpg"
                alt="car model"
              /> */}
            </div>
            <div id="appendScript">
              {/* 
            Set script ở đây vẫn chưa được vì tính bất đồng bộ trong ele của React -> script là component chứ ko phải html bình thường
            Ctrl+click vào được
            -> 2 ele React render đồng thời và sẽ ko có tác dụng
            -> fix = component did mount, tới lifecycle sẽ kỹ hơn
            */}
              {/* <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js"></script> */}
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
