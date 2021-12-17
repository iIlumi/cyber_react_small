import React, { Component } from 'react';
import { ExModelListContext } from '../ContextDemo/_Context/ExModelListContext';

export default class ModelItem extends Component {
  render() {
    // Đặc điểm của Context-Provider là ko cần connectStateToProps và mapDispatch
    // Tiện code nhưng lại phải wrap Consummer bù
    // Cần kết hợp PureComponent vì tính chất của setState sẽ render bất chấp mọi component thường
    let { img, name, age, id, like } = this.props.modelItem ;
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          // Value là reducer local bao gồm state và các method trong Provider
          console.log('value:', value)
          return (
            <div className="card text-white bg-default text-dark">
              <img
                className="card-img-top"
                src = {img}
                alt = {img}
              />
              <div className="card-body">
                <h4 className="card-title">Họ Tên: {name}</h4>
                <p className="card-text">Tuổi: {age}</p>
                <button
                  style={{
                    background: 'none',
                    border: '1px solid red',
                    borderRadius: '5px',
                  }}
                  className="card-text"
                  onClick={() => {
                    // value.setActiveModel(modelItem.id);
                  }}
                >
                  {like} <i style={{ color: 'red' }} className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
