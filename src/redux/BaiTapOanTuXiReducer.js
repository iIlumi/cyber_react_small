const stateDefault = {
  mangDatCuoc: [
    { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: false },
    { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
    { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: true },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png' },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  const mangDatCuoc = [...state.mangDatCuoc];
  state = { ...state };
  state.mangDatCuoc = mangDatCuoc;

  switch (action.type) {
    case 'TU_XI_CHON': {
      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
      state.mangDatCuoc = mangDatCuoc.map((item) => {
        if (item.ma === action.data) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      return state;
    }
    
    case 'TU_XI_RANDOM': {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = { ...quanCuocNgauNhien };
      return state;
    }
    default:
      return state;
  }
};

export default BaiTapOanTuXiReducer;
