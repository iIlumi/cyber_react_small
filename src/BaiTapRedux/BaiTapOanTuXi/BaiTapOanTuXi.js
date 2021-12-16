import React, { Component } from 'react';
// import './BaiTapOanTuXi.css';
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { Helmet } from 'react-helmet';
export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi p-3">
        <Helmet>
          <link rel="stylesheet" href="/cssHelmet/BaiTapOanTuXi.css" />
        </Helmet>
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button className="btn btn-success p-2 display-4 mt-4">
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
