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
    case "__DISPATCH_TYPE":
      state.__dataChange = action.data;
      return state;
    default:
      return state;
  }
};

export default BaiTapOanTuXiReducer;
