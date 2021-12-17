import { combineReducers } from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';

// store tổng của ứng dụng
const rootReducer = combineReducers({
  //state giỏ hàng
  // Đúng tên phải là reducer lu6on chứ ko dùng chữ state
  stateGioHang: BaiTapGioHangReducer,
  // Cú pháp es6 viết gọn lại khi thuộc tính trùng tên với tham số
  BaiTapGameXucXacReducer,
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
});

export default rootReducer;
