import React, { Component } from 'react';
//Sử dụng thư viện kết nối với redux
import { connect } from 'react-redux';

class ProductItemRedux extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.sanPhamProps;

    return (
      <div className="card text-center">
        <img
          style={{ width: 250, height: 250, marginLeft: 50 }}
          className="card-img-top"
          src={hinhAnh}
          alt={tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(this.props.sanPhamProps);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

/**
 * Nơi nào tương tác setState lên store hì viết phương thức tại component đó
 * connect sẽ nhận 2 tham số,
 * lấy về -> stateToProp và đưa lên (setState) -> DispatchToProps
 * Cái nào ko dùng thì để null
 * -> VScode có gợi ý cú pháp của hàm redux connect -> đè Ctrl hover vào
 */

/**
 * Hàm gửi dữ liệu lên store
 * Dispatch return về 1 phương thức themGioHang và bên trong lại dùng phương thức dispatch của redux định nghĩa
 * Khác với StateToProps, dispatch ko biết chính xác obj reducer con nào trong RootReducer sẽ nhận action
 * Hiện tại class BaiTapGioHangReducer chưa được conponent nào import vào !!
 * -> root sẽ quét toàn bộ reducer con để xác định, nếu trùng đúng type thì dừng lại xử lý và break / return
 * -> chỉ xác định thuần túy dựa vào action.type và switch, !!
 * 
 */

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      //Tạo ra sp giỏ hàng cùng cấu trúc với obj trong gioReducer
      let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        donGia: sanPham.giaBan,
        soLuong: 1,
      };
      console.log('spGioHang for dispatch:', spGioHang);
      //Tạo ra action
      let action = {
        type: 'THEM_GIO_HANG',
        // Thuộc tính bắt buộc của action
        spGioHang,
      };
      //Dùng hàm dispatch từ redux => gửi dữ liệu lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);
