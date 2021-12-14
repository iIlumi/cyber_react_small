import React, { Component } from 'react';
import ParentDemoChild from './ParentDemoChild';
import DanhSachSanPham from '../DanhSachSanPham';
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore';
import ParentRefDemo from './ParentRefDemo';

export default class DemoPropsChild extends Component {
  refDemo = React.createRef();
  // Tạo React con trỏ -> gán vào Component với props built-in 'ref'
  // Truy cập vào được các thuộc tính của component con thông qua '.current'

  // Tên phương thức đặt trùng với con cũng OK, demo nên đặt khác
  changeChildTitle = () => {
    this.refDemo.current.changeTitle();
  };

  changeChildTitleWPara = (name) => {
    this.refDemo.current.changeTitleWPara(name);
  };

  render() {
    return (
      // Cách nào hợp tình huống xài cũng ok, tiện là được
      <div>
        {/* <ParentDemoChild component={DanhSachSanPham} /> */}
        {/* truyền dạng dưới cũng ok */}
        <ParentDemoChild
          component={() => {
            return <DanhSachSanPham />;
          }}
        />
        {/* Cẩn thận việc các component children có id mà ko set động
         cùng gọi sẽ lỗi 
         String xuống hàng vẫn chỉ xem là 1 space
         */}
        <hr></hr>
        <h1 className="text-danger">
          Cách truyền dạng children lồng bên trong
        </h1>
        <button onClick={this.changeChildTitle}>Change title</button>
        <button
          onClick={() => {
            this.changeChildTitleWPara('Tilte changed x2');
          }}
        >
          Change child title w para
        </button>
        <hr></hr>
        <ParentRefDemo ref={this.refDemo}>
          123start
          <h2 className="text-info text-center bg-warning">
            2nd Children Component - Children [1]
          </h2>
          <ExerciseCarStore />
          456lsdlaf 789xyz
          <h2 className="text-info text-center bg-warning">
            Last Children Component
          </h2>
        </ParentRefDemo>
      </div>
    );
  }
}
