import { combineReducers } from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
// thư mục reducers là các proj nhỏ trong Khóa 3 - ReactJS
import ToDoListReducer from '../reducers/ToDoListReducer';

// store tổng của ứng dụng
const rootReducer = combineReducers({
  //state giỏ hàng
  // Đúng tên phải là reducer lu6on chứ ko dùng chữ state
  stateGioHang: BaiTapGioHangReducer,
  // Cú pháp es6 viết gọn lại khi thuộc tính trùng tên với tham số
  BaiTapGameXucXacReducer,
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
  // Các reducer trong khóa 3, ko rename lại thư mục để dễ compare
  ToDoListReducer,
});

export default rootReducer;
