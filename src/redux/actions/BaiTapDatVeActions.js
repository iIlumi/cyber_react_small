import { DAT_GHE_CHEAT, HUY_GHE } from '../types/BaiTapDatVeType';

// Nếu dùng biến khác chữ data sẽ rõ nghĩa hơn nhiều
// Nhưng lại khó đưa thành template chuẩn
// es6 break sẽ là data: ghe giống ở hủy ghế
// -> chủ yếu cách set thẳng data template gọn nhất nhưng khó hiểu

export const datGheCheatAction = (data) => {
  return {
    type: DAT_GHE_CHEAT,
    data,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    data: soGhe,
  };
};
