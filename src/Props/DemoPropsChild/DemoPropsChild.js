import React, { Component } from 'react';
import ParentDemoChild from './ParentDemoChild';
import DanhSachSanPham from '../DanhSachSanPham';
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore';
import ParentRefDemo from './ParentRefDemo';

export default class DemoPropsChild extends Component {
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
        <hr></hr>
        <ParentRefDemo>
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
