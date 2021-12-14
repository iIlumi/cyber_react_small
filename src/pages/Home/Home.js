import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light">
        <h5>Khóa 1 - React cơ bản</h5>
        <NavLink className="d-block" to="/databinding">
          Data Binding
        </NavLink>
        <NavLink className="d-block" to="/handleevent">
          Handle Event
        </NavLink>
        <NavLink className="d-block" to="/chonxebasic">
          Chon xe basic
        </NavLink>
        <NavLink className="d-block" to="/btrenderphim">
          BT render phim
        </NavLink>
        <NavLink className="d-block" to="/btthukinh">
          BT thu kinh
        </NavLink>
        <NavLink className="d-block" to="/chonxeadv">
          Chọn xe adv
        </NavLink>
        <br></br>
        <h5>Khóa 2 - Truyền Data giữa các component</h5>
        <NavLink className="d-block" to="/productdemo">
          Product Demo
        </NavLink>
        <NavLink className="d-block" to="/propsfunctiondemo">
          Props function Demo
        </NavLink>

        {/* demo */}
      </div>
    );
  }
}
