import React, { Component } from 'react';
// import './BaiTapOanTuXi.css';
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

export class BaiTapOanTuXi extends Component {
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
            <button
              className="btn btn-success p-2 display-4 mt-4"
              onClick={() => {
                this.props.playGame();
              }}
            >
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

// const mapStateToProps = (state) => {

//     const { __propsName } = state.__reducerName
//     return {__propsName}
// }

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      //   dispatch({
      //     type: 'TU_XI_RANDOM',
      //   });
      let count = 0;
      // Việc đặt tên hàm chỉ để gọi clear lại
      // Bản thân khi viết ra là đã callback đã loop
      // Có thể check bằng việc xóa clear nhưng vẫn để let
      // -> infinite loop
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: 'TU_XI_RANDOM',
        });
        count++;
        if (count > 10) {
          //Dừng hàm setInterval
          clearInterval(randomComputerItem);
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
