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
      <form>
        <Helmet>
          <link rel="stylesheet" href="/cssHelmet/UserProfile.css" />
        </Helmet>
        <h1>User Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
