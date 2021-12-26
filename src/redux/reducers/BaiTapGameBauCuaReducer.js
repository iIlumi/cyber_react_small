// rxreducer - snippet

const initialState = {
  danhSachCuoc: [
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ],
};

// invalid syntax: export a default and declare a variable at the same time
// ESLint warn no anonym export
// https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function
const BaiTapGameBauCuaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'DAT_CUOC_BAU_CUA': {
      // console.log('action',action)

      return { ...state, ...payload };
    }
    default:
      return state;
  }
};

export default BaiTapGameBauCuaReducer;
