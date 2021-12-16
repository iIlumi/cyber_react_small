import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Computer extends Component {
  render() {
    //   Tạo animation mô phỏng item thay đổi khi đang random
    // TODO animation ko mượt như bài mẫu ?
    let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -40px;}
        25% {top: 70px;}
        50% {top: -40px;}
        75% {top: 70px;}
        100% {top: 0;}
      }`

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: 'relative' }}>
          <img
            style={{
              position: 'absolute',
              left: '30%',
              animation: `randomItem${Date.now()} 0.5s`,
              transform: 'rotate(120deg)',
            }}
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
