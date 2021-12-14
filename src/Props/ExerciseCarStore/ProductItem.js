import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        //Thuộc tính this.props.item lấy từ productListComponent
        let {img, name, price} = this.props.item;

        return (
            <div className="card text-left">
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{price}</p>
                    <button data-toggle="modal" data-target="#modelId" className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
