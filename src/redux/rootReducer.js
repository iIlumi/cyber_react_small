import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

// store tổng của ứng dụng
const rootReducer = combineReducers({
  //state giỏ hàng
  stateGioHang: BaiTapGioHangReducer,
});

export default rootReducer;
