import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarRoot.css';

export default class NavbarRoot extends Component {
  render() {
    const activeLinkStyle = {
      fontWeight: 'bold',
    };

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mt-1">
        <NavLink className="navbar-brand" to="/">
          Root Nav
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navRootId"
          aria-controls="navRootId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navRootId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={activeLinkStyle}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropup
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/databinding"
                >
                  Data Binding
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/handleevent"
                >
                  Handle Event
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/chonxebasic"
                >
                  Chon xe basic
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/btrenderphim"
                >
                  BT render phim
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/btthukinh"
                >
                  BT thu kinh
                </NavLink>
                {/* demo */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
