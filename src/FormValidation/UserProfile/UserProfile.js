import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    passWord: '',
    passWordConfirm: '',
  };

  handleChangeValue = (event) => {
    let { name, value } = event.target;

    this.setState(
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
      // https://reactjs.org/docs/forms.html#handling-multiple-inputs
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
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
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className=" bg-white p-5 m-5"
        >
          <Helmet>
            <link rel="stylesheet" href="/cssHelmet/UserProfile.css" />
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
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) => this.handleChangeValue(e)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={(event) => this.handleChangeValue(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input
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
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  name="passWord"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  name="passWordConfirm"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passwordConfirm</label>
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
      </div>
    );
  }
}
