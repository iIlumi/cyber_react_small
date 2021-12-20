import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import Swal from 'sweetalert2'
// import {Swal} from 'https://cdn.jsdelivr.net/npm/sweetalert2@11'

export default class UserProfile extends Component {
  // KEY:  google form , google input style css
  /**
   * Search keyword, tìm, copy, mod
   * Edit lại
   *
   * Google Material Design Input Boxes
   * https://codepen.io/benftwc/pen/VpQjNL
   *
   */

  /**
   * Để xử lý hiển thị lỗi nếu đặt là errFirstName thì xử lý code mệt
   * Ngoài ra ta đang set tên obj trùng với thuộc tính name trong input, giờ có err sẽ khác đi -> lại phải thêm xử lý bỏ từ err ...
   * Xử lý binding thêm phức tạp
   */
  // State default là rỗng đồng thời cũng để reset lại sau khí submit nên khi binding value vô sẽ hiện placeholder
  state = {
    values: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      passWord: '',
      passWordConfirm: '',
      // errFirstName: '',
    },
    errors: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      passWord: '',
      passWordConfirm: '',
      // errFirstName: '',
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    // Kiễm tra lỗi -> nếu sai thì error bằng chuỗi , đúng else thì rỗng
    // Kiểm tra tất cả các field phải khác rỗng
    if (value.trim() === '') {
      newErrors[name] = name + ' is required !';
    } else {
      newErrors[name] = '';
    }

    // KEYWORD: regex email js ,pattern regex email ... /
    // https://stackoverflow.com/questions/47277133/disable-unnecessary-escape-character-no-useless-escape
    if (type === 'email') {
      const regexEmail =
        //eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        //Nếu email không hợp lệ
        newErrors[name] = name + 'is invalid !';
      } else {
        newErrors[name] = ''; //Nếu email hợp lệ
      }
    }

    // Check passwordConfirm đã gõ giống passWord chưa
    if (name === 'passWordConfirm') {
      if (value === newValue['passWord']) {
        newErrors[name] = '';
      } else {
        newErrors[name] = name + ' is invalid';
      }
    }
    /**
     *  Chú ý vì setState là bất đồng bộ nên tránh tạo 2 setState riêng
     * Sẽ lỗi ko kiểm soát
     * Khi binding xong thì phải kèm setState update liền nếu ko sẽ luôn bị stateDefault đè hiển thị rỗng
     */
    this.setState({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
      // https://reactjs.org/docs/forms.html#handling-multiple-inputs
      // {
      //   [name]: value,
      // },
      // () => {
      //   console.log(this.state);
      // }

      values: newValue,
      errors: newErrors,
    });
  };

  handleSubmit = (event) => {
    // console.log(window.Swal)
    const Swal = window.Swal;
    // this.window là undefined
    //Cản trình duyệt submit reload lại trang
    event.preventDefault();
    let { values, errors } = this.state;
    // Tuy nhiên khi này form ko load lại nhưng vẫn submit data
    // Khi vừa load lên thì error và data đều rỗng nên phải xét cả 2 dk
    //Biến xác định form hợp lệ
    let valid = true;
    for (let key in values) {
      if (values[key] === '') {
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== '') {
        valid = false;
      }
    }
    if (!valid) {
      alert('Dữ liệu chưa hợp lệ');
      return;
    }
    alert('Thành công');
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  };

  render() {
    return (
      // Return về form, ko phải div
      <div
        className="container-fluid"
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className=" bg-white p-5 m-5"
        >
          <Helmet>
            <link rel="stylesheet" href="/cssHelmet/UserProfile.css" />
            {/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" /> */}
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
            {/* Link cdn mới đúng trong docs */}
            {/* {console.log(window.Swal)} */}
          </Helmet>
          <h1 className="text-center mt-0 mb-5">User Profile</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                {/* 
                Khác onChange js -> click ra khỏi ô mới nhận, 
                React sẽ lấy khi keyDown-Up là 1 lần change
                */}
                <input
                  value={this.state.values.firstName}
                  type="text"
                  required
                  name="firstName"
                  onChange={(e) => this.handleChangeValue(e)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  value={this.state.values.lastName}
                  name="lastName"
                  required
                  onChange={(event) => this.handleChangeValue(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  onChange={(e) => {
                    // vì ko có return nên {} và () và ko có ngoặc như nhau
                    this.handleChangeValue(e);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWord}
                  name="passWord"
                  type="password"
                  required
                  autoComplete="off"
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
                <span className="text text-danger">
                  {this.state.errors.passWord}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWordConfirm}
                  name="passWordConfirm"
                  type="password"
                  required
                  autoComplete="off"
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passwordConfirm</label>
                <span className="text text-danger">
                  {this.state.errors.passWordConfirm}
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn text-white bg-dark w-100"
                style={{ fontSize: 25 }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" /> */}

        {/* 
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"/>  
        Đặt trong head như guide
        */}
      </div>
      // Phải để trong Helmet đẩy lên head, trong docs cũng để trên head
    );
  }
}
