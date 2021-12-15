//setup State giỏ hàng trên store

const stateGioHang = {
  gioHang: [],
};

// action là 1 object gồm thuộc tính type và phần data tùy ý
// truy cập vào object action như obj bt, switch action.type để xử lý
// Đúng ra nên tạo state là deepcopy của stateGioHang từ đầu
// TODO nếu là nested obj sẵn thì có deepcopy xuống cấp sâu nhất ko
// Tự reset về commit này trước để test
// -> return ko cần copy lại
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case 'THEM_GIO_HANG': {
      let index = state.gioHang.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }
      // setState trong redux sẽ ko redux, ko gọi setState mà gán = luôn
      // Tuy nhiên cần phải tạo mới obj nếu ko js vẫn hiểu là obj địa chỉ cũ
      // vì nested obj lồng nhau nên phải deppcopy từng cấp của obj
      // -> new gioHang trong state -> new stateGioHang
      state.gioHang = [...state.gioHang];
      // console.log('gioHang',state.gioHang)

      return { ...state };
    }
    // break;
    // Vì return rồi nên ko cần break nữa -> unreachable code
    case 'XOA_GIO_HANG': {
      let gioHangCapNhat = [...state.gioHang];

      //Tìm ra phần tử cần xóa dựa vào maSP
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }
      //Cập nhật lại state giỏ hàng mới để component render lại
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    // break;
    default:
      return { ...state };
  }
  // return state; -> đưa vô default để tránh ESlInt báo lỗi
};

export default BaiTapGioHangReducer;
