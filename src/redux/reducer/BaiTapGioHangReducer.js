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
const BaiTapGioHangReducer = (reduxState = stateGioHang, action) => {
  // ko destruct ở para được vì đó là biến chuẩn để so sánh với obj return ?
  // Deepcopy state mới với gioHang mới
  let state = { ...reduxState };
  let gioHang = [...reduxState.gioHang];
  state.gioHang = gioHang;

  switch (action.type) {
    case 'THEM_GIO_HANG': {
      let index = gioHang.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        gioHang[index].soLuong += 1;
      } else {
        gioHang.push(action.spGioHang);
      }
      // setState trong redux sẽ ko redux, ko gọi setState mà gán = luôn
      // Tuy nhiên cần phải tạo mới obj nếu ko js vẫn hiểu là obj địa chỉ cũ
      // vì nested obj lồng nhau nên phải deppcopy từng cấp của obj
      // -> new gioHang trong state -> new stateGioHang
      // state.gioHang = [...state.gioHang];
      // console.log('gioHang',state.gioHang)

      return state;
    }
    // break;
    // Vì return rồi nên ko cần break nữa -> unreachable code
    case 'XOA_GIO_HANG': {
      // let gioHangCapNhat = [...state.gioHang];

      //Tìm ra phần tử cần xóa dựa vào maSP
      let index = gioHang.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHang.splice(index, 1);
      }
      //Cập nhật lại state giỏ hàng mới để component render lại
      // state.gioHang = gioHangCapNhat;
      return state;
    }
    // break;
    case 'TANG_GIAM_SO_LUONG': {
      // let gioHangCapNhat = [...state.gioHang];
      //Xử lý tăng giảm trên giỏ hàng cập nhật
      let index = gioHang.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          gioHang[index].soLuong += 1;
        } else {
          if (gioHang[index].soLuong > 1) {
            gioHang[index].soLuong -= 1;
          } else {
            alert('Số lượng tối thiểu là 1!');
            gioHang.splice(index, 1);
          }
        }
      }
      //Lấy giá trị giỏ hàng cập nhật gán vào state.gioHang
      // state.gioHang = gioHangCapNhat;
      return state;
    }
    // break;
    default:
      return state;
  }
  // return state; -> đưa vô default để tránh ESlInt báo lỗi
};

export default BaiTapGioHangReducer;
