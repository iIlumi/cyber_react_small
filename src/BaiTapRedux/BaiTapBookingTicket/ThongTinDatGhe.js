import React, { Component } from 'react';
import { connect } from 'react-redux';

// Vì cheat phần data lưu trên store đon giản nhất có thể
// data trong state của store ko lưu giá mỗi ghế !!!
// Bắt buộc phải truy data gốc trong dataServer của json
// -> có cách nào lưu ngầm json cho các component con ko hay phải truyền xuống
// Hay kiểu lưu mặc định để gọi trong page đó

import danhSachGheData from '../../Data/danhSachGhe.json';
// Ko cần ĐN dispatch mà import thẳng action cần send hoặc code chay luôn
import { huyGheAction } from '../../redux/actions/BaiTapDatVeActions';
// import { HUY_GHE } from '../../redux/types/BaiTapDatVeType';

export class ThongTinDatGhe extends Component {
  /**
   * Phải tạo hàm riêng vì data đang lưu quá tệ
   * => bài toán truy ngược về tiền của mỗi ghế cực kì phức tạp phải quét qua mảng data gốc
   * Làm demo cho vui -> Rút kinh nghiệm data store ko nên là primitive mà luôn giữ ít nhất ở obj hoặc đẹp nhât là arr of obj -> [ {} , {} , ... {} ]
   *
   * -> tuy nhiên có thể gom es6 style lại mặc dù nhiều step
   * 1 lần duyệt qua mảng đặt, 1 lần duyệt qua từng obj của server , 1 lần duyệt từng row trong mỗi obj => n^3 !!!
   * Gọn được data trên store nhưng đánh đổi quá lớn
   * Data trên store có thể chọn lọc thuộc tính cần lưu, cùng lắm chỉ *n lên tùy cần bao nhiêu thuộc tính xử lý giao diện -> thêm dần, mở rộng được
   *
   */
  //  https://stackoverflow.com/questions/23359173/javascript-reduce-an-empty-array
  // testFunc = () => {
  //   console.log('danhSachGheDangDat:', this.props.danhSachGheDangDat);
  //   let mangMaSoGhe = this.props.danhSachGheDangDat;
  //   let temp = mangMaSoGhe.reduce((tongTien, maGheDat) => {
  //     console.log(' !!inside reduce !!')
  //     return (tongTien += danhSachGheData
  //       .find((hangGhe) => hangGhe.hang === maGheDat.charAt(0))
  //       .danhSachGhe.find((ghe) => ghe.soGhe === maGheDat).gia);
  //   }, 666);
  //   console.log('temp:', temp);
  // }

  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"> </button>{' '}
          <span className="text-light" style={{ fontSize: '30px' }}>
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"> </button>{' '}
          <span className="text-light" style={{ fontSize: '30px' }}>
            ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}>
            {' '}
          </button>{' '}
          <span className="text-light" style={{ fontSize: '30px' }}>
            ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {/* 1 hàm đơn giản nhưng cấu trúc dữ liệu trên store kém thì hậu quả kinh khủng 
              Ghế đang đặt hiện chỉ có duy nhất mã ghế
              gheDangDat trong map chỉ là string chứa maGhe do cấu trúc dữ lei65u hiện tại như vậy -> bad
              */}
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat}</td>
                    <td>
                      {danhSachGheData
                        .find(
                          (hangGhe) => hangGhe.hang === gheDangDat.charAt(0)
                        )
                        .danhSachGhe.find((ghe) => ghe.soGhe === gheDangDat)
                        .gia.toLocaleString()}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {/* {this.testFunc()} */}
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, maGheDat) => {
                      return (tongTien += danhSachGheData
                        .find((hangGhe) => hangGhe.hang === maGheDat.charAt(0))
                        .danhSachGhe.find((ghe) => ghe.soGhe === maGheDat).gia);
                    }, 0)
                    .toLocaleString()}
                  {/* no cheat - solution */}
                  {/* 
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                     */}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

/**
 *
 *  Phần connect store này sẹ làm khác tí
 * ko cần set dispatchToProps mà ta sẽ trực tiếp gọi phương thức dispatch có sẵn được định nghĩa trong ??? khi click button luôn !!!
 *
 * Chú ý là state trên store và state truyền vào component ở đây đang ĐN tên khác
 * -> ko nên, dễ rối, thà trùng hết sửa dễ nhưng phải hiểu bản chất
 */
const mapStateToProps = (state) => {
  const { danhSachGheDangDat_cheat: danhSachGheDangDat } =
    state.BaiTapDatVeReducer;
  return { danhSachGheDangDat };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     huyGhe: (data) => {
//       dispatch({
//         type: HUY_GHE,
//         data,
//       });
//     },
//   };
// };

// HOC -> khi đã connect redux sẽ tự sinh method dispatch
export default connect(mapStateToProps)(ThongTinDatGhe);

// Nếu truyền thêm thma số dispatch vô nữa có thể gây lỗi ?