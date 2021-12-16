import React, { Component } from 'react';

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div style ={{fontSize: '2.5rem'}}>
        <div className="text-warning">bạn thua !!!</div>
        <div className="text-success">
          Số bàn thắng: <span className="text-warning">0</span>
        </div>
        <div className="text-success">
          Tổng số bàn chơi: <span className="text-warning">0</span>
        </div>
      </div>
    );
  }
}
