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
    case 'BID_DICE':
      state.taiXiu = action.data;
      return state;
    case 'PLAY_DICE':
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //Mỗi lần lặp random ra số ngẫu nhiên từ 1 -> 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
        };
        //Push vào mảng xúc xắc ngẫu nhiên
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      //Gán state mangXucXac = mangXucXacNgauNhien
      state.mangXucXac = mangXucXacNgauNhien;
      //Xử lý tăng bàn chơi
      state.tongSoBanChoi += 1;
      //Xử lý số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      // Xét điều kiện để người dùng thắng game
      // Viết tường minh So sánh boolean ra cũng ok
      if (
        (state.taiXiu && tongSoDiem > 11) ||
        (!state.taiXiu && tongSoDiem <= 11)
      ) {
        state.soBanThang += 1;
      }
      return state;
    default:
      return state;
  }
};

export default BaiTapGameXucXacReducer;
