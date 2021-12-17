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
  // Chú ý state mới nhưng computer cũ ?
  // Tuy nhiên obj computer ko phải State lớn của chương trình
  // -> ko cần copy từ đầu vì ít tương tác
  // obj computer thực chất sinh ra từ random của mảng
  // deepcopy mảng là đủ, random bóc ra thì vẫn là copy mới
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
      // state.computer = { ...quanCuocNgauNhien };
      // Ở đây quân cược ngẫu nhiên lấy ra từ mảng đã copy trước
      // -> hiển nhiên sẽ ko cần copy dup nữa
      state.computer = quanCuocNgauNhien;

      return state;
    }

    case 'END_GAME': {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      // Assigning to new variable names
      let { ma: maPlayer } = state.mangDatCuoc.find(
        (item) => item.datCuoc === true
      );
      let { ma: maComputer } = state.computer;
      if (maPlayer === maComputer) {
        state.ketQua = 'hòa nhau !!!';
      } else if (
        (maPlayer === 'bua' && maComputer === 'keo') ||
        (maPlayer === 'bao' && maComputer === 'bua') ||
        (maPlayer === 'keo' && maComputer === 'bao')
      ) {
        state.soBanThang += 1;
        state.ketQua = "I'm iron man, i love you 3000 !!!";
      } else {
        state.ketQua = 'thua sml !!!';
      }
      state.soBanChoi += 1;
      return state;
    }
    default:
      return state;
  }
};

export default BaiTapOanTuXiReducer;
