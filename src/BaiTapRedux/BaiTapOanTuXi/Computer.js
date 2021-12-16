import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Computer extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: 'rotate(120deg)' }}
            className="mt-3"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { computer } = state.BaiTapOanTuXiReducer;
  return { computer };
};

// const mapDispatchToProps = (dispatch) => {

//     return {
//         __callBack : (data) => {
//             dispatch({
//                 type:'__DISPATCH_TYPE' ,
//                 data
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Computer)
export default connect(mapStateToProps)(Computer);
