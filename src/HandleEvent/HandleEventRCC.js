import React, { Component } from 'react';

export default class HandleEventRCC extends Component {
  //Định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
  handleClickAlert = () => {
    alert('callback function when click');
  };

  handleClick = (name) => {
    alert('rfc with arguments name: ' + name);
  };

  /**
   * Truyền tham số xử lý khi click
   * Tham số truyền vào với binding bị chéo nhau
   * bind(this, 'hello men') -> param = 'hello men',  element = button (this)
   * Bind tác dụng để xác định ngữ nghĩa cho this là đối tượng đang click vào
   *
   */

  handleClickParam = (param, element) => {
    console.log('param', param);
    console.log('element', element);
    console.log('element target: ', element.target);
    alert('param: ' + param);
  };

  // ele ở trên chỉ để debug -> do bind trả về và nhận vào args
  // bỏ qua ok
  shortHandleClickParam = (param) => {
    console.log('param', param);
    alert('param: ' + param);
  };

  render() {
    /**
     * Cách viết direct function vào rất chuối
     * Nên định nghĩa hàm riêng ra
     * onClick sẽ nhận 1 callback function -> ko có đóng mở ngoặc
     * -> nếu this.handleClick('es6') thì vừa load trang lại sẽ chạy ngay
     *
     * Nếu sử dụng ES6 sẽ có vấn đề nhỏ
     * https://reactjs.org/docs/handling-events.html
     * Tuy nhiên code đơn giản và nếu ko phức tạp thì ưu tiên arrow
     * Bản chất es6 ngữ cảnh con trỏ this ko thay đổi
     * Binding có tác dụng cố định con trỏ this nên tương tự
     */

    /**
     * btn Callback no para cách viết đó sẽ ko truyền tham số vào được
     * Cách arrow truyền ok
     * Sữ dụng 1 function callback nặc danh, click vô mới chạy hàm kèm args !!
     */
    const noThisHandleInside = (name) => {
      alert('no this handle for: ' + name);
    };
    // Nếu đặt hàm trong đây thì ko cần this
    // -> tương tự phần data binding
    // !! Tuy nhiên khi đó sẽ làm hàm render quá nhiều dữ liệu
    // Arrow w args btn mà dùng function thường thay vì arrow sẽ ko được
    // TH nếu hàm này ở ngoài phải gọi kèm this phía trước nhưng khi đó sẽ lỗi
    // Chỉ phù hợp với dạng functional

    return (
      <div>
        <h1>RCC handle Event</h1>
        <button
          id="btnClickMe"
          onClick={function () {
            alert('direct function');
          }}
        >
          Direct func
        </button>

        <button id="btnClickMe" onClick={this.handleClickAlert}>
          Callback no para
        </button>

        <br />

        <button
          id="btnClickMe"
          onClick={() => {
            alert('arrow es6');
          }}
        >
          Arrow direct
        </button>

        <button
          id="btnClickMe"
          onClick={() => {
            this.handleClickAlert();
          }}
        >
          Arrow callback
        </button>

        <h3 className="text-primary">
          RCC Passing Arguments to Event Handlers
        </h3>

        <button
          className="btn-primary"
          id="btnClickMe"
          onClick={() => {
            this.handleClick('arrow es6');
          }}
        >
          Arrow w args
        </button>
        <button
          id="btnClickMe"
          onClick={this.handleClickParam.bind(this, 'hello men')}
        >
          Binding style w this
        </button>
        <button
          id="btnClickMe"
          onClick={this.shortHandleClickParam.bind(this, 'hello men')}
        >
          Binding style 2
        </button>

        <h3 className="text-danger">
          Special case inside - for demo only, dont applied
        </h3>
        <button
          className="btn-danger"
          id="btnClickMe"
          onClick={function () {
            noThisHandleInside('DEMO ONLY !!!!');
          }}
        >
          Demo only
        </button>
      </div>
    );
  }
}
