/**
 * Lồng DataBinding trong {} -> 'scope'
 *
 */

import React, { Component } from 'react';

export default class DataBindingRCC extends Component {
  // Tạo 1 thuộc tính - property -> vì là obj của class
  // constructor(props) {
  //   super(props);
  //   this.name = 'Anakin Skywalker';
  // }

  // Vì sử dụng create-react-app nên hỗ trợ cú pháp viết tắt
  // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  // https://medium.com/%40damianperaltam/using-class-instance-properties-in-react-with-create-react-app-and-babel-4ac4da5299e
  // https://2ality.com/2017/07/class-fields.html
  // Tuy nhiên nếu viết thẳng là this.name sẽ báo lỗi

  name = 'Anakin Skywalker';

  // Hạn chế sử dụng chữ class
  // Đây là thuộc tính obj binding

  character = {
    name: 'Dark Vader',
    charClass: 'lord',
  };

  // Binding phương thức (hàm của lớp đối tượng)
  // Tất cả hàm render đều phải trả về component (jsx) hoặc số / chuổi / boolean
  // Gọi render thì có thêm ()
  renderImage = () => {
    // img ở đây là jsx - 1 component của react và ctrl-click vào dc
    return (
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="img render"
      />
    );
  };

  renderInfoVirus = () => {
    const virus = {
      id: 'covid-19',
      name: 'corona',
      img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      alias: 'SARS-CoV-2',
    };
    return (
      <div className="card text-white bg-primary w-25 h-25">
        <img className="card-img-top" src={virus.img} alt={virus.id} />
        <div className="card-body">
          <h4 className="card-title">{virus.name}</h4>
          <p className="card-text">{virus.alias}</p>
        </div>
      </div>
    );
  };

  render() {
    // Trong hàm (method) chỉ có biến
    // Biến trong đây local ko share ra ngoài scope

    const job = 'jedi';

    const character2 = {
      name: 'Yoda',
      charClass: 'teacher',
    };

    // Nếu để bên trong thì là hàm, gọi ko cần this ~ rfc
    const renderInfoVirusFunc = () => {
      const virus = {
        id: 'covid-19',
        name: 'corona',
        img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        alias: 'SARS-CoV-2',
      };
      return (
        <div className="card text-white bg-secondary w-25 h-25">
          <img className="card-img-top" src={virus.img} alt={virus.id} />
          <div className="card-body">
            <h4 className="card-title">{virus.name}</h4>
            <p className="card-text">{virus.alias}</p>
          </div>
        </div>
      );
    };

    return (
      <div>
        <h2>Data Binding RCC - class</h2>
        <h1>
          Hello {job} {this.name}
        </h1>
        <h3 className="text-success">
          Binding obj: {this.character.charClass} ... {this.character.name}!
        </h3>
        <h4 className="text-warning">
          Student of {character2.charClass} - {character2.name}
        </h4>
        <hr></hr>
        {this.renderImage()}
        {this.renderInfoVirus()}
        {renderInfoVirusFunc()}
      </div>
    );
  }
}
