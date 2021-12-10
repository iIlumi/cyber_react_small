import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light">
        <NavLink className="d-block" to="/databinding">
          Data Binding
        </NavLink>
        <NavLink className="d-block" to="/handleevent">
          Handle Event
        </NavLink>
        <NavLink className="d-block" to="/chonxebasic">
          Chon xe basic
        </NavLink>
        {/* demo */}
      </div>
    );
  }
}
