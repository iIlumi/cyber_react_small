import React, { Component } from 'react';

export default class ParentDemoChild extends Component {
  render() {
    return (
        /**
         * Nếu component truyền dạng callback thì gọi dc bằng cả 2 cách
         * Tuy nhiên cách gọi lại callback chuẩn hơn
         * Nếu component truyền dạng thẻ ở cách 1 thì ko gọi kiểu callback được
         */
      <div>
        <h3 className="text-center text-warning bg-danger ">
          Gọi dạng child component dạng thẻ
        </h3>
        <this.props.component />
            <h2 className="text-danger bg-primary text-center">
            Gọi dạng child component dạng callback
            </h2>
            {this.props.component()}
      </div>
    );
  }
}
