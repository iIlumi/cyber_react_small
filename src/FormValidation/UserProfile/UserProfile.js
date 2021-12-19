import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class UserProfile extends Component {
  // KEY:  google form , google input style css
  /**
   * Search keyword, tìm, copy, mod
   * Copy code mẫu vào và run thử coi ra được ko
   * Edit lại
   *
   * Google Material Design Input Boxes
   * https://codepen.io/benftwc/pen/VpQjNL
   *
   *
   */
  render() {
    return (
      // Return về orm, ko phải div
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
                <input type="text" name="firstName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="lastName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input type="text" name="userName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input type="text" name="email" required />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input name="passWord" type="password" required />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input name="passWordConfirm" type="password" required />
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
