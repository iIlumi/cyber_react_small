import { DAT_GHE_CHEAT, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat_cheat: [],
};

/**
 * ý tưởng thông thường là sẽ nhét cả obj ghế vào mảng
 * Tuy nhiên ở đây solve ăn gian bằng cách chỉ nhét mã ghế đang đặt vào
 * -> Đơn giản data, nhẹ redux,
 * 
 * Vấn đề deepcopy ko ảnh hưởng
 * obj khi push vào là hoàn toàn mới nên ko cần deepcopy tần nested trong
 * mảng bự đã copy sẵn, khi remove 1 ghế thì obj văng ra luôn -> mới hoàn toàn
 * nếu ko cần thao tác thay đổi thuộc tính trong mỗi ghế thì
 * với  thao tác push và remove array sẽ luôn được đảm bảo mới 100% nếu đã copy trước
 * 
 * Các thông tin data của ghế đã được lấy từ server khi init 
 * -> lưu lại react tĩnh trong từng Component con
 * Redux chỉ lưu đúng data về trăng thái, 
 * 
 * -> Tuy nhiên nếu giá ghế thay đổi, mã giảm giá ...
 * -> phải xem xét lại bài toán khi đó có cần push cả obj lên chưa
 * 
 */

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  const danhSachGheDangDat_cheat = [...state.danhSachGheDangDat_cheat];
  state = { ...state };
  state.danhSachGheDangDat_cheat = danhSachGheDangDat_cheat;

  switch (action.type) {
    case DAT_GHE_CHEAT:
      //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
      //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào
      //   Ở đây có thể push cả obj ghế lên nhưng vì bài này ko dùng tới
      //   -> cheat solution
      let index = danhSachGheDangDat_cheat.findIndex(
        (gheDangDat) => gheDangDat === action.data
      );
      console.log('action.data:', action.data);
      console.log('index:', index);
      if (index !== -1) {
        danhSachGheDangDat_cheat.splice(index, 1);
      } else {
        danhSachGheDangDat_cheat.push(action.data);
      }
      console.log('danhSachGheDangDat_cheat:', danhSachGheDangDat_cheat);
      return state;
      
    case HUY_GHE:
      return state;

    default:
      return state;
  }
};

export default BaiTapDatVeReducer;
