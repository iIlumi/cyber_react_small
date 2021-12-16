import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Player extends Component {
  render() {
    let decision = this.props.mangDatCuoc.find(
      (item) => item.datCuoc === true
    );
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
          style={{ transform: 'rotate(120deg)' }}
          className="mt-3"
          width={100}
          height={100}
          src={decision.hinhAnh}
          alt={decision.hinhAnh}
        />
        
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //Xét giá trị đặt cược thêm viền cho item được chọn
            // code trực tiếp jsx vô

            let border = {};
            if (item.datCuoc) {
              border = { border: '3px solid orange' };
            }

            return (
              <div className="col-4" key={index}>
                <button style={border} className="btnItem">
                  <img
                    width={50}
                    height={50}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { mangDatCuoc } = state.BaiTapOanTuXiReducer;
  return { mangDatCuoc };
};

// const mapDispatchToProps = (dispatch) => {

//     return {
//         __callBack : (data) => {
//             dispatch({
//                 type:__DISPATCH_TYPE ,
//                 data
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Player)
export default connect(mapStateToProps)(Player);
