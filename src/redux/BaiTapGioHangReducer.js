//setup State giỏ hàng trên store

const stateGioHang = {
  gioHang: [
    { maSP: 1, tenSP: 'Sản phẩm mặc định', hinhAnh: '', soLuong: 1, donGia: 1000 },
  ],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  return { ...state };
};

export default BaiTapGioHangReducer;
