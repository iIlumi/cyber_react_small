const stateDefault = {
  taiXiu: true, //True: là tài (từ 3->11), false là xỉu (12<)
  mangXucXac: [
    { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  const mangXucXac = [...state.mangXucXac];
  state = { ...state };
  state.mangXucXac = mangXucXac;
  // Switch về bài giỏ hàng sẽ vẫn thấy reducer dispatch lên
  // -> dispatch vào tất cả reducer con !!
  //   Tuy nhiên ở các reducer khác thì stateDefault sẽ khác
  //   Nhưng swtich case nếu trùng thì vẫn nhãy vô !! -> cẨn thận
  //   console.log('action:', action);

  switch (action.type) {
    case 'DAT_CUOC':
      state.taiXiu = action.data;
      return state;
    default:
      return state;
  }
};

export default BaiTapGameXucXacReducer;
