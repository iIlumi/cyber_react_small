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
      dispatch({
        type: 'TU_XI_RANDOM',
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
