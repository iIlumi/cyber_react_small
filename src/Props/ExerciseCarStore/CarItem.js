import React, { Component } from 'react';

export default class CarItem extends Component {
  render() {
    //Thuộc tính this.props.item lấy từ productListComponent
    let { img, name, price } = this.props.item;

    return (
      <div className="card text-left">
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
          <button
            data-toggle="modal"
            data-target="#modelCarStore"
            className="btn btn-success"
            onClick={() => {
              this.props.xemChiTiet(this.props.item);
            }}
          >
            {/* data- là 2 thuộc tính riêng cảu modal bs để gọi modal lên */}
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
